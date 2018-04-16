/**
 * This is a simple button with custom styling
 *
 * @param {disabled} boolean value based on which the button will be disabled
 * @param {btnType} string value, type of a button to apply a appropriate styling. Takes 'Success' or 'Danger'
 * @param {clicked} Function to be executed when the button gets clicked
 *
 * @author [Srikumar Ganesan](https://github.com/srikumarganesan)
 */
import React from 'react';

import classes from './Button.css';

const button = (props) => (
    <button
        disabled={props.disabled}
        className={[classes.Button, classes[props.btnType]].join(' ')}
        onClick={props.clicked}>{props.children}</button>
);

export default button;