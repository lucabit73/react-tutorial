import React from 'react';
import './Person.css';
import Radium from 'radium';
import PropTypes from 'prop-types'

const person = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    }
    return (
        <div className="Person" style={style}>
            <p onClick={props.click}>I'm {props.name} and I'm {props.age} years old</p>
            <input type="text" onChange={props.changed} value={props.name}></input>
            {props.children}
        </div>
    )
}

person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default Radium(person)