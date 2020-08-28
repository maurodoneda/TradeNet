using System;
using System.Collections.Generic;
using System.Linq;
using Domain;

namespace Persistence
{
    public class Seed
    {
        public static void SeedData(DataContext context)
        {
            if(!context.Trades.Any())
            {
                var trades = new List<Trade>
                {
                    new Trade
                    {
                        Title = "Buy mini-SP now",
                        Date = DateTime.Now.AddMonths(-5),
                        Description = "Its a grat opportunity to buy anithing now on this prices!!",
                        Type = "Long",
                        Asset = "ES-0",
                        Market = "NYSE",
                    },

                     new Trade
                    {
                        Title = "Short TSLA",
                        Date = DateTime.Now.AddMonths(-1),
                        Description = "This prices in Tesla are ridiculous going short now!!",
                        Type = "Short",
                        Asset = "TSLA",
                        Market = "NASDAQ",
                    },

                     new Trade
                    {
                        Title = "Opportunity in Brazil - EWZ",
                        Date = DateTime.Now.AddMonths(-4),
                        Description = "Brazilian stocks are on their lowest prices in 15 years, great riskxreward ratio! Going Long EWZ",
                        Type = "Long",
                        Asset = "EWZ",
                        Market = "NYSE",
                    },

                     new Trade
                    {
                        Title = "Long Call Spread APPL",
                        Date = DateTime.Now.AddMonths(-1),
                        Description = "Expecting grat ernings reports from Apple - entering a Long Call Spread from 1200 to 1300",
                        Type = "Options Spread",
                        Asset = "APPL",
                        Market = "NYSE",
                    },

                     new Trade
                    {
                        Title = "LEAP Calendar spread with PBR",
                        Date = DateTime.Now.AddMonths(-1),
                        Description = "Very cheap LEAPs for 2021 in PBR - worth mounting a calendar spread",
                        Type = "Options Spread",
                        Asset = "PBR",
                        Market = "NYSE",
                    },

                     new Trade
                    {
                        Title = "New Tech BOOM",
                        Date = DateTime.Now.AddMonths(-4),
                        Description = "FANG companies will have a new boom after this pandemic, going long on these prices!",
                        Type = "Long",
                        Asset = "QQQ",
                        Market = "NASDAQ",
                    }
                };

                context.Trades.AddRange(trades);
                context.SaveChanges();
            }
        }
    }
}