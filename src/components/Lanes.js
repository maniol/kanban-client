import React from 'react';
import PropTypes from 'prop-types';
import LaneContainer from '../containers/Lane.container';
import './styles.css'

const Lanes = (props) => {
	return (
		<div>
			<button className='addLaneBtn' onClick={()=>props.addLane({name: "New lane"})}> + Add list</button>
			<div className='lists'>{props.lanes.map(lane => <LaneContainer key={lane._id} lane={lane} />)}</div>
		</div>
	);
};

Lanes.propTypes = {
	lanes: PropTypes.array,
};

export default Lanes;