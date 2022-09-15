import React from "react";
import {Link, useNavigate, useLocation} from "react-router-dom";
import { useState } from "react";
import axios from "axios";


const Register = () => {
    let navigate = useNavigate();
    let location = useLocation();
    const [data, setData] = useState(
        {
            fname:"",
            lname:"",
            email:"",
            
            company:"",
            location:"",
            password:""

        }
    );
    const handleChange=(e)=>{
        setData({...data, [e.target.name]: e.target.value });
        // console.log(data);
    }
    

const submitForm =(e) =>{
    e.preventDefault();
    
    const valueOfScreen2=location.state.valueOfScreen2;
    const valueOfScreen3=location.state.valueOfScreen3;
    const valueOfScreen4=location.state.valueOfScreen4;
    const valueOfScreen5=location.state.valueOfScreen5.description;
    const valueOfScreen6=location.state.valueOfScreen6.language;
    const valueOfScreen7=location.state.valueOfScreen7;
    const valueOfScreen8=location.state.valueOfScreen8;
    const valueOfScreen9=location.state.valueOfScreen9;

    const sendData ={
        fname:data.fname,
        lname:data.lname,
        email:data.email,
        company:data.company,
        location:data.location,
        password:data.password,
        screen2:valueOfScreen2,
        screen3:valueOfScreen3,
        screen4:valueOfScreen4,
        screen5:valueOfScreen5,
        screen6:valueOfScreen6,
        screen7:valueOfScreen7,
        screen8:valueOfScreen8,
        screen9:valueOfScreen9
        
    }
    // console.log(sendData);
    axios.post('http://localhost/hire-api/register.php', sendData)
    .then((query)=>{
        if(query.data.Status === 'invalid')
        {
            alert("Invalid User")
            
        }
        
        else{
            navigate('/Feedback')
        }
    })
    
}




    return (
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
                </ul> -->  */}


                <ul class="list-unstyled menu-categories" id="accordionExample">

                    {/* <li class="logo-li">
                        <a href="index.html">
                            <img src="assets/img/innov8pod_logo.png" alt="Logo" />
                        </a>
                    </li> */}
                    <div class="menu" style={{paddingTop: '120px'}}>
                        <img class="img-fluid" src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/Co_working_re_y4cx.svg" alt="draw co worker" />
                    </div>
                    <div class="menu">
                        <p class="text"> We strive to match you with vetted </p>
                        <p class="text"> technology talent who can get up and </p>
                        <p class="text"> running in two weeks. </p>
                    </div>
                    <div class="menu">
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
                    </div>
                </ul>
            </nav>
        </div>
        

        {/* <!--  BEGIN CONTENT PART  --> */}
        <div id="content" class="main-content">
            <div class="container">
                <div class="page-header">
                    <div class="page-title">
                        <h1 class="text-center hire" style={{fontWeight:'bolder'}}>Tell us about you</h1>
                        {/* <!-- <p class="page-title-p">Tell us a little more about it!</p> --> */}
                    </div>
                </div>
                

                {/* <!-- CONTENT AREA --> */}
                <div class="container">
                    <form onSubmit={submitForm}>
                        <div class="row">
                            <div class="col-md-6">
                                <label class="label" for="fname">First name</label><br />
                                <input class="form-control" style={{width: '100%', height: '40px'}} type="text" id="fname" name="fname"
                                onChange={handleChange} value={data.fname} /><br />
                            </div>
                            <div class="col-md-6">
                                <label class="label" for="lname">Last name</label><br />
                                <input class="form-control" style={{width: '100%', height: '40px'}} type="text" id="lname" name="lname"
                                onChange={handleChange} value={data.lname} />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <label class="label" for="fname"  >Email</label><br />
                                <input class="form-control" style={{width: '100%', height: '40px'}} type="email" id="email" name="email" 
                                onChange={handleChange} value={data.email}/><br />
                            </div>
                            <div class="col-md-6">
                                <label class="label" for="lname">Company</label><br />
                                <input class="form-control" style={{width: '100%', height: '40px'}} type="text" id="company" name="company" 
                                onChange={handleChange} value={data.company}/>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <label class="label" for="fname">Location</label><br />
                                <select name="location" onChange={handleChange} value={data.location}  class="form-control" style={{width: '100%', height: '40px'}}>
							<option>Choose a country</option><option value="Afghanistan" >Afghanistan</option><option value="Åland Islands" >Åland Islands</option><option value="Albania" >Albania</option><option value="Algeria" >Algeria</option><option value="American Samoa" >American Samoa</option><option value="Andorra" >Andorra</option><option value="AO" >Angola</option><option value="AI" >Anguilla</option><option value="AQ" >Antarctica</option><option value="AG" >Antigua and Barbuda</option><option value="AR" >Argentina</option><option value="AM" >Armenia</option><option value="AW" >Aruba</option><option value="AU" >Australia</option><option value="AT" >Austria</option><option value="AZ" >Azerbaijan</option><option value="BS" >Bahamas</option><option value="BH" >Bahrain</option><option value="BD" >Bangladesh</option><option value="BB" >Barbados</option><option value="BY" >Belarus</option><option value="PW" >Belau</option><option value="BE" >Belgium</option><option value="BZ" >Belize</option><option value="BJ" >Benin</option><option value="BM" >Bermuda</option><option value="BT" >Bhutan</option><option value="BO" >Bolivia</option><option value="BQ" >Bonaire, Saint Eustatius and Saba</option><option value="BA" >Bosnia and Herzegovina</option><option value="BW" >Botswana</option><option value="BV" >Bouvet Island</option><option value="BR" >Brazil</option><option value="IO" >British Indian Ocean Territory</option><option value="BN" >Brunei</option><option value="BG" >Bulgaria</option><option value="BF" >Burkina Faso</option><option value="BI" >Burundi</option><option value="KH" >Cambodia</option><option value="CM" >Cameroon</option><option value="CA" >Canada</option><option value="CV" >Cape Verde</option><option value="KY" >Cayman Islands</option><option value="CF" >Central African Republic</option><option value="TD" >Chad</option><option value="CL" >Chile</option><option value="CN" >China</option><option value="CX" >Christmas Island</option><option value="CC" >Cocos (Keeling) Islands</option><option value="CO" >Colombia</option><option value="KM" >Comoros</option><option value="CG" >Congo (Brazzaville)</option><option value="CD" >Congo (Kinshasa)</option><option value="CK" >Cook Islands</option><option value="CR" >Costa Rica</option><option value="HR" >Croatia</option><option value="CU" >Cuba</option><option value="CW" >Cura&ccedil;ao</option><option value="CY" >Cyprus</option><option value="CZ" >Czech Republic</option><option value="DK" >Denmark</option><option value="DJ" >Djibouti</option><option value="DM" >Dominica</option><option value="DO" >Dominican Republic</option><option value="EC" >Ecuador</option><option value="EG" >Egypt</option><option value="SV" >El Salvador</option><option value="GQ" >Equatorial Guinea</option><option value="ER" >Eritrea</option><option value="EE" >Estonia</option><option value="ET" >Ethiopia</option><option value="FK" >Falkland Islands</option><option value="FO" >Faroe Islands</option><option value="FJ" >Fiji</option><option value="FI" >Finland</option><option value="FR" >France</option><option value="GF" >French Guiana</option><option value="PF" >French Polynesia</option><option value="TF" >French Southern Territories</option><option value="GA" >Gabon</option><option value="GM" >Gambia</option><option value="GE" >Georgia</option><option value="DE" >Germany</option><option value="GH" >Ghana</option><option value="GI" >Gibraltar</option><option value="GR" >Greece</option><option value="GL" >Greenland</option><option value="GD" >Grenada</option><option value="GP" >Guadeloupe</option><option value="GU" >Guam</option><option value="GT" >Guatemala</option><option value="GG" >Guernsey</option><option value="GN" >Guinea</option><option value="GW" >Guinea-Bissau</option><option value="GY" >Guyana</option><option value="HT" >Haiti</option><option value="HM" >Heard Island and McDonald Islands</option><option value="HN" >Honduras</option><option value="HK" >Hong Kong</option><option value="HU" >Hungary</option><option value="IS" >Iceland</option><option value="IN" >India</option><option value="ID" >Indonesia</option><option value="IR" >Iran</option><option value="IQ" >Iraq</option><option value="IE" >Ireland</option><option value="IM" >Isle of Man</option><option value="IL" >Israel</option><option value="IT" >Italy</option><option value="CI" >Ivory Coast</option><option value="JM" >Jamaica</option><option value="JP" >Japan</option><option value="JE" >Jersey</option><option value="JO" >Jordan</option><option value="KZ" >Kazakhstan</option><option value="KE" >Kenya</option><option value="KI" >Kiribati</option><option value="KW" >Kuwait</option><option value="KG" >Kyrgyzstan</option><option value="LA" >Laos</option><option value="LV" >Latvia</option><option value="LB" >Lebanon</option><option value="LS" >Lesotho</option><option value="LR" >Liberia</option><option value="LY" >Libya</option><option value="LI" >Liechtenstein</option><option value="LT" >Lithuania</option><option value="LU" >Luxembourg</option><option value="MO" >Macao</option><option value="MG" >Madagascar</option><option value="MW" >Malawi</option><option value="MY" >Malaysia</option><option value="MV" >Maldives</option><option value="ML" >Mali</option><option value="MT" >Malta</option><option value="MH" >Marshall Islands</option><option value="MQ" >Martinique</option><option value="MR" >Mauritania</option><option value="MU" >Mauritius</option><option value="YT" >Mayotte</option><option value="MX" >Mexico</option><option value="FM" >Micronesia</option><option value="MD" >Moldova</option><option value="MC" >Monaco</option><option value="MN" >Mongolia</option><option value="ME" >Montenegro</option><option value="MS" >Montserrat</option><option value="MA" >Morocco</option><option value="MZ" >Mozambique</option><option value="MM" >Myanmar</option><option value="NA" >Namibia</option><option value="NR" >Nauru</option><option value="NP" >Nepal</option><option value="NL" >Netherlands</option><option value="NC" >New Caledonia</option><option value="NZ" >New Zealand</option><option value="NI" >Nicaragua</option><option value="NE" >Niger</option><option value="NG" >Nigeria</option><option value="NU" >Niue</option><option value="NF" >Norfolk Island</option><option value="KP" >North Korea</option><option value="MK" >North Macedonia</option><option value="MP" >Northern Mariana Islands</option><option value="NO" >Norway</option><option value="OM" >Oman</option><option value="PK" >Pakistan</option><option value="PS" >Palestinian Territory</option><option value="PA" >Panama</option><option value="PG" >Papua New Guinea</option><option value="PY" >Paraguay</option><option value="PE" >Peru</option><option value="PH" >Philippines</option><option value="PN" >Pitcairn</option><option value="PL" >Poland</option><option value="PT" >Portugal</option><option value="PR" >Puerto Rico</option><option value="QA" >Qatar</option><option value="RE" >Reunion</option><option value="RO" >Romania</option><option value="RU" >Russia</option><option value="RW" >Rwanda</option><option value="ST" >S&atilde;o Tom&eacute; and Pr&iacute;ncipe</option><option value="BL" >Saint Barth&eacute;lemy</option><option value="SH" >Saint Helena</option><option value="KN" >Saint Kitts and Nevis</option><option value="LC" >Saint Lucia</option><option value="SX" >Saint Martin (Dutch part)</option><option value="MF" >Saint Martin (French part)</option><option value="PM" >Saint Pierre and Miquelon</option><option value="VC" >Saint Vincent and the Grenadines</option><option value="WS" >Samoa</option><option value="SM" >San Marino</option><option value="SA" >Saudi Arabia</option><option value="SN" >Senegal</option><option value="RS" >Serbia</option><option value="SC" >Seychelles</option><option value="SL" >Sierra Leone</option><option value="SG" >Singapore</option><option value="SK" >Slovakia</option><option value="SI" >Slovenia</option><option value="SB" >Solomon Islands</option><option value="SO" >Somalia</option><option value="ZA" >South Africa</option><option value="GS" >South Georgia/Sandwich Islands</option><option value="KR" >South Korea</option><option value="SS" >South Sudan</option><option value="ES" >Spain</option><option value="LK" >Sri Lanka</option><option value="SD" >Sudan</option><option value="SR" >Suriname</option><option value="SJ" >Svalbard and Jan Mayen</option><option value="SZ" >Swaziland</option><option value="SE" >Sweden</option><option value="CH" >Switzerland</option><option value="SY" >Syria</option><option value="TW" >Taiwan</option><option value="TJ" >Tajikistan</option><option value="TZ" >Tanzania</option><option value="TH" >Thailand</option><option value="TL" >Timor-Leste</option><option value="TG" >Togo</option><option value="TK" >Tokelau</option><option value="TO" >Tonga</option><option value="TT" >Trinidad and Tobago</option><option value="TN" >Tunisia</option><option value="TR" >Turkey</option><option value="TM" >Turkmenistan</option><option value="TC" >Turks and Caicos Islands</option><option value="TV" >Tuvalu</option><option value="UG" >Uganda</option><option value="UA" >Ukraine</option><option value="AE" >United Arab Emirates</option><option value="GB" >United Kingdom (UK)</option><option value="US" >United States (US)</option><option value="UM" >United States (US) Minor Outlying Islands</option><option value="UY" >Uruguay</option><option value="UZ" >Uzbekistan</option><option value="VU" >Vanuatu</option><option value="VA" >Vatican</option><option value="VE" >Venezuela</option><option value="VN" >Vietnam</option><option value="VG" >Virgin Islands (British)</option><option value="VI" >Virgin Islands (US)</option><option value="WF" >Wallis and Futuna</option><option value="EH" >Western Sahara</option><option value="YE" >Yemen</option><option value="ZM" >Zambia</option><option value="ZW" >Zimbabwe</option>
						</select><br />
                            </div>
                            <div class="col-md-6">
                                <label class="label" for="lname">Password</label><br />
                                <input class="form-control" style={{width: '100%', height: '40px'}} type="password" id="password" name="password" 
                                onChange={handleChange} value={data.password}/>
                            </div>
                        </div>
                   
                    <div class="row">

                    </div>
                    <div class="mt-5">
                        <Link to="/Screen8">
                            <button type="button" class="btn btn-lg previous-button">Previous</button>
                        </Link>
                        
                            <input type="submit" value="Submit" class="btn btn-lg  next-button"/>
                        
                    </div>
                    </form>
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
export default Register 