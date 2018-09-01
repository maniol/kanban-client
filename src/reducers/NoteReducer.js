import { CREATE_NOTE, UPDATE_NOTE, DELETE_NOTE } from '../actions/NoteActions';

const initialState = [];

export default function notes(state = initialState, action) {
	switch (action.type) {
		case CREATE_NOTE:
			return [...state, action.note]
		case UPDATE_NOTE:
			return state.data.map(note =>
				{ return note.id === action.noteId ? Object.assign({}, note, action.note) : note })
		case DELETE_NOTE:
			return state.filter(note => note.id !== action.noteId)
		default:
			return state;
		}
}