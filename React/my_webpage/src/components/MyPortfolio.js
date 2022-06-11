import React from 'react'
import Collapsible from './CompsReusable/Collapsible'

function MyPortfolio() {
  return (
    <div className="major-container bg-dark" id="portfolio">
      <Collapsible
        head={<h1 className="section-heading-white">My portfolio</h1>}
        display={
          <>
            <h2 style={{paddingTop:"40px"}}>Portfolio under construction!</h2>
          </>
        }
      />


    </div>
  )
}

export default MyPortfolio