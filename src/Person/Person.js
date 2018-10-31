import React from 'react';

const person = (props) => {
    return (
        <div className="person">
            <p>I'm {props.name} and I'm {props.age} years old</p>
            {props.children}
        </div>
    )
}

export default person