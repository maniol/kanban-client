import React from 'react';
import LanesContainer from '../containers/Lanes.container';
import './styles.css';

const App = () => (
	<div className='ui'>
		<nav className='navbar navbarApp'>Trello Clone</nav>
		<nav className='navbar navbarBoard'>My board</nav>
		<LanesContainer />
	</div>
);


export default App