/**
 * This component can be used to show progress of an action like a backend call etc
 */
import React from 'react';

import classes from './Spinner.css';

const spinner = () => (
    <div className={classes.Loader}>Loading...</div>
);

export default spinner;