import React from 'react'
import './searchbox.styles.css'

export const SearchBox = ({placeholder, handleChange }) => {
    return (
        <input className='searchbox' type='search' placeholder={placeholder} onChange={handleChange}/>
    )
}
