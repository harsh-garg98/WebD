import React from 'react'
import Collapsible from './CompsReusable/Collapsible'
import Books from './CompsReusable/Books'
import Carousel from './CompsReusable/Carousel'

import crawdads from './Images/crawdads.jpeg'
import crawdadsBack from './Images/crawdadsBack.jpeg'
import crawdadsArticle from './Images/crawdadsArticle.png'

import homegoing from './Images/homegoing.jpg'
import homegoingBack from './Images/homegoingBack.jpeg'
import homegoingArticle from './Images/homegoingArticle.png'

function Reading() {
    return (
        <div className="major-container bg-dark" id="reading">
            <Collapsible
                head={<h1 className="section-heading-white">What I'm reading</h1>}
                display={
                    <>
                        <div style={{ display: "flex", paddingLeft: "24%", paddingTop: "40px", paddingBottom: "40px" }}>
                            <Books image={crawdads} alt={"Where the Crawdadas Sing Reviews"} />
                            <Carousel
                                image1={crawdadsBack}
                                image2={crawdadsArticle}
                                link={"https://www.theguardian.com/books/2019/jan/12/where-the-crawdads-sing-delia-owens-review"}
                                id={"crawdads-book"}
                                target={"#crawdads-book"}
                            />
                        </div>
                        <div style={{ display: "flex", paddingLeft: "24%", paddingTop: "40px", paddingBottom: "40px" }}>
                            <Books image={homegoing} alt={"Where the Crawdadas Sing Reviews"} />
                            <Carousel
                                image1={homegoingBack}
                                image2={homegoingArticle}
                                link={"https://www.theguardian.com/books/2017/jan/13/homegoing-by-yaa-gyasi-review"}
                                id={"homegoing-book"}
                                target={"#homegoing-book"}
                            />
                        </div>
                    </>
                }
            />
        </div>
    )
}

export default Reading