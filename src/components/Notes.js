import React from 'react';
import PropTypes from 'prop-types';
import Note from './Note';
import Edit from './Edit';

const Notes = ({ notes, laneId, editNote, deleteNote, updateNote }) => {
	console.log(notes)
	return (<ul className="notes">{notes.map((note) => {
		return (
		<Note
			id={note._id}
			key={note._id}
			editing={note.editing}
		>
			<Edit
				editing={note.editing}
				value={note.task}
				onValueClick={() => editNote(note._id)}
				onUpdate={(task) => updateNote({
					...note,
					task,
					editing: false
				}, laneId
				)}
				onDelete={() => deleteNote(note._id, laneId)}
				/>
		</Note>
	)})} </ul>);
};

Notes.propTypes = {
	notes: PropTypes.array,
	laneId: PropTypes.string,
	editNote: PropTypes.func,
	deleteNote: PropTypes.func,
	updateNote: PropTypes.func
};

export default Notes;