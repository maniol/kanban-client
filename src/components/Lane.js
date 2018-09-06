import React from 'react';
import PropTypes from 'prop-types';
import NotesContainer from '../containers/Notes.container';
import Edit from './Edit'
import './styles.css';

const Lane = (props) => {
	const { lane, laneNotes, deleteLane, updateLane, editLane, createNote } = props;
	return (
		<div className='list'>
			<div className='listHeader'>
				<Edit
					className='listHeader'
					editing={lane.editing}
					value={lane.name}
					onValueClick={() => editLane(lane._id)}
					onUpdate={name => updateLane(lane._id, name)}
					onDelete={() => deleteLane(lane._id)}
				/>
			</div>
			<NotesContainer notes={laneNotes} laneId={lane._id}/>
			<div className='listFooter'>
					<button className='addNoteBtn' onClick={() => createNote({ task: "New Note"}, lane._id)}>+ Add card</button>
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