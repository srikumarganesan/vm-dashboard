/**
 * This is a simple Nav bar component which has a product name and button
 *
 * @param {clicked} function which gets executed on clicking the add vending machine button
 * @author [Srikumar Ganesan](https://github.com/srikumarganesan)
 */
import React from 'react'
import classes from './Navigation.css';
import PropTypes from 'prop-types';

const navigation = (props) => {
    return (
        <header className={classes.MainHeader}>
            <div className={classes['Main-header__brand']}>
                <strong>Vending Machine Dashboard</strong>
            </div>
            <nav className={classes.MainNav}>
                <ul className={classes["Main-nav__items"]}>
                    <li className={[classes["Main-nav__item"], classes["Main-nav__item--cta"]].join(' ')}>
                        <a onClick={props.clicked}>Add Vending Machine</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

navigation.propTypes = {
    clicked: PropTypes.func
};

export default navigation;