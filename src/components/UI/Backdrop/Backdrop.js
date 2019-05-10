/**
 * This component blurs the background. It is used along with Modal to blur the background when the Modal is open
 *
 * @param {show} boolean value to show or hide the backdrop
 * @param {clicked} function which gets executed when we click the backdrop
 * @author [Srikumar Ganesan](https://github.com/srikumarganesan)
 */
import React from 'react';
import PropTypes from 'prop-types';

import classes from './Backdrop.css';

const backdrop = (props) => (
    props.show ? <div className={classes.Backdrop} onClick={props.clicked}></div> : null
);

backdrop.propTypes = {
    show: PropTypes.bool,
    clicked: PropTypes.func
};

export default backdrop;