import React from 'react'
import useCollapse from 'react-collapsed';
import Collapsible from './CompsReusable/Collapsible';

function TopMenu() {
    return (

        <div id="top-nav">
            <nav id="top-navbar" class="navbar navbar-dark bg-dark px-3 border-bottom border-light">
                <a class="navbar-brand"></a>
                <ul class="nav nav-pills">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle text-light mx-1" data-bs-toggle="dropdown" href="#journey" role="button" aria-expanded="false">My Journey</a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#journey"><strong>My Journey</strong></a></li>
                            <li><hr class="dropdown-divider" /></li>
                            <li><a class="dropdown-item" href="#lookbook">Lookbook</a></li>
                            <li><a class="dropdown-item" href="#accenture">Accenture</a></li>
                            <li><a class="dropdown-item" href="#abinbev">Anheuser-Busch InBev</a></li>
                            <li><a class="dropdown-item" href="#iitd">IIT Delhi</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-light mx-1" href="#portfolio" role="button">My Portfolio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-light mx-1"href="#thoughts" role="button">My Thoughts</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-light mx-1"href="#reading" role="button">Reading</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-light mx-1"href="#watching" role="button">Watching</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-light mx-1"href="#connect" role="button">Connect</a>
                    </li>
                </ul>
            </nav>
        </div>
    )


}

export default TopMenu