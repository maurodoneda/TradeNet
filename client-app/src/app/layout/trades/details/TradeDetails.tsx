import React from "react";
import { Card, Image, Icon, Button } from "semantic-ui-react";

export const TradeDetails = () => {
	return (
		<Card fluid>
			<Image src="/images/avatar/large/matthew.png" wrapped ui={false} />
			<Card.Content>
				<Card.Header>Matthew</Card.Header>
				<Card.Meta>
					<span>Date</span>
				</Card.Meta>
				<Card.Description>
					Matthew is a musician living in Nashville.
				</Card.Description>
			</Card.Content>
			<Card.Content extra>
                <Button.Group widths={2}>
                    <Button basic color='blue' content='Edit'/>
                    <Button basic color= 'grey' content='Cancel'/>
                </Button.Group>
			</Card.Content>
		</Card>
	);
};
