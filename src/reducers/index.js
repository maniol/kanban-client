import { combineReducers } from 'redux';
import lanes from './LaneReducer';
import notes from './NoteReducer';

const reducers =  combineReducers({
	lanes,
	notes
});

export default reducers