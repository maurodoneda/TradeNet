import React, { useState, useEffect, Fragment, SyntheticEvent } from "react";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import { ITrade } from "../models/trade";
import { NavBar } from "./nav/NavBar";
import { TradesDashboard } from "./trades/dashboard/TradesDashboard";
import agent from "../api/agent";
import { LoadingComponent } from "./LoadingComponent";

const App = () => {
	const [trades, setTrades] = useState<ITrade[]>([]);
	const [selectedTrade, setSelectedTrade] = useState<ITrade | null>(null);
	const [editMode, setEditMode] = useState(false);
	const [loading, setLoading] = useState(true); 
	const [submitting, setSubmitting] = useState(false);
	const [target, setTarget] = useState('');	

	const handleSelectedTrade = (id: string) => {
		setSelectedTrade(trades.filter((a) => a.id === id)[0]);
		setEditMode(false);
	};

	const handleOpenCreateForm = () => {
		setSelectedTrade(null);
		setEditMode(true);
	};

	const handleCreateTrade = (trade: ITrade) => {
		setSubmitting(true);
		agent.Trades.create(trade).then(() => {
			setTrades([...trades, trade]);
			setSelectedTrade(trade);
			setEditMode(false);
		}).then(() => setSubmitting(false));
	};

	const handleEditTrade = (trade: ITrade) => {
		setSubmitting(true);
		agent.Trades.update(trade).then(() => {
			setTrades([...trades.filter((t) => t.id !== trade.id), trade]);
			setSelectedTrade(trade);
			setEditMode(false);
		}).then(() => setSubmitting(false));
	};

	const handleDeleteTrade = (event: SyntheticEvent<HTMLButtonElement>, id: string) => {
		setSubmitting(true);
		setTarget(event.currentTarget.name) 
		agent.Trades.delete(id).then(() => {
			setTrades([...trades.filter((t) => t.id !== id)]);
		}).then(() => setSubmitting(false));
	};

	useEffect(() => {
		agent.Trades.list().then((response) => {
			let trades: ITrade[] = [];
			response.forEach((trade) => {
				trade.date = trade.date.split(".")[0];
				trades.push(trade);
			});

			setTrades(trades);
		}).then(()=> setLoading(false));
	}, []);

	if(loading) return <LoadingComponent content='Loading Trades...'/>

	return (
		<Fragment>
			<NavBar openCreateForm={handleOpenCreateForm} />

			<Container style={{ marginTop: "7em" }}>
				<TradesDashboard
					trades={trades}
					selectTrade={handleSelectedTrade}
					selectedTrade={selectedTrade}
					setSelectedTrade={setSelectedTrade}
					editMode={editMode}
					setEditMode={setEditMode}
					createTrade={handleCreateTrade}
					editTrade={handleEditTrade}
					deleteTrade={handleDeleteTrade}
					submitting={submitting}
					target={target}
				/>
			</Container>
		</Fragment>
	);
};

export default App;
