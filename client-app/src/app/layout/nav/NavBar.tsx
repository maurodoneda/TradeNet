import React from "react";
import { Menu, Container, Button } from "semantic-ui-react";

interface IProps{
	openCreateForm: () => void;
}

export const NavBar: React.FC<IProps> = ({openCreateForm}) => {
	return (
		<Menu fixed="top" inverted>
			<Container>
				<Menu.Item header>
					<img src="/assets/logo.png" alt="logo" />
					TradeNet
				</Menu.Item>
				<Menu.Item name="Trades" />
				<Menu.Item>
                    <Button onClick={openCreateForm} positive content='Add New Trade' />
                </Menu.Item>
			</Container>
		</Menu>
	);
};
