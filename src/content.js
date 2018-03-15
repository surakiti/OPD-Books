import React, { Component } from 'react';
// import Navbar from './navbar.js';
class content extends Component {
    render() {
        return (
            <div >

                {/* <div class="alert alert-primary" role="alert">
                    Welcome to Clinic !
                 </div> */}
                
           

                <div class="card">
                    {/* <div class="card-header">
                        Quote
                </div> */}
                    <div class="card-body">
                        <blockquote class="blockquote mb-0">
                            <div class="well">
                                <h4>Dashboard</h4>
                                <p>Some text..</p>
                            </div>
                        </blockquote>
                    </div>

                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Profile</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Contact</a>
                        </li>
                    </ul>
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">.....</div>
                        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
                        <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
                    </div>
                </div>

                    

            </div>
        );
    }
}

export default content;
