using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace App.Trades
{
    public class Create
    {

        public class Command : IRequest
        {
            public Guid Id { get; set; }
            public string Title { get; set; }
            public string Description { get; set; }
            public string Type { get; set; }
            public string Asset { get; set; }
            public DateTime Date { get; set; }
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
                var trade = new Trade
                {
                    Id = request.Id,
                    Title = request.Title,
                    Description = request.Description,
                    Type = request.Type,
                    Asset = request.Asset,
                    Date = request.Date,
                    Market = request.Market,
                };
                
                _context.Add(trade);
                var success = await _context.SaveChangesAsync() > 0;

                if(success)
                    return Unit.Value;
                    throw new Exception("A problem ocurred saving changes");
            }
        }
    }
}