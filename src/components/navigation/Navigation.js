import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';

class Navigation extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isScrolled: false,
			isReady: false
		};
	}
	// componentDidMount() {
	// 	window.onscroll = this.onScroll.bind(this);
	// }

	onScroll() {}

	render() {
		return <Nav isScrolled={this.state.isScrolled} />;
	}
}
export default Navigation;
