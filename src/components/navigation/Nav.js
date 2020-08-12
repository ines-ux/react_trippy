import React from 'react';
import styled from 'styled-components';
import Global from '../../Global';
import { BrowserRouter as Link } from 'react-router-dom';

const Container = styled.nav`
	padding: 10px 0;
	background-color: ${Global.color.primary};
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	ul {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		padding: 0;
	}
	ul li {
		list-style-type: none;
	}
	ul li font {
		padding: 0 5px;
	}
`;

class Nav extends React.Component {
	render() {
		return (
			<Container className="fixed-top">
				<Link to="/">
					<i className="material-icons">local_dining</i>
					Trippy
				</Link>
				<ul>
					<li>
						<Link to="/hotels">Hotels</Link>
					</li>
					<li>
						<Link to="/restaurants">restaurants</Link>
					</li>
					<li>
						<Link to="/signup">Signup</Link>
					</li>
					<li>
						<Link to="/login">Login</Link>
					</li>
				</ul>
			</Container>
		);
	}
}

export default Nav;
