import React from 'react';
import PropTypes from 'prop-types';
import { DragSource, DropTarget } from 'react-dnd';
import { compose } from 'redux';
import ItemTypes from './itemTypes';
import './styles.css';



class Note extends React.Component {
	constructor(props) {
		super(props)
		this.props = props;
	};

	render() {
		const { connectDragSource, connectDropTarget, isDragging, editing, children } = this.props;
		const dragSource = editing ? a => a : connectDragSource;
		return dragSource(connectDropTarget(
			<li className='listUlLi'
				style= { { 
					opacity: isDragging ? 0 : 1
				} } >{ children } </li>
			));
	}
}

const noteSource = {
	beginDrag(props) {
		const draggedNote = props.notes.filter(n => n._id === props.id)
		return {
			id: props.id,
			laneId: props.laneId,
			lane: props.lane,
			note: draggedNote[0] //filter returns array
		};
	},
	isDragging(props, monitor) {
		return props.id === monitor.getItem().id;
		}
};

const noteTarget = {
	drop(targetProps, monitor) {
		const sourceProps = monitor.getItem();
		if (targetProps.id !== sourceProps.id) {
			targetProps.moveWithinLane(targetProps.laneId, targetProps.notes, targetProps.id, sourceProps.id)
		}
	}
};


export default compose(
	DragSource(ItemTypes.NOTE, noteSource, (connect, monitor) => ( {
		connectDragSource: connect.dragSource(),
		isDragging: monitor.isDragging()
	})),
	DropTarget(ItemTypes.NOTE, noteTarget, (connect) =>( {
		connectDropTarget: connect.dropTarget()
	}))
)(Note);

Note.propTypes = {
	children: PropTypes.any
};

