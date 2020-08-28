using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace App.Trades
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }
            public string Title { get; set; }
            public string Description { get; set; }
            public string Type { get; set; }
            public string Asset { get; set; }
            public DateTime? Date { get; set; }
            public string Market { get; set; }
            public int NumberOfLikes { get; set; }
            public int NumberOfDislikes { get; set; }
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

                trade.Title = request.Title ?? trade.Title;
                trade.Description = request.Description ?? trade.Description;
                trade.Type = request.Type ?? trade.Type;
                trade.Asset = request.Asset ?? trade.Asset;
                trade.Date = request.Date ?? trade.Date;
                trade.Market = request.Market?? trade.Market;

                var success = await _context.SaveChangesAsync() > 0;

                if (success)
                     return Unit.Value;

                throw new Exception("A problem ocurred saving changes");
            }
        }
    }
}