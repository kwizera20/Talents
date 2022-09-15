import React from "react";
import {Link, useLocation , useNavigate} from 'react-router-dom'
import List from '../img/list.png'
import { useState } from "react";
//import { MultiSelect } from "react-multi-select-component";


  const style =
  {
    color:"black"
  }
const Screen6 = () => 
{
    const navigate= useNavigate();
    const [selected, setSelected] = useState({
        language:""
    });

    const handleChange=(e)=>{
        setSelected({...selected, [e.target.name]: e.target.value });
        // console.log(data);
    }
    const submitForm =(e) =>{
        e.preventDefault();
        const valueOfScreen6 ={
            language:selected.language
        }

        const valueOfScreen2=location.state.valueOfScreen2;
        const valueOfScreen3=location.state.valueOfScreen3;
        const valueOfScreen4=location.state.valueOfScreen4;
        const valueOfScreen5=location.state.valueOfScreen5;

        // const description= location.state.valueOfScreen5.description;
        // console.log(sendData1);
         navigate("/Screen7", {state:{ valueOfScreen6, valueOfScreen5,valueOfScreen4,valueOfScreen3,valueOfScreen2 }})
        // console.log(description);
        
    }

    const location = useLocation();
    // console.log(location.state.sendData.description)
    // alert(setSelected[',']);
    return(
 <div class="one">
     {/* <header class="tabMobileView header navbar fixed-top d-lg-none" role="banner">
        <div class="nav-toggle">
            <a href="base.html" class="nav-link navbar-brand sidebarCollapse" data-placement="bottom">
                <img src="assets/img/innov8pod_logo.png" alt="Logo" />
            </a>
        </div>
        <ul class="nav navbar-nav">
            <li class="nav-item d-lg-none">
                <a href="base.html"> Home </a>
            </li>
        </ul>
    </header> */}
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
                            <img src="../default/assets/img/logo-3.png" class="img-fluid" alt="logo" >
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
                            <img src="assets/img/innov8pod_logo.png" alt="Logo" />
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
                        <Link class="link" to="/Home.js">
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
                <form onSubmit={submitForm}>
                <div class="page-header">
                    <div class="page-title">
                        <h1 class="hire" style={{fontWeight:'bolder'}}>Are there language preferences for your project?</h1>
                        <p class="page-title-p">Please select all that apply!</p>
                        {/* <p class="hidden">{location.state.valueOfScreen5.description}</p> */}
                    </div>
                </div>

                {/* <!-- CONTENT AREA --> */}
                <div class="container">
                    <div class="widget-content widget-content-area bx-top-6">
                        <img width="38" height="38" src={List} alt="list" />
                        <div class="select" style={style}>
                            <select class="form-control" name="language" onChange={handleChange} value={selected.language} >
                                <option value="">Select Language</option>
                                <option value="english">English</option>
                                <option value="French">French</option>
                                <option value="Both">Both</option>
                            </select>
                            </div>
                    </div>
                    {/* <div class="secend-q-p mt-2">
                        <p>For example: Python, Java, JavaScript, Dart, etc...</p>
                    </div> */}
                    <div class="mt-5">
                        <Link to="/Screen5">
                            <button type="button" class="btn  btn-lg previous-button">Previous</button>
                        </Link>
                        {/* <Link to="/Screen7"> */}
                            <input type="submit" class="btn btn-lg  next-button" value="Next" />
                        {/* </Link> */}
                    </div>
                </div>
                </form>
            </div>
        </div>
        </div>
        {/* <!--  BEGIN FOOTER  --> */}
    <footer class="footer-section">
        {/* <!-- <div class="footer-section-1  sidebar-theme"></div> --> */}
        <div class="footer-section-2 container-fluid">
            <div class="row justify-content-center">
                <p class="bottom-footer">&#xA9; Copyright 2022 INNOV8POD. All rights reserved </p>
            </div>
        </div>
    </footer>
    {/* <!--  END FOOTER  --> */}
</div>
    )
}
export default Screen6