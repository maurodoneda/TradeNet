import React, { useState, useEffect, Fragment } from "react";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import axios from "axios";
import { ITrade } from "../models/trade";
import { NavBar } from "./nav/NavBar";
import { TradesDashboard } from "./trades/dashboard/TradesDashboard";

const App = () => {
	const [trades, setTrades] = useState<ITrade[]>([]);
	const [selectedTrade, setSelectedTrade] = useState<ITrade | null>(null);
	const [editMode, setEditMode] = useState(false);

	const handleSelectedTrade = (id: string) => {
		setSelectedTrade(trades.filter((a) => a.id === id)[0]);
		setEditMode(false);
	};

	const handleOpenCreateForm = () => {
		setSelectedTrade(null);
		setEditMode(true);
	};

	const handleCreateTrade = (trade: ITrade) => {
		setTrades([...trades, trade]);
		setSelectedTrade(trade);
		setEditMode(false);
	};

	const handleEditTrade = (trade: ITrade) => {
		setTrades([...trades.filter((t) => t.id !== trade.id), trade]);
		setSelectedTrade(trade);
		setEditMode(false);
	};

	const handleDeleteTrade = (id: string) => {
		setTrades([...trades.filter(t => t.id !== id)]);
	}

	useEffect(() => {
		axios.get<ITrade[]>("http://localhost:5000/api/trades").then((response) => {
			let trades:ITrade[] = [];
			response.data.forEach(trade => {
				trade.date = trade.date.split('.')[0];
				trades.push(trade);
			})
		 
			setTrades(trades);
		});
	}, []);
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
				/>
			</Container>
		</Fragment>
	);
};

export default App;
