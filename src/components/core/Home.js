import React from 'react';
import Card from '../city/Card';
import LargeCard from '../city/LargeCard';
import Gallery from '../city/Gallery';

class Home extends React.Component {
	render() {
		const { cities } = this.props;

		if (cities.length > 0) {
			return (
				<div className="container">
					<Gallery cities={cities} />
				</div>
			);
		}

		return (
			<div>
				<p>No cities</p>
			</div>
		);
	}
}

export default Home;
