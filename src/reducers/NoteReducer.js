import { CREATE_NOTE, UPDATE_NOTE, EDIT_NOTE, DELETE_NOTE } from '../actions/NoteActions';
import { FETCH_LANES } from '../actions/LaneActions';
import omit from 'lodash/omit';

const initialState = {};

export default function notes(state = initialState, action) {
	switch (action.type) {
		case CREATE_NOTE:
			return { ...state, [action.note._id]: action.note };
		case UPDATE_NOTE:
			const note = { ...state[action.noteId], task: action.task, editing: false }
			return {...state, [action.noteId ]: note };
		case EDIT_NOTE: {
			const note = { ...state[action.noteId], editing: true };
			return { ...state, [action.noteId]: note };
		}
		case DELETE_NOTE:
			return omit(state, action.noteId)
		case FETCH_LANES:
			return {...action.notes };
		default:
			return state;
		}
}