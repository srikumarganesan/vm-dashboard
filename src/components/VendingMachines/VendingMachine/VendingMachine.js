/**
 * This is a single vending machine component. It uses the Input component
 *
 * @id {string} unique id of vending machine
 * @longitude {number} longitude value of the vending machine
 * @latitude {number} latitude value of the vending machine
 * @click {function} Function that gets executed when the user clicks the delete button
 *
 * @author [Srikumar Ganesan](https://github.com/srikumarganesan)
 */
import React from 'react';
import classes from './VendingMachine.css';
import Input from '../../UI/Input/Input';

const vendingMachine = (props) => {

    return (
        <div className={classes.VendingMachine}>
            <Input label={"ID"} elementConfig={{defaultValue: props.id, readOnly: true}}/>
            <Input label={"Longitude"} elementConfig={{defaultValue: props.longitude, readOnly: true}}/>
            <Input label={"Latitude"} elementConfig={{defaultValue: props.latitude, readOnly: true}}/>
            <button onClick={props.click}>Delete</button>
        </div>
    )
};

export default vendingMachine;