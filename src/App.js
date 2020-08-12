import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import HomeContainer from './containers/HomeContainer';
import Config from './Config';
import Global from './Global';
import HotelContainer from './containers/HotelContainer';
import HotelsContainer from './containers/HotelsContainer';
import LoginContainer from './containers/LoginContainer';
import NotFoundContainer from './containers/NotFoundContainer';
import SignupContainer from './containers/SignupContainer';
import Navigation from './components/navigation/Navigation';

class App extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<Navigation />
					<Switch>
						<Route path="/">
							<HomeContainer />
						</Route>
						<Route path="/hotels/:id">
							<HotelContainer />
						</Route>
						<Route path=" /hotels">
							<HotelsContainer />
						</Route>
						<Route path="/login">
							<LoginContainer />
						</Route>
						<Route path="*">
							<NotFoundContainer />
						</Route>
						<Route path="/signup">
							<SignupContainer />
						</Route>
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
