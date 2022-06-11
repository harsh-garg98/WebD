import React from 'react'

function Books(props) {
    return (
        <div className="book" style={{width:"35vh", flexDirection:"row"}}>
            <img src={props.image} alt={props.alt} className="book-size"/>
        </div>
    )
}

export default Books