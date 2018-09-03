import { CREATE_LANE, UPDATE_LANE, DELETE_LANE, FETCH_LANES } from '../actions/LaneActions';
import { CREATE_NOTE, DELETE_NOTE } from '../actions/NoteActions';

const initialState = [];

export default function lanes(state = initialState, action) {
	switch (action.type) {
		case CREATE_LANE:
			return [...state, action.lane]
		case UPDATE_LANE:
			return state.map(lane => {
					return lane._id === action.laneId ? { ...lane, ...action.updates } : lane })
		case DELETE_LANE:
			return state.filter(lane => lane._id !== action.laneId)
		case CREATE_NOTE:
			return state.map(lane => {
				if (lane._id === action.laneId) {
					const notes = [...lane.notes, action.note._id];
					return {...lane, notes };
				}
				return lane;
			});
		case DELETE_NOTE:
			return state.map(lane => {
				if (lane._id === action.laneId) {
					const notes = lane.notes.filter(note => note.id !== action.noteId);
					return {...lane, notes };
				}
				return lane;
			});
		case FETCH_LANES:
			return [...state]
		default:
			return state;
		}
}