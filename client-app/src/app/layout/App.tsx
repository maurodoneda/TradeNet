import React, { useState, useEffect, Fragment} from "react";
import "semantic-ui-css/semantic.min.css";
import { Header, Icon, List, Container } from "semantic-ui-react";
import axios from "axios";
import { ITrade } from "../models/trade";
import { NavBar } from "./nav/NavBar";
import { TradesDashboard } from "./trades/dashboard/TradesDashboard";

const App = () => {
	const [trades, setTrades] = useState<ITrade[]>([]);

	useEffect(() => {
		axios.get<ITrade[]>("http://localhost:5000/api/trades").then((response) => {
			setTrades(response.data);
		});
	}, []);
	return (
		<Fragment>
			<NavBar />

			<Container style={{marginTop: '7em'}}>
				<TradesDashboard trades = {trades}/>
			</Container>
		</Fragment>
	);
};

export default App;
