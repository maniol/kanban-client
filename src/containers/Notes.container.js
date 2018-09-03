import { connect } from 'react-redux';
import Notes from '../components/Notes';
import * as noteActions from '../actions/NoteActions';


const mapDispatchToProps = dispatch => ({
	deleteNote: (noteId, laneId) => dispatch(noteActions.deleteNote(noteId, laneId)),
	updateNote: (updates, noteId, laneId) => dispatch(noteActions.updateNote(updates, noteId, laneId)),
	createNote: (note, laneId) => dispatch(noteActions.createNote(note, laneId))
});


export default connect(
	null,
	mapDispatchToProps)(Notes);