import React from 'react'

function MyJourneyComponent(props) {
    return (
        <div id={props.id}>
            <div className="image-and-details">
                <div className="image">
                    <img className="journey-image" src={props.image} alt={props.company} />
                </div>
                <div className="company-details">
                    <p className="company">{props.company}, India</p>
                    <p className="role">{props.role}<i>{props.duration}</i> </p>
                    <p className="location">{props.location}</p>
                    <div className="content">{props.content}</div>
                </div>
            </div>
        </div>
    )
}

export default MyJourneyComponent