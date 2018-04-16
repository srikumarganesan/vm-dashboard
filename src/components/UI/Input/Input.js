/**
 * This is a generic input component. It creates an <Input> element with the supplied attributes and the associated
 * label
 * TODO For now this component takes care of only Input element, but can be modified to use all kinds of inputs
 *
 * @author [Srikumar Ganesan](https://github.com/srikumarganesan)
 */
import React from 'react';
import classes from './Input.css';

const input = ( props ) => {
    let validationMsg = null;
    const inputClasses = [classes.InputElement];

    // Check if the element is touched and the value is invalid then display the validation message
    if (props.invalid && props.touched) {
        validationMsg = <p>Please enter a valid value!</p>;
    }

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(classes.Invalid);
    }

    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />
            {validationMsg}
        </div>
    );

};

export default input;