using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace App.Trades
{
    public class Delete
    {
        public class Command : IRequest
        {
            //properties
            public Guid Id { get; set; }

        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                //handler logic goes here
                var trade = await _context.Trades.FindAsync(request.Id);

                if(trade == null)
                    throw new Exception("Could not find trade");

                _context.Remove(trade);

                var success = await _context.SaveChangesAsync() > 0;

                if (success)
                    return Unit.Value;
                throw new Exception("A problem ocurred saving changes");
            }
        }
    }
}