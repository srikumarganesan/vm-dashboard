/**
 * This is a group component which holds the vending machines. It renders individual VendingMachine components
 *
 * @vendingMachines {Array} Array of vending machine objects
 * @clicked {function} Function that gets executed when the user clicks the delete button on the vending machine
 *
 * @author [Srikumar Ganesan](https://github.com/srikumarganesan)
 */
import React from 'react';
import VendingMachine from './VendingMachine/VendingMachine'

const vendingMachines = (props) => {
    console.log(props.vendingMachines);
    return props.vendingMachines.map(vm => {
        return <VendingMachine
            longitude={vm.attributes.longitude}
            latitude={vm.attributes.latitude}
            id={vm.id}
            key={vm.id}
            click={() => props.clicked(vm.id)}/>
    })
};

export default vendingMachines;