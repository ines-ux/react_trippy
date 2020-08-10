import React from 'react';
import Config from '../../Config';
import PropTypes from 'prop-types';
import Styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = Styled.div`
    div img{
        width: 100%;
    }
`;

class LargeCard extends React.Component {
	render() {
		let { name, source, slug } = this.props;
		if (source) {
			source = Config.host + source;
		}
		return (
			<Container className="col-12 col-md-6">
				<Link to={`/hotels?city=${slug}`}>
					<div>
						<img src={source} alt="" />
						<p>{name}</p>
					</div>
				</Link>
			</Container>
		);
	}
}

LargeCard.defaultProps = {
	name: '',
	source: 'http://via.placeholder.com/300x200',
	slug: ''
};

// LargeCard.propTypes = {
// 	name: propTypes.string,
// 	source: propTypes.string,
// 	slug: propTypes.string
// };

export default LargeCard;
