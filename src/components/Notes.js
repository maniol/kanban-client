import React from 'react';
import PropTypes from 'prop-types';
import Note from './Note';
import Edit from './Edit';
import './styles.css';

const Notes = (props) => {
	const { notes, laneId, lane, editNote, deleteNote, updateNote, moveWithinLane } = props;
	return (<ul className='listUl'>{notes.map((note) => {
		return (
		<Note
			id={note._id}
			key={note._id}
			editing={note.editing}
			laneId={laneId}
			moveWithinLane={moveWithinLane}
			notes={notes}
			lane={lane}
		>
			<Edit
				editing={note.editing}
				value={note.task}
				onValueClick={() => editNote(note._id, laneId)}
				onUpdate={task => updateNote(note._id, laneId, task)}
				onDelete={() => deleteNote(note._id, laneId)}
				/>
		</Note>
	)})} </ul>);
};

Notes.propTypes = {
	notes: PropTypes.array,
	lane: PropTypes.object,
	laneId: PropTypes.string,
	editNote: PropTypes.func,
	deleteNote: PropTypes.func,
	updateNote: PropTypes.func,
	moveWithinLane: PropTypes.func
};

export default Notes;