import React from "react";
import { Item, Button, Label, Segment } from "semantic-ui-react";
import { ITrade } from "../../../models/trade";

interface IProps {
    trades: ITrade[];
	selectTrade: (id: string) => void;
	deleteTrade: (id: string) => void;  
}

export const TradesList: React.FC<IProps> = ({trades, selectTrade, deleteTrade}) => {
	return (
		<Segment clearing>
			<Item.Group divided>
				{trades.map((trade) => (
					<Item key={trade.id}>
						<Item.Content>
                <Item.Header as="a">{trade.title}</Item.Header>
                <Item.Meta>{trade.date}</Item.Meta>
							<Item.Description>
                <div>{trade.description}</div>
								<div>{trade.asset}, {trade.market}</div>
							</Item.Description>
							<Item.Extra>
								<Button onClick={()=> selectTrade(trade.id)} floated="right" content="View" color="blue" />
								<Button onClick={()=> deleteTrade(trade.id)} floated="right" content="Delete" color="red" />
								<Label basic content= {trade.type} />
							</Item.Extra>
						</Item.Content> 
					</Item>
				))}
			</Item.Group>
		</Segment>
	);
};
