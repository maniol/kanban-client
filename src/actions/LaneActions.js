import uuid from 'uuid';

import { lanes } from '../util/schema';
import { normalize } from 'normalizr';

// Action Types
export const CREATE_LANE = 'CREATE_LANE';
export const UPDATE_LANE = 'UPDATE_LANE';
export const DELETE_LANE = 'DELETE_LANE';
export const FETCH_LANES = 'FETCH_LANES';
export const EDIT_LANE = 'EDIT_LANE';
export const MOVE_BETWEEN_LANES = 'MOVE_BETWEEN_LANES';


//Action Creators
export function createLane(lane) {
	const randomId = uuid.v4();
	const data = {
		...lane,
		notes:[],
		id: randomId,
		_id: randomId
	}
	return function(dispatch) {
		return fetch ('/lanes',
		{
			method: 'POST',
			body: JSON.stringify(data),
			headers: {'Content-Type': 'application/json'},
			credentials: 'same-origin'
		})
		.then(response => response.json().then(body => ({ response, body})))
		.then(({response, body}) => {
			if(!response.ok) {
				const error = new Error(body.error.message)
				error.response = response
				throw error
			} else {
				dispatch({
					type: 'CREATE_LANE',
					lane: body,
				});
			}
		});
	}
}

export function updateLane(laneId, newName ) {
	const data = {
		name: newName,
		editing: false
	}
	return function(dispatch) {
		return fetch (`/lanes/${laneId}`,
		{
			method: 'PUT',
			body: JSON.stringify(data),
			headers: {'Content-Type': 'application/json'},
			credentials: 'same-origin'
		})
		.then(response => response.json().then(body => ({ response, body})))
		.then(({response, body}) => {
			if(!response.ok) {
				const error = new Error(body.error.message)
				error.response = response
				throw error
			} else {
				dispatch({
					type: 'UPDATE_LANE',
					name: body.name,
					laneId
				});
			}
		});
	}
}

export function editLane(laneId) {
		const data = {
		editing: true
	}
	return function(dispatch) {
		return fetch (`/lanes/${laneId}`,
		{
			method: 'PUT',
			body: JSON.stringify(data),
			headers: {'Content-Type': 'application/json'},
			credentials: 'same-origin'
		})
		.then(response => response.json().then(body => ({ response, body})))
		.then(({response, body}) => {
			if(!response.ok) {
				const error = new Error(body.error.message)
				error.response = response
				throw error
			} else {
				dispatch({
					type: 'EDIT_LANE',
					laneId
				});
			}
		});
	}
}

export function deleteLane(laneId) {
	return function(dispatch) {
		return fetch (`/lanes/${laneId}`,
		{
			method: 'DELETE',
			headers: {'Content-Type': 'application/json'},
			credentials: 'same-origin'
		})
		.then(response => response.json().then(body => ({ response, body})))
		.then(({ response, body }) => {
			if(!response.status === 200) {
				const error = new Error(body.error.mesage)
				error.response = response
				throw error
			} else {
				dispatch({
					type: 'DELETE_LANE',
					laneId
				});
			}
		});
	}
}

export function fetchLanes() {
	return function(dispatch) {
		return fetch('/lanes',
		{
			method: 'GET',
			headers: {'Content-Type': 'application/json'},
			credentials: 'same-origin'
		})
		.then(response => response.json().then(body => ({ response, body })))
		.then(({ response, body }) => {
			if(!response.ok) {
				const error = new Error(body.error.message)
				error.response = response
				throw error
			} else {
				const normalized = normalize(body.lanes, lanes);
				const { lanes: normalizedLanes} = normalized.entities;
				const { notes: normalizedNotes} = normalized.entities;
				dispatch({
					type: 'FETCH_LANES',
					lanes: normalizedLanes,
					notes: normalizedNotes
				});
			}
		})
	}
}


export function moveBetweenLanes(targetLaneId, noteId, sourceLaneId) {
	return {
		type: 'MOVE_BETWEEN_LANES',
		targetLaneId,
		noteId,
		sourceLaneId
	};
}