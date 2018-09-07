import uuid from 'uuid';

// Action Types
export const CREATE_NOTE = 'CREATE_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const MOVE_WITHIN_LANE = 'MOVE_WITHIN_LANE';

//Action Creators
export function createNote(note, laneId) {
	const randomId = uuid.v4();
	const data = {
		...note,
		id: randomId,
		_id: randomId
	}
	return function(dispatch) {
		return fetch (`/lanes/${laneId}/notes`,
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
				const newNote = body.notes.find(note => note._id === randomId)
				dispatch({
					type: 'CREATE_NOTE',
					note: newNote,
					laneId
				});
			}
		});
	}
}

export function updateNote(noteId, laneId, task) {
	const data = {
		task,
		editing: false
	}
	return function(dispatch) {
		return fetch (`/lanes/${laneId}/notes/${noteId}`,
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
					type: 'UPDATE_NOTE',
					task,
					noteId
				});
			}
		});
	}
}

export function editNote(noteId, laneId) {
	const data = {
		editing: true
	}
	return function(dispatch) {
		return fetch (`/lanes/${laneId}/notes/${noteId}`,
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
					type: 'EDIT_NOTE',
					noteId
				});
			}
		});
	}
}

export function deleteNote(noteId, laneId) {
	return function(dispatch) {
		return fetch (`/lanes/${laneId}/notes/${noteId}`,
		{
			method: 'DELETE',
			headers: {'Content-Type': 'application/json'},
			credentials: 'same-origin'
		})
		.then(response => response.json().then(body => ({ response, body})))
		.then(({response, body}) => {
			if(!response.status === 200) {
				const error = new Error(body.error.message)
				error.response = response
				throw error
			} else {
				dispatch({
					type: 'DELETE_NOTE',
					laneId,
					noteId
				});
			}
		});
	}
}

export function moveWithinLane(laneId, targetId, sourceId) {
	return {
		type: 'MOVE_WITHIN_LANE',
		laneId,
		targetId,
		sourceId
	};
}