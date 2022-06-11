import React from 'react'
import Collapsible from './CompsReusable/Collapsible'

function MyThoughts() {
    return (
        <div className="major-container" id="thoughts">
            <Collapsible
                head={<h1 className="section-heading-black">My thoughts</h1>}
                display={
                    <>
                        <h2 style={{paddingTop:"40px"}}>I'm still thinking about stuff!</h2>
                    </>
                }
            />
        </div>
    )
}

export default MyThoughts