import React from 'react';
import Card from '../city/Card';
import LargeCard from '../city/LargeCard';
import Styled from 'styled-components';

const Container = Styled.div``;

class Gallery extends React.Component {
	render() {
		const { cities } = this.props;
		// creation variable pour recuperer le premier element du tableau
		let firstCity = cities[0];
		// suppression du premier element avec la méthode Shift
		cities.shift();

		if (cities.length > 0) {
			return (
				<Container className="row">
					<div className="col-12">
						<h1>Explorer le monde </h1>
					</div>
					<LargeCard name={firstCity.name} source={firstCity.source} slug={firstCity.slug} />
					<div className="col-12 col-md-6">
						<div className="row">
							{cities.map((city) => {
								return <Card name={city.name} source={city.source} slug={city.slug} />;
							})}
						</div>
					</div>
				</Container>
			);
		}

		return (
			<div>
				<p>No cities</p>
			</div>
		);
	}
}

export default Gallery;
