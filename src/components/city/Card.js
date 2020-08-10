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

class Card extends React.Component {
	render() {
		let { name, source, slug } = this.props;
		if (source) {
			source = Config.host + source;
		}
		return (
			<Container className="col-6">
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

Card.defaultProps = {
	name: '',
	source: 'http://via.placeholder.com/300x200',
	slug: ''
};

// Card.propTypes = {
// 	name: propTypes.string,
// 	source: propTypes.string,
// 	slug: propTypes.string
// };

export default Card;
