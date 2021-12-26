// ========== Home
// import all modules
import React, { Component, Fragment } from 'react';

// import all components
import {
	Title
} from '../components';

class Home extends Component {
	componentDidMount() {
		document.title = 'AMS | Home';
	}

	render() {
		return (
			<Fragment>
				<div>
					<h1>Home</h1>
					<Title />
				</div>
			</Fragment>
		);
	}
}

export default Home;