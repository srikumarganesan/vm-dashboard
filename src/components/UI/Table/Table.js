/**
 * Table component to display tabular data
 *
 * @param data {object} - Table data
 * @param click {function} Function which gets executed on delete button click
 *
 * TODO need to refactor to create the rows and columns effectively. Also need to add tests
 *
 * @author [Srikumar Ganesan](https://github.com/srikumarganesan)
 */
import React from 'react';
import classes from './Table.css';
import PropTypes from 'prop-types';

const table = (props) => {
    let tableRows = props.data.map(datum => {
        return (
            <tr key={datum.id} className={classes.Tr}>
                <td className={classes.Td}>{datum.id}</td>
                <td className={classes.Td}>{datum.attributes.longitude}</td>
                <td className={classes.Td}>{datum.attributes.latitude}</td>
                <td className={classes.Td}><button onClick={() => props.click(datum.id)}>Delete</button></td>
            </tr>
        )
    })
    return (
        <div>
            <table className={classes.Table}>
                <tbody>
                    <tr>
                        <th className={classes.Th}>ID</th>
                        <th className={classes.Th}>Longitude</th>
                        <th className={classes.Th}>Latitude</th>
                        <th className={classes.Th}>Action</th>
                    </tr>
                    {tableRows}
                </tbody>
            </table>
        </div>
    )
};

table.propTypes = {
    data: PropTypes.array,
    click: PropTypes.func
};

export default table;