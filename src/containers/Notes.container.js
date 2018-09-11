import { connect } from 'react-redux';
import Notes from '../components/Notes';
import { updateNote, editNote, deleteNote, moveWithinLane } from '../actions/NoteActions';


/*const mapDispatchToProps = dispatch => ({
	deleteNote: (noteId, laneId) => dispatch(noteActions.deleteNote(noteId, laneId)),
	updateNote: (updates, noteId, laneId) => dispatch(noteActions.updateNote(updates, noteId, laneId)),
	createNote: (note, laneId) => dispatch(noteActions.createNote(note, laneId)),
	editNote: (noteId) => dispatch(noteActions.editNote(noteId))
});

/*const mapDispatchToProps = {
	...noteActions
}*/
const mapDispatchToProps = dispatch => ( {
 	editNote: (noteId, laneId) => dispatch(editNote(noteId, laneId)),
 	updateNote: (noteId, laneId, task) => dispatch(updateNote(noteId, laneId, task)),
 	deleteNote: (noteId, laneId) => dispatch(deleteNote(noteId, laneId)),
 	moveWithinLane: (laneId, notes, targetId, sourceId) => dispatch(moveWithinLane(laneId, notes, targetId, sourceId))
} );

export default connect(
	null,
	mapDispatchToProps)(Notes);