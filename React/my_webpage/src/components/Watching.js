import React from 'react'
import Collapsible from './CompsReusable/Collapsible'

function Watching() {
    return (
        <div className="major-container" id="watching">
            <Collapsible
            head={<h1 className="section-heading-black">What I'm watching</h1>}
            display={<>
                <h2 style={{paddingTop:"40px"}}>Currently watching nature from my balcony!</h2>
                </>
            }
            />
        </div>
    )
}

export default Watching