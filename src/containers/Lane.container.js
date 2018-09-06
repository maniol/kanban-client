import { connect } from 'react-redux';
import Lane from '../components/Lane';
import { deleteLane, updateLane, editLane } from '../actions/LaneActions';
import { createNote } from '../actions/NoteActions';

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
	createNote: (note, laneId) => dispatch(createNote(note, laneId))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Lane);
