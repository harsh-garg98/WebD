import React from 'react'

function Birthday(props) {
    const direction = props.direction
    if (direction === "left") {
        return (
            <div>
                <div class="bg-danger row align-items-start py-5 pe-5">
                    <div class="col">
                        <img
                            src={props.pic}
                            alt="Prank cake"
                            class="img-fluid rounded"
                            style={{width:"550px", height:"400px"}}
                        />
                    </div>
                    <div style={{paddingTop:"6vh"}} class="col text-white">
                        <p class="h1">
                            Excited for your birthday? Share our website with your friends. Make new memories and share your old ones!
                        </p>
                        <button style={{marginTop:"5vh"}} type="button" class="btn btn-primary">
                            <span class="h2 px-4 pt-4 pb-4">It's my birthday soon!</span>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div>
            <div class="bg-warning row align-items-start py-5 ps-5">
                <div style={{paddingTop:"8vh"}} class="col text-white">
                    <p class="h1">
                        So it is your friend's birthday? Let us help you make it special, in our special way!
                    </p>
                    <button style={{marginTop:"5vh"}} type="button" class="btn btn-primary">
                        <span class="h2 px-4 pt-4 pb-4">It's my friend's birthday soon!</span>
                    </button>
                </div>
                <div class="col">
                    <img
                        src={props.pic}
                        alt="Prank cake"
                        class="img-fluid rounded"
                        style={{width:"550px", height:"400"}}
                    />
                </div>
            </div>
        </div>
    )

}

export default Birthday