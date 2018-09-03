import React from 'react';
import PropTypes from 'prop-types';
import NotesContainer from '../containers/Notes.container';
import Edit from './Edit'

import styles from './Lane.css';

const Lane = (props) => {
	const { lane, laneNotes, deleteLane, updateLane, editLane, createNote } = props;

	return (
		<div className={styles.Lane}>
			<div className={styles.LaneHeader}>
				<Edit
					className={styles.LaneName}
					editing={lane.editing}
					value={lane.name}
					onValueClick={() => editLane(lane._id)}
					onUpdate={name => updateLane({...lane, name, editing: false})}
				/>
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
	editLane: PropTypes.func,
	createNote: PropTypes.func,
};

export default Lane;