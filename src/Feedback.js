import React from "react";

const feedback = () =>
{
    return(
        <div class="one">
<div class="main-container" id="container">
        <div id="content" class="main-content">
            <div class="container">
                <div class="row layout-spacing">
                    <div class="col-md-12">
                        {/* <a class="feedback-logo" href="home">
                            <img class="center" src="assets/img/innov8pod_logo.png" alt="Logo" />
                        </a> */}
                        <h1 class="hire feedback-logo-h mt-5"> Great! <br />
                            Thanks for sending <br />
                            your request. 
                        </h1>
                        <p class="hire-p feedback-logo-p mt-4">We will get in touch in 24 hours.</p>
                        <a class="hire-a feedback-logo-a" href="base.html">
                            <button type="button" class="btn">LOGIN
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
    )
}
export default feedback