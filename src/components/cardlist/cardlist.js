import React from 'react'
import { Card } from '../card/card';
import './cardlist.styles.css'

export const CardList = (props) => {
    return (
        <div className='card-list'>
        {props.people.map(person => (
            <Card key={person.id} person={person}/>
          ))}
        </div>
    )
}


// firstName={person.name.first} lastName={person.name.last} image={person.picture.medium} email={person.email} phone={person.phone} 