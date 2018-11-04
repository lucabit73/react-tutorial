import React from 'react'
import Person from './Person/Person'

const persons = (props) => props.persons.map((item, index) => {
    return <Person 
        click={() => props.clicked(index)}
        changed={(event) => props.changed(event, item.id)}
        name={item.name} 
        age={item.age}
        key={item.id}/>;
});

export default persons