import { connect } from 'react-redux';
import Lane from '../components/Lane';
import { deleteLane, updateLane, editLane, moveBetweenLanes } from '../actions/LaneActions';
import { createNote } from '../actions/NoteActions';
import { compose } from 'redux';
import { DropTarget } from'react-dnd';
import ItemTypes from '../components/itemTypes';


const noteTarget = {
	hover(targetProps, monitor) {
	const sourceProps = monitor.getItem();
	const { id: noteId, laneId: sourceLaneId } = sourceProps;
	console.log(targetProps)
	targetProps.moveBetweenLanes(
		targetProps.lane._id,
		noteId,
		sourceLaneId,
		);
	},
};
const mapStateToProps = (state, props) => {
	return {
		laneNotes: props.lane.notes.map(noteId => state.notes[noteId]),
		lane: props.lane
	};
};

const mapDispatchToProps = dispatch => ({
	deleteLane: (laneId) => dispatch(deleteLane(laneId)),
	updateLane: (updates, laneId) => dispatch(updateLane(updates, laneId)),
	editLane: (laneId) => dispatch(editLane(laneId)),
	createNote: (note, laneId) => dispatch(createNote(note, laneId)),
	moveBetweenLanes: (targetLaneId, noteId, sourceLaneId) => dispatch(moveBetweenLanes(targetLaneId, noteId, sourceLaneId))
});

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	DropTarget(ItemTypes.NOTE, noteTarget, (dragConnect) => ( {
		connectDropTarget: dragConnect.dropTarget()
	}))
)(Lane);

//zamienic na klase i zaimplementowac fetchNotes i populate state.notes