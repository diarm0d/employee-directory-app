import React from 'react'
import './card.styles.css'

export const Card = (props) => {
    return (
        <div className="card-container">
            <div className="image-container">
                <img src={props.person.picture.large} alt={props.person.name.last} />
            </div>
            <h2>{props.person.name.first} {props.person.name.last}</h2>
            <p>{props.person.email}</p>
            <p>{props.person.phone}</p>
        </div>
    )
}
