import React from 'react'

function Icons(props) {
    return (
        <div className="icon">
            <a href={props.link} target="_blank"  rel="noreferrer">
                <img src={props.image} alt={props.alt} />
            </a>
        </div>
    )
}

export default Icons