import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import HomeContainer from './containers/HomeContainer';
import Config from './Config';
import Global from './Global';

class App extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<Switch>
						<Route path="/">
							<HomeContainer />
						</Route>
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
