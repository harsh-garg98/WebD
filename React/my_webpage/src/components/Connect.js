import React from 'react'
import insta from './Images/insta.webp'
import fb from './Images/fb.png'
import git from './Images/git.png'
import linkedin from './Images/linkedin.png'
import Icons from './CompsReusable/Icons'
import Collapsible from './CompsReusable/Collapsible'

function Connect() {
    return (
        <div className="major-container bg-dark" id="connect">
            <Collapsible
                head={<h1 className="section-heading-white" style={{color:"white"}}>Connect with me</h1>}
                display={<>
                    <div className="display-icons" style={{paddingTop:"40px"}}>

                        <Icons
                            link="https://www.instagram.com/hrshgrg/"
                            image={insta}
                            alt="Instagram link"
                        />

                        <Icons
                            link="https://www.linkedin.com/in/harshgarg98/"
                            image={linkedin}
                            alt="LinkedIn link"
                        />

                        <Icons
                            link="https://www.facebook.com/harsh.garg.121772/"
                            image={fb}
                            alt="Facebook link"
                        />

                        <Icons
                            link="https://github.com/TheNightBaron"
                            image={git}
                            alt="Github link"
                        />

                    </div>
                </>}
            />
        </div>
    )
}

export default Connect