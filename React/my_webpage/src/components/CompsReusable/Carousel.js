import React from 'react'

function Carousel(props) {
    return (
        <div id={props.id} class="carousel slide" data-bs-ride="carousel" style={{width: "70vh", marginLeft:"25px"}}>
            <div class="carousel-indicators">
                <button type="button" data-bs-target={props.target} data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target={props.target} data-bs-slide-to="1" aria-label="Slide 2"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={props.image1} class="d-block w-100" alt="Back Cover" className="book-size"/>
                </div>
                <div class="carousel-item">
                    <a href={props.link} target="_blank">
                    <img src={props.image2} class="d-block w-100" alt="Article" className="book-size" style={{width:"50vh"}}/>
                    </a>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target={props.target} data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target={props.target} data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel