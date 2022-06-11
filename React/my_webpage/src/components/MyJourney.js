import React from 'react'

import MyJourneyComponent from './CompsReusable/MyJourneyComponent'
import acn from './Images/acn.png'
import abi from './Images/abi.jpeg'
import iit from './Images/iit.png'
import lookbook from './Images/lookbook.jpeg'
import tata from './Images/1mg.webp'
import Collapsible from './CompsReusable/Collapsible'

function MyJourney() {
    return (
        <div className="major-container" id="journey">
            <Collapsible
                head={<h1 className="section-heading-black">My journey</h1>}
                display={<>
                    <MyJourneyComponent
                        id="tata1mg"
                        company="Tata 1MG"
                        image={tata}
                        role="Associate Product Manager, "
                        duration="May 2022 to Present"
                        location="Gurugram, Haryana, India"
                        content={[
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>,
                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>,
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>,
                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>,
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        ]}
                    />
                    <MyJourneyComponent
                        id="lookbook"
                        company="Lookbook"
                        image={lookbook}
                        role="Founding Team, "
                        duration="September 2021 to April 2022"
                        location="Gurugram, Haryana, India"
                        content={[
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>,
                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>,
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>,
                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>,
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        ]}
                    />
                    <MyJourneyComponent
                        id="accenture"
                        company="Accenture"
                        image={acn}
                        role="Data Science Analyst, "
                        duration="January 2021 to March 2022"
                        location="Gurugram, Haryana, India"
                        content={[
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>,
                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>,
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>,
                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>,
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        ]}
                    />
                    <MyJourneyComponent
                        id="abinbev"
                        company="Anheuser-Busch InBev"
                        image={abi}
                        role="Data Science Intern, "
                        duration="May 2019 to July 2019"
                        location="Bangalore, Karnataka, India"
                        content={[
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>,
                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>,
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>,
                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>,
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        ]}
                    />
                    <MyJourneyComponent
                        id="iitd"
                        company="Indian Institute of Technology, Delhi"
                        image={iit}
                        role="B.Tech in Textile Technologies, "
                        duration="July 2016 to May 2020"
                        location="Hauz Khas, Delhi, India"
                        content={[
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>,
                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>,
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>,
                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>,
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        ]}
                    />
                </>
                }
            />
        </div>
    )
}

export default MyJourney