import React from 'react';

const person = (props) => {
    return (
        <div className="person">
            <p onClick={props.click}>I'm {props.name} and I'm {props.age} years old</p>
            <input type="text" onChange={props.changed} value={props.name}></input>
            {props.children}
        </div>
    )
}

export default person