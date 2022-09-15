import {React , useState} from "react";
// import { Component } from "react";
import { Link, useNavigate } from "react-router-dom";
import Records from '../records.json';
// import Logo from '../img/innov8pod_logo.png';
// import { useNavigate } from 'react-router-dom'

 const iconStyle =
{
  backgroundColor: '#1A0DAB',
  borderRadius: '50%',
  top: '12px',
  right: '26px',
  padding: '15px',
}


const Screen2= () =>
{
    
    const navigate = useNavigate();
    const [state , setState] = useState(
        [...Records && Records.map( record => {return{ ...record, selected:false}})]
    );
     
    
 const  toggleRecordSelect = (idx) =>{
    
        // const {Records}= state;
        Records[idx].selected=!Records[idx].selected;
        setState({Records});
       
       
    }


 const renderRecord=(record, idx) =>{


    return(
        <div onClick={() => toggleRecordSelect(idx)}  class="card p-6"  id="card" style={{width: '250px', margin: 'auto', marginBottom:"30px", height:'250px'}} 
         key={record.id} >
      <img class="card-img-top text-center " style={{width: '50px', margin: '80px',height:'50px',marginTop:'20px'}} src={record.icon} alt="icon" />
      <div class="card-body">
        <p class="card-text text-center" style={{fontSize: '17px'}}>{record.value}</p>
      </div>
      {record.selected ? <i class="fa fa-check" style={iconStyle}></i>:null}
    </div>
    
         )
}
const submit = () =>{''
    const {Records} = state;
    const selectedRecords= [];
    Records.map(record=>{
        if(record.selected)
        {
            selectedRecords.push(record.value)
            
        }
        return null;
    });

    let selectedValues = selectedRecords.join(',')
    alert ("selected records:" +selectedValues);
    navigate("/Screen3", {state:{ selectedValues }})
    
}
    return(
        <div class="scrollbar one">
        {/* <div class="row">
            <div class="col-lg-3 col-md-3"> */}
         
            {/* <div class="nav-toggle">
                    <a href="base.html" class="nav-link navbar-brand sidebarCollapse" data-placement="bottom">
                        <img src={Logo} alt="Logo" />
                    </a>
                </div> */}
            
        
        {/* <!--  BEGIN MAIN CONTAINER  --> */}
        <div class="main-container" id="container">
        
        <div class="overlay"></div>
        <div class="cs-overlay"></div>
        
        {/* <!--  BEGIN SIDEBAR  --> */}
        
        <div class="sidebar-wrapper sidebar-theme">
            <div id="dismiss" class="d-lg-none"><i class="flaticon-cancel-12"></i></div>
            <nav id="sidebar">
             
        
        
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
        {/* </div>
            </div> */}
            
             <div class="col-lg-9 col-md-9 col-sm-6">
             <div class="page-header">
                            <div class="page-title">
                                <h1 class="hire" style={{paddingTop:'40px',fontWeight:'bolder'}} >Which kind of consultant, contractor or team are you looking for?</h1>
                            </div>
                        </div>
        
                        <div class="row" >
                        
                        {
                                Records && Records.map((record, index) =>{
                                    return renderRecord(record, index)
                        })
                    
                    }
                    
                    </div>
                    <Link to="/Screen1">
                            <button type="button" class="btn  btn-lg previous-button">Previous</button>
                        </Link>
                        {/* <Link to={{
                            pathname:"/Screen4",
                            state:{id:1, name:'kwizera'}
                        }}
                        > */}
                        <button  onClick={submit} class="btn btn-lg  next-button" >Submit </button>
                        {/* </Link> */}
                    
        {/* 
            <div className="inner">
                {
                    Records && Records.map(record =>{
                        return(
                            <div className="box" key={record.id}>
                                <img src={record.icon} alt="icon" />
        
                                <br />
        
                                {record.value}
                            </div>
                        )
                    })
        
                }
                
        
            </div> */}
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


export default Screen2