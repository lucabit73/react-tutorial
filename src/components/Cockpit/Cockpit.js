import React from 'react'
import Radium from 'radium';

const cockpit = (props) => {
    const style = {
        backgroundColor: 'green',
        color: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer',
        ':hover': {
            backgroundColor: 'lightgreen',
            color: 'black'
        }
    }
    const classes = [];
    if (props.person.length <= 2) classes.push('red');
    if (props.person.length <= 1) classes.push('bold');

    if (props.showpersons) {
        style.backgroundColor = "red";
        style[':hover'] = {
            backgroundColor: 'lightcoral',
            color: 'black'
        };
    }
    return (
        <div>
            <h1>Bau</h1>
            <p className={classes.join(" ")}>Dinamically change color</p>
            <button 
            style={style}
            onClick={props.clicked}>Click me!</button>
        </div>
    );
}

export default Radium(cockpit);