import React from "react";
import { Card, Image, Button } from "semantic-ui-react";
import { ITrade } from "../../../models/trade";

interface IProps {
	selectedTrade: ITrade;
	setEditMode: (editMode: boolean) => void;
	setSelectedTrade: (trade: ITrade | null) => void;
}

export const TradeDetails: React.FC<IProps> = ({
	selectedTrade,
	setEditMode,
	setSelectedTrade,
}) => { 
	return (
		<Card fluid>
			<Image src="/images/avatar/large/matthew.png" wrapped ui={false} />
			<Card.Content>
				<Card.Header>{selectedTrade.title}</Card.Header>
				<Card.Meta>
					<span>{selectedTrade.date}</span>
				</Card.Meta>
				<Card.Description>{selectedTrade.description}</Card.Description>
			</Card.Content>
			<Card.Content extra>
				<Button.Group widths={2}>
					<Button
						onClick={() => setEditMode(true)}
						basic
						color="blue"
						content="Edit"
					/>
					<Button
						onClick={() => setSelectedTrade(null)}
						basic
						color="grey"
						content="Cancel"
					/>
				</Button.Group>
			</Card.Content>
		</Card>
	);
};
