import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchLanes, createLane } from '../actions/LaneActions';
import Lanes from '../components/Lanes';

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

export default connect(mapStateToProps, mapDispatchToProps)(LanesContainer);