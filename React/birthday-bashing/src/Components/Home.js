import React from 'react'
import Birthday from './Birthday'
import Head from './Head'
import cake_prank from './Images/cake-prank.jpeg';
import paper_cake from './Images/paper-cake.webp';


function Home() {
    return (
        <div>
            <Head />
            <Birthday direction="left" pic={cake_prank} />
            <Birthday direction="right" pic={paper_cake} />
        </div>
    )
}

export default Home