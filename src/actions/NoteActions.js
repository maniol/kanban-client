//to be deleted
import uuid from 'uuid';
// Action Types

export const CREATE_NOTE = 'CREATE_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';
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

export function updateNote(updates, noteId, laneId) {
	return {
		type: UPDATE_NOTE,
		updates,
		noteId, 
		laneId
	};
}

export function deleteNote(noteId, laneId) {
	return {
		type: DELETE_NOTE,
		noteId,
		laneId,
	};
}