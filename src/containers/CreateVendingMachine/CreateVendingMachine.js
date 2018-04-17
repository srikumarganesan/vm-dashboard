/**
 * This component handles the creation of vending machine
 *
 * @onCreateVM {function} Function that gets execute on Form submit
 *
 * @author [Srikumar Ganesan](https://github.com/srikumarganesan)
 */
import React, {Component} from 'react';
import Button from '../../components/UI/Button/Button';
import classes from './CreateVendingMachine.css';
import Input from '../../components/UI/Input/Input';
import PropTypes from 'prop-types';

const baseForm = {
    longitude: {
        elementConfig: {
            type: 'number',
            placeholder: 'Longitude'
        },
        value: '',
        validation: {
            required: true,
            minValue: -180,
            maxValue: 180
        },
        valid: false,
        touched: false
    },
    latitude: {
        elementConfig: {
            type: 'number',
            placeholder: 'Latitude'
        },
        value: '',
        validation: {
            required: true,
            minValue: -90,
            maxValue: 90
        },
        valid: false,
        touched: false
    }
};

class CreateVendingMachine extends Component {
    state = {
        createVmForm: {...baseForm},
        formIsValid: false
    };

    /**
     * Function that gets executed on Form submit
     * @param event event received on submit
     */
    onFormSubmitHandler = (event) => {
        event.preventDefault();

        const formData = {};
        for (let formElementIdentifier in this.state.createVmForm) {
            if (this.state.createVmForm.hasOwnProperty(formElementIdentifier)) {
                formData[formElementIdentifier] = this.state.createVmForm[formElementIdentifier].value;
            }
        }
        const vendingMachine = {
            vending_machine: {...formData}
        };
        this.setState({createVmForm: {...baseForm}});
        this.props.onCreateVM(vendingMachine);
    };

    /**
     * Function which checks the validation rules passed in the form object
     * @param value - value of the input
     * @param rules the rules mentioned in the validation property in the form object
     * @returns {boolean}
     */
    checkValidity = (value, rules) => {
        let isValid = true;
        if (!rules) {
            return true;
        }

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minValue) {
            isValid = value >= rules.minValue && isValid
        }

        if (rules.maxValue) {
            isValid = value <= rules.maxValue && isValid
        }

        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid
        }

        return isValid;
    };

    /**
     * Function which gets executed on input change
     * @param event the triggered event
     * @param inputIdentifier the identifier for the input element, example longitude input will have the id as
     * longitude
     */
    inputChangedHandler = (event, inputIdentifier) => {
        const updatedVmForm = {
            ...this.state.createVmForm
        };
        const updatedFormElement = {
            ...updatedVmForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedVmForm[inputIdentifier] = updatedFormElement;

        let formIsValid = true;
        for (let inputIdentifier in updatedVmForm) {
            formIsValid = updatedVmForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({createVmForm: updatedVmForm, formIsValid: formIsValid});
    };

    render() {
        const formElementsArray = [];
        for (let key in this.state.createVmForm) {
            formElementsArray.push({
                id: key,
                config: this.state.createVmForm[key]
            });
        }
        let form = (
            <form onSubmit={this.onFormSubmitHandler}>
                {formElementsArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)}/>
                ))}
                <Button btnType="Success" disabled={!this.state.formIsValid}>Create Vending Machine</Button>
            </form>
        );

        return (
            <div className={classes.CreateVendingMachine}>
                <h4>Add Vending Machine</h4>
                {form}
            </div>
        );
    }
}

CreateVendingMachine.propType = {
    onCreateVM: PropTypes.func
};

export default CreateVendingMachine;