import React from 'react';
import PropTypes from 'prop-types';
import LaneContainer from '../containers/Lane.container';
import styles from './Lanes.css'

const Lanes = (props) => {
	return (
		<div>
			<button className={styles.AddLane} onClick={()=>props.addLane({name: "New lane"})}>Add lane</button>
			<div className="lanes">{props.lanes.map(lane => <LaneContainer className="lane" key={lane._id} lane={lane} />)}</div>
		</div>
	);
};

Lanes.propTypes = {
	lanes: PropTypes.array,
};


export default Lanes;