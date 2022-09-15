
import React from 'react'
import {Link} from 'react-router-dom'
// import Logo from '../img/innov8pod_logo.png';

const Screen1 =() =>{

    const getValue = () =>{
        document.getElementById("relative").style.backgroundColor= "blue";
        document.getElementById("para").style.color= "white";
        document.getElementById("para1").style.color= "yellow";
        const val= document.getElementById("value").value;
        const sendData ={
            val1:val,   
        }
        console.log(sendData);
        

    }
    const getValue2 = () =>{
         document.getElementById("relative1").style.backgroundColor= "blue";
    
        const val1= document.getElementById("value1").value;
        console.log(val1);
    }

    return(
        <div class="one">
              {/* <header class="tabMobileView header navbar fixed-top d-lg-none" role="banner">
        <div class="nav-toggle">
            <a href="base.html" class="nav-link navbar-brand sidebarCollapse" data-placement="bottom">
                <img src={Logo} alt="Logo" />
            </a>
        </div>
    </header>  */}

    {/* <!--  BEGIN MAIN CONTAINER  --> */}
    <div class="main-container" id="container">

        <div class="overlay"></div>
        <div class="cs-overlay"></div>

        {/* <!--  BEGIN SIDEBAR  --> */}

        <div class="sidebar-wrapper sidebar-theme">
            <div id="dismiss" class="d-lg-none"><i class="flaticon-cancel-12"></i></div>
            <nav id="sidebar">
           
                {/* <!-- <ul class="navbar-nav theme-brand flex-row  d-none d-lg-flex">
                    <li class="nav-item">
                        <a href="index.html" class="navbar-brand">
                            <img src="../default/assets/img/logo-3.png" class="img-fluid" alt="logo">
                        </a>
                    </li>
                    <p class="border-underline"></p>
                    <li class="nav-item theme-text">
                        <a href="index.html" class="nav-link"> Equation </a>
                    </li>
                </ul> --> */}


                <ul class="list-unstyled menu-categories" id="accordionExample">

                    {/* <li class="logo-li">
                        <a href="index.html">
                            <img src="../img/innov8pod_logo.png" alt="Logo" />
                        </a>
                    </li> */}
                    <div class="menu" style={{paddingTop:'150px'}}>
                        <img class="img-fluid" src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/Co_working_re_y4cx.svg" alt="draw co worker" />
                    </div>
                    <div class="menu">
                        <p class="text"> We strive to match you with vetted </p>
                        <p class="text"> technology talent who can get up and </p>
                        <p class="text"> running in two weeks. </p>
                    </div>
                    {/* <div class="menu">
                        <a href="base.html">
                            <button type="button" class="btn btn-outline-dark">
                                Getting Started
                                <svg style={{color: 'green'}} xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                                </svg>
                            </button>
                        </a>
                        <div>
                            <Link class="link" to="/Home">
                                Cancel to get back to innov8pod.com
                            </Link>
                        </div>
                    </div> */}
                </ul>
            </nav>
        </div>
        
        {/* <!--  BEGIN CONTENT PART  --> */}
        <div id="content" class="main-content">
            <div class="container">
                <div class="page-header">
                    <div class="page-title">
                        <h1 class="hire" style={{fontWeight:'bolder'}}>What are you looking for?</h1>
                    </div>
                </div>

                {/* <!-- CONTENT AREA --> */}
                <div class="container">
                    <div class="row layout-spacing mt-0" id="cancel-row">
                        <div class="col-md-3 space-div" style={{textAlign: 'center' }} onClick={getValue}  >
                            <Link to="/Screen2">
                            <div class="widget-content widget-content-area bx-top-6" id="relative">
                                <svg class="icon-content mt-2 bi bi-person-circle" xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor"  viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                                </svg>
                                <h6 class="text-center mt-4" id="para">Individual</h6>
                                <p class="text-primary" id="para1">
                                    (To start or accelerate work)
                                </p>
                            </div>
                            </Link>
                        </div>
                        <div class="col-md-3 space-div" style={{textAlign: 'center' }} onClick={getValue2}>
                        <Link to="/Screen2">
                            <div  class="widget-content widget-content-area bx-top-6" id="relative1" >  
                                                           <svg class="icon-content mt-2 bi bi-people-fill" xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor"  viewBox="0 0 16 16">
                                    <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                    <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
                                    <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
                                </svg>
                                <h6 class="text-center mt-4">Delivery team</h6>
                                <p class="text-primary mt-0" id="para1">
                                    (To start or accelerate work)
                                </p>

                            </div>
                            </Link>
                        </div>
                        <div class="col-md-3 space-div" style={{textAlign: 'center' }}>
                        <Link to="/Screen2">
                            <div class="widget-content widget-content-area bx-top-6" >
                                <svg class="icon-content mt-2 bi bi-person-circle" xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor"  viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                                </svg>
                                <h6 class="text-center mt-4">Individual</h6>
                                <p  class="text-primary mt-0" id="para1" >
                                    (To start or accelerate work)
                                </p>
                                
                            </div>
                            </Link>
                        </div>
                     
                        <div class="col-md-3 space-div" style={{textAlign: 'center' }}>
                        <Link to="/Register">
                        <div class="widget-content widget-content-area bx-top-6">
                                <svg class="icon-content mt-2 bi bi-chat-dots-fill" xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor"  viewBox="0 0 16 16">
                                    <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                                </svg>
                                <h6 class="text-center mt-4">Not sure</h6>
                                <p class=" mt-0" id="para1">
                                    (To start or accelerate work)
                                </p>

                            </div>
                        </Link>
                        </div>
                    </div>
                    <div>
                        <Link to="/Screen2">
                            <button type="button" class="btn btn-lg next-button">Next</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>

  
    <footer class="footer-section">
        
        <div class="footer-section-2 container-fluid">
            <div class="row justify-content-center">
                <p class="bottom-footer">&#xA9; Copyright 2022 INNOV8POD. All rights reserved </p>
            </div>
        </div>
    </footer>
        </div>
    )
}
export default Screen1