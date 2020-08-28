using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace App.Trades
{
    public class Details
    {
        public class Query : IRequest<Trade>
        {
            public Guid Id { get; set; }

        }

        public class Handler : IRequestHandler<Query, Trade>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;

            }

            public async Task<Trade> Handle(Query request, CancellationToken cancellationToken)
            {

                var trade = await _context.Trades.FindAsync(request.Id); 

                return trade;
            }
        }
    }
}