import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom"
// import { MultiSelect } from "react-multi-select-component";
 import { useState } from "react";
import List from '../img/list.png'
 import Select from "react-select";

const style=
{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '10vh'
}
const app=
{
    width: '100%',
    color:'black'
    
}

const Screen3 = () => {
    const location= useLocation();
    const navigate= useNavigate();
    const [selectedOptions, setSelectedOptions] = useState();

    // Array of all options
    const optionList = [
      { value: "React Js", label: "React Js" },
      { value: "React Native", label: "React Native" },
      { value: "Angular Js", label: "Angular Js" },
      { value: "Django Python", label: "Django Python" },
      { value: "Java", label: "Java" }
    ];
  
    // Function triggered on selection
    const handleSelect=(data)=> {
      setSelectedOptions(data);
      const value2 = data.map(
   
        ({value})=> value);
console.log(value2)
       
        
    }
   
    // console.log(screen2);
   const submit=()=>{
    const screen2= location.state.selectedValues;
    const optionList= selectedOptions;
    //const Array=[];
    const valueOfScreen3 = optionList.map(

        ({value})=> value);
        
        alert(valueOfScreen3);
        navigate("/Screen4", {state:{valueOfScreen3,screen2}});
        
        
   }

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
                            <img src="assets/img/innov8pod_logo.png" alt="Logo" />
                        </a>
                    </li> */}
                      <div class="menu" style={{paddingTop:'150px'}}>
                        <img class="img-fluid" src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/Co_working_re_y4cx.svg" alt="draw co worker" />
                    </div>
                    {/* <div class="menu">
                        <h3>Most wanted skills:</h3>
                        <button type="button" class="btn btn-sm">JavaScript</button>
                        <button type="button" class="btn btn-sm">React</button>
                     </div>
                    <div> 
                        <button type="button" class="btn btn-sm">Node.js</button>
                        <button type="button" class="btn btn-sm">Java</button>
                    </div> */}
                    <div class="menu" style={{paddingTop:'150px'}}>
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
                <div class="page-header">
                    <div class="page-title">
                        <h1 class="hire" style={{fontWeight:'bolder'}}>Which skills or expertise do you need?</h1>
                        <p class="hire-p page-title-p">Please select all that apply!</p>
                    </div>
                </div>

                {/* <!-- CONTENT AREA --> */}
                <div class="container">
                    <div class="widget-content widget-content-area bx-top-6">
                        <img width="38" height="38" src={List} alt="list" />
                        <div class="select" style={style}>
                            <div style={app}>
                        <Select
                        class="form-control"
                        options={optionList}
                        placeholder="Select Skills"
                        value={selectedOptions}
                        onChange={handleSelect}
                        isSearchable={true}
                        isMulti
                        />
                            </div>
                      
                            </div>
                    </div>
                    <div class="secend-q-p mt-2">
                        
                        <p>For example: Fullstack developer, Frontend developer, UI/UX design</p>
                    </div>
                    <div class="mt-35" style={{marginTop:'30px'}}>
                        <Link to="/Screen2">
                            <button type="button" class="btn  btn-lg previous-button">Previous</button>
                        </Link>
                        {/* <Link to="/Screen4"> */}
                            <button  onClick={submit} class="btn btn-lg  next-button">Next </button>
                        {/* </Link> */}
                    </div>
                </div>
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
export default Screen3