import { CREATE_LANE, UPDATE_LANE, EDIT_LANE, DELETE_LANE, FETCH_LANES } from '../actions/LaneActions';
import { CREATE_NOTE, DELETE_NOTE } from '../actions/NoteActions';

import omit from 'lodash/omit';

const initialState = {};

export default function lanes(state = initialState, action) {
	switch (action.type) {
		case CREATE_LANE:
			return { ...state, [action.lane._id]: action.lane };
		case UPDATE_LANE:
			const lane = { ...state[action.laneId], name: action.name, editing: false }
			return { ...state, [action.laneId]: lane };
		case EDIT_LANE: {
				const lane = { ...state[action.laneId], editing: true };
				return { ...state, [action.laneId] : lane };
			}
		case DELETE_LANE: {
			return omit(state, action.laneId);
		}
		case CREATE_NOTE: {
			const newLane = { ...state[action.laneId] };
			newLane.notes = newLane.notes.concat(action.note._id);
			return { ...state, [action.laneId]: newLane };
		}
		case DELETE_NOTE: {
			const newLane = { ...state[action.laneId] };
			newLane.notes = newLane.notes.filter(noteId => noteId !== action.noteId);
			return  { ...state, [action.laneId]: newLane };
		}
		case FETCH_LANES:
			return {...action.lanes };
		default:
			return state;
		}
}