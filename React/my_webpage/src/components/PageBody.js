import React from 'react'
import Connect from './Connect'
import MyJourney from './MyJourney'
import MyPortfolio from './MyPortfolio'
import MyThoughts from './MyThoughts'
import Reading from './Reading'
import Watching from './Watching'

function PageBody() {
    
    return (
        <>  
            <MyJourney />
            <MyPortfolio />
            <MyThoughts />
            <Reading />
            <Watching />
            <Connect />
        </>
    )
}

export default PageBody