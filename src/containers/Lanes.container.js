import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchLanes, createLane } from '../actions/LaneActions';
import Lanes from '../components/Lanes';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { compose } from 'redux';

class LanesContainer extends Component {

	componentDidMount() {
		this.props.fetchLanes();
	}

	addLane (lane) {
		this.props.createLane(lane);
	}

	render() {
		return <Lanes lanes={this.props.lanes} addLane={this.addLane.bind(this)} />
	}
}


LanesContainer.propTypes = {
	fetchLanes: PropTypes.func,
};

function mapStateToProps(state) {
	return {
		lanes: Object.values(state.lanes)
	};
}

function mapDispatchToProps(dispatch) {
	return {
		fetchLanes: function() {
			dispatch(fetchLanes());
		},
		createLane: function(name) {
			dispatch(createLane(name));
		}
	}
};

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	DragDropContext(HTML5Backend)
	)(LanesContainer);