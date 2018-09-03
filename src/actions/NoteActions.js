//to be deleted
import uuid from 'uuid';
// Action Types

export const CREATE_NOTE = 'CREATE_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';

//Action Creators

export function createNote(note, laneId) {
	return {
		type: CREATE_NOTE,
		laneId,
		note: {
			_id: uuid.v4(),//to be deleted
			...note
		}
	}
};

export function updateNote(note, laneId) {
	return {
		type: UPDATE_NOTE,
		laneId,
		noteId: note._id,
		note
	};
}

export function editNote(noteId) {
	return {
		type: EDIT_NOTE,
		noteId: noteId
	};
}

export function deleteNote(noteId, laneId) {
	return {
		type: DELETE_NOTE,
		noteId,
		laneId,
	};
}