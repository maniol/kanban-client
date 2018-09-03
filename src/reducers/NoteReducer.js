import { CREATE_NOTE, UPDATE_NOTE, EDIT_NOTE, DELETE_NOTE } from '../actions/NoteActions';

const initialState = [];

export default function notes(state = initialState, action) {
	switch (action.type) {
		case CREATE_NOTE:
			return [...state, action.note]
		case UPDATE_NOTE:
			return state.map(note => {
				return note._id === action.noteId ? { ...note, ...action.note } : note })
		case EDIT_NOTE:
			return state.map(note => {
				return note._id === action.noteId ? {...note, editing: true } : note })	
		case DELETE_NOTE:
			return state.filter(note => note._id !== action.noteId)
		default:
			return state;
		}
}