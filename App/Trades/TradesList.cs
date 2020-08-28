using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace App.Trades
{
    public class TradesList
    {
        public class Query : IRequest<List<Trade>>
        {
        }

        public class Handler : IRequestHandler<Query, List<Trade>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Trade>> Handle(Query request, CancellationToken cancellationToken)
            {
                var trades = await _context.Trades.ToListAsync();

                return trades;
            }
        }
    }
}