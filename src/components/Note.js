import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Note = props =>
	<li className='listUlLi'>{props.children}</li>;

Note.propTypes = {
	children: PropTypes.any,
};

export default Note