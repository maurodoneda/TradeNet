import React from "react";
import { Grid, List } from "semantic-ui-react";
import { ITrade } from "../../../../app/models/trade";
import { TradesList } from "./TradesList";
import { TradeDetails } from "../details/TradeDetails";
import { TradeForm } from "../form/TradeForm";

interface IProps {
	trades: ITrade[];
}

export const TradesDashboard: React.FC<IProps> = ({trades}) => {
	return (
		<Grid>
			<Grid.Column width={10}>
                <TradesList trades={trades}/>
			</Grid.Column>
			<Grid.Column width={6}>
                <TradeDetails/>
                <TradeForm/>
			</Grid.Column>
		</Grid>
	);
};
