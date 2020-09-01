import React, { SyntheticEvent } from "react";
import { Grid } from "semantic-ui-react";
import { ITrade } from "../../../../app/models/trade";
import { TradesList } from "./TradesList";
import { TradeDetails } from "../details/TradeDetails";
import { TradeForm } from "../form/TradeForm";

interface IProps {
	trades: ITrade[];
	selectTrade: (id: string) => void;
	selectedTrade: ITrade | null;
	editMode: boolean;
	setEditMode: (editMode: boolean) => void;
	setSelectedTrade: (trade: ITrade | null) => void;
	createTrade: (trade: ITrade) => void;
	editTrade: (trade: ITrade) => void;
	deleteTrade: (e:SyntheticEvent<HTMLButtonElement>, id: string) => void;
	submitting: boolean, 
	target: string
}

export const TradesDashboard: React.FC<IProps> = ({
	trades,
	selectTrade,
	selectedTrade,
	editMode,
	setEditMode,
	setSelectedTrade,
	createTrade,
	editTrade,
	deleteTrade,
	submitting,
	target
}) => {
	return (
		<Grid>
			<Grid.Column width={10}>
				<TradesList
					trades={trades}
					selectTrade={selectTrade}
					deleteTrade={deleteTrade}
					submitting={submitting}
					target = {target}
				/>
			</Grid.Column>
			<Grid.Column width={6}>
				{selectedTrade && !editMode && (
					<TradeDetails
						selectedTrade={selectedTrade}
						setEditMode={setEditMode}
						setSelectedTrade={setSelectedTrade}
					/>
				)}

				{editMode && (
					<TradeForm
						key={(selectedTrade && selectedTrade.id) || 0}
						setEditMode={setEditMode}
						selectedTrade={selectedTrade!}
						createTrade={createTrade}
						editTrade={editTrade}
						submitting={submitting}
					/>
				)}
			</Grid.Column>
		</Grid>
	);
};
