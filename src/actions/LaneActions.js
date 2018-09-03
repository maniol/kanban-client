//to be deleted
import uuid from 'uuid';
// Action Types
export const CREATE_LANE = 'CREATE_LANE';
export const UPDATE_LANE = 'UPDATE_LANE';
export const DELETE_LANE = 'DELETE_LANE';
export const FETCH_LANES = 'FETCH_LANES';
export const EDIT_LANE = 'EDIT_LANE';

//Action Creators

export function createLane(name) {
	return {
		type: CREATE_LANE,
		lane: {
			_id: uuid.v4(), //to be deleted,
			...name,
			notes: []
		}
	};
}

export function updateLane(lane) {
	return {
		type: UPDATE_LANE,
		laneId: lane._id,
		lane
	};
}

export function editLane(laneId) {
	return {
		type: EDIT_LANE,
		laneId: laneId
	};
}

export function deleteLane(laneId) {
	return {
		type: DELETE_LANE,
		laneId
	};
}

export function fetchLanes() {
	return {
		type: FETCH_LANES
	}
}
