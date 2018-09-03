import React from 'react';
import PropTypes from 'prop-types';
import NotesContainer from '../containers/Notes.container';

import styles from './Lane.css';

const Lane = (props) => {
	const { lane, laneNotes, deleteLane, updateLane, createNote } = props;

	return (
		<div className={styles.Lane}>
			<div className={styles.LaneHeader}>
				<h4>{lane.name}</h4>
				<button onClick={() => updateLane({ name: "New Name"}, lane._id)}>Edit title</button>
				<div className={styles.LaneAddNote}>
					<button onClick={() => createNote({ task: "New Note"}, lane._id)}>Add Note</button>
				</div>
			</div>
			<NotesContainer notes={laneNotes} laneId={lane._id}/>
			<div className={styles.LaneDelete}>
				<button onClick={() => deleteLane(lane._id)}>Remove Lane</button>
			</div>
		</div>
	);
};

Lane.propTypes = {
	lane: PropTypes.object,
	laneNotes: PropTypes.array,
	deleteLane: PropTypes.func,
	updateLane: PropTypes.func,
	createNote: PropTypes.func,
};

export default Lane;