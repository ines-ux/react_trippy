import React from 'react';
import Home from '../components/core/Home';
import Api from '../utils/Api';

class HomeContainer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			cities: []
		};
	}

	componentDidMount() {
		Api.getHome().then((cities) => {
			// console.log(' HomeContainer cities ', cities);
			this.setState({ cities });
		});
	}

	render() {
		// console.log(' HomeContainer this.state.cities ', this.state.cities);
		return (
			<div>
				<Home cities={this.state.cities} />
			</div>
		);
	}
}

export default HomeContainer;
