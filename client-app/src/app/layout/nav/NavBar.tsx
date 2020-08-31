import React from "react";
import { Menu, Container, MenuItem, Button } from "semantic-ui-react";

export const NavBar = () => {
	return (
		<Menu fixed="top" inverted>
			<Container>
				<Menu.Item header>
					<img src="/assets/logo.png" alt="logo" />
					TradeNet
				</Menu.Item>
				<Menu.Item name="Trades" />
				<Menu.Item>
                    <Button positive content='Add New Trade' />
                </Menu.Item>
			</Container>
		</Menu>
	);
};
