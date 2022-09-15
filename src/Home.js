import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../img/innov8pod_logo.png'

const Home = () => {
    return (
        <div class="one">
                 <nav class="navbar navbar-expand-sm bg-light fixed-top">
        <Link class="navbar-brand" to="/Home">
            <img src={Logo} alt="Logo" />
        </Link>
        {/* <button style={{color: '#190AAD'}} class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
            </span>
        </button> */}
        {/* <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav flex-row ml-lg-auto">
                <li class="nav-item base-nav">
                    <Link class="nav-link base-nav" to="/Home">Hire PM Talent</Link>
                </li>
                <li class="nav-item base-nav">
                    <Link class="nav-link base-nav" to="/Home">Find PM Job</Link>
                </li>
                <li class="nav-item base-nav">
                    <Link class="nav-link base-nav" to="/Home">Cohort</Link>
                </li>
            </ul>
        </div> */}
    </nav>
        {/* <nav class="navbar navbar-expand-sm bg-light fixed-top">
        <a class="navbar-brand" href="logo.js">
            <img src={Logo} alt="Logo" />
        </a>
        <button style={{color: '#190AAD'}} class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
            </span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav flex-row ml-lg-auto">
                <li class="nav-item base-nav">
                    <a class="nav-link base-nav" href="logo.js">Hire PM Talent</a>
                </li>
                <li class="nav-item base-nav">
                    <a class="nav-link base-nav" href="logo.js">Find PM Job</a>
                </li>
                <li class="nav-item base-nav">
                    <a class="nav-link base-nav" href="logo.js">Cohort</a>
                </li>
            </ul>
        </div>
    </nav> */}

   
    <div class="main-container" id="container">
        <div id="content" class="main-content">
            <div class="container">
                <div class="row layout-spacing">
                    <div class="col-xl-6 mb-xl-0 col-lg-6 mb-4 col-md-6 col-sm-6">
                        <h1 class="hire"> It only takes 5mins </h1>
                        <p class="hire-p" style={{fontSize:'30px',fontFamily:'sans-serif',fontWeight:'bolder'}} > Indicate your talent needs and get matched to qualified talent 
                        </p>
                        <Link class="hire-a"  target={"_blank"} to="/Screen1" >
                            <button type="button" class="btn" id="button">Get started
                                {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                                </svg> */}
                            </button>
                        </Link>
                    </div>
                    <div class="col-xl-6 mb-xl-0 col-lg-6 mb-4 col-md-6 col-sm-6">
                        <img class="started-image" width="100%" height="400" src="https://limyiqi.com/articles/assets/images/productivity_hero.svg" alt="programming" />
                    </div>
                </div>
            </div>
        </div>
    </div>

    <footer class="footer-section theme-footer">
        <div class="footer-section-2 container-fluid">
            <div class="row justify-content-center">
                <p class="bottom-footer">&#xA9; Copyright 2022 INNOV8POD. All rights reserved </p>
            </div>
        </div>
    </footer>
    
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    </div>
    )
}
export default Home;