using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using App.Trades;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class TradesController : ControllerBase
    {

        //Mediates de queries passed from the Application
        private readonly IMediator _mediator;
        public TradesController(IMediator mediator)
        {
            _mediator = mediator;
        }


        //Get all the trades from the List
        [HttpGet]
        public async Task<ActionResult<List<Trade>>> List()
        {
            return await _mediator.Send(new TradesList.Query());
        }

        //Get single trade by id
        [HttpGet("{id}")]
        public async Task<ActionResult<Trade>> Details (Guid id)
        { 
            return await _mediator.Send(new Details.Query{Id = id});
        }

        [HttpPost]
        public async Task<ActionResult<Unit>> Create(Create.Command command)
        {
            return await _mediator.Send(command);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Unit>> Edit(Guid id, Edit.Command command)
        {
              command.Id = id;
              return await _mediator.Send(command);  
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Unit>> Delete(Guid id)
        {
            return await _mediator.Send(new Delete.Command{Id = id});
        }
    }
}