import React, { useState, FormEvent } from "react";
import { Segment, Form, Button } from "semantic-ui-react";
import { ITrade } from "../../../models/trade";
import {v4 as uuid} from "uuid";

interface IProps {
	setEditMode: (editMode: boolean) => void;
	selectedTrade: ITrade;
	createTrade: (trade: ITrade) => void;
	editTrade: (trade: ITrade) => void;
	submitting: boolean;
}

export const TradeForm: React.FC<IProps> = ({
	setEditMode,
	selectedTrade,
	createTrade,
	editTrade,
	submitting
} ) => {
	const initializeForm = () => {
		if (selectedTrade) {
			return selectedTrade;
		} else {
			return {
				id: "",
				title: "",
				description: "",
				date: "",
				type: "",
				asset: "",
				market: "",
				numberOfLikes: 0,
				numberOfDislikes: 0,
			};
		}
	};

	const [trade, setTrade] = useState<ITrade>(initializeForm);

	const handleSubmit = () => {
		if(trade.id.length ===  0){
			let newTrade ={
				...trade,
				id: uuid()
			}

			createTrade(newTrade);
		} else {
			editTrade(trade);
		}
	} 

	const handleInputChange = (
		event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		console.log(event.currentTarget.value);
		const { name, value } = event.currentTarget;
		setTrade({ ...trade, [name]: value });
	};

	return (
		<Segment clearing>
			<Form onSubmit={handleSubmit}> 
				<Form.Input
					onChange={handleInputChange}
					name="title"
					placeholder="Title"
					value={trade.title}
				/>
				<Form.TextArea
					rows={3}
					onChange={handleInputChange}
					name="description"
					placeholder="Description"
					value={trade.description}
				/>
				<Form.Input
					type="datetime-local"
					onChange={handleInputChange}
					name="date"
					placeholder="Date"
					value={trade.date}
				/>
				<Form.Input
					onChange={handleInputChange}
					name="type"
					placeholder="Type"
					value={trade.type}
				/>
				<Form.Input
					onChange={handleInputChange}
					name="asset"
					placeholder="Asset"
					value={trade.asset}
				/>
				<Form.Input
					onChange={handleInputChange}
					name="market"
					placeholder="Market"
					value={trade.market}
				/>
				<Button.Group widths={2}>
					<Button loading={submitting} floated="left" positive type="submit" content="Submit" />
					<Button
						onClick={() => setEditMode(false)}
						type="button"
						content="Cancel"
					/>
				</Button.Group>
			</Form>
		</Segment>
	);
};
