/**
 * This is a Modal component, it wraps an element and displays it as a modal. This component works with backdrop and
 * has a prop show.
 * @param {show} prop to show or hide the component shown as a modal
 * @param {modalClosed} function to be executed when the user clicks on the backdrop
 *
 * @author [Srikumar Ganesan](https://github.com/srikumarganesan)
 */
import React, { Component } from 'react';
import classes from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../hoc/Auxilary/Auxilary';

class Modal extends Component {

    shouldComponentUpdate ( nextProps, nextState ) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    componentWillUpdate () {
        console.log('[Modal] WillUpdate');
    }

    render () {
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
            </Aux>
        )
    }
}

export default Modal;