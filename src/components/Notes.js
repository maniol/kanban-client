import React from 'react';
import PropTypes from 'prop-types';
import Note from './Note';

const Notes = ({ notes }) => {
	return (<ul className="notes">{notes.map((note) =>
		<Note
			id={note._id}
			key={note._id}
		>
			{note.task}
		</Note>
	)}</ul>);
};

Notes.propTypes = {
	notes: PropTypes.array,
};

export default Notes;