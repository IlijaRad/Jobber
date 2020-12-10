import React from 'react';
import avatar from '../../img/avatar.jpg';
import './index.css'

export default () => {
    return (
        <header>
            <div id="logo">
                <div>Job Finder</div>
            </div>
            <nav id="main-nav">
                <ul>
                    <a href="#"><li className="selected">Find Jobs</li></a>
                    <a href="#"><li>Company Reviews</li></a>
                    <a href="#"><li>Find Salaries</li></a>
                    <a href="#"><li>Find Resumes</li></a>
                    <a href="#"><li>Employers / Post Job</li></a>
                </ul>
            </nav>
            <div id="user">
                <img src={avatar} alt="user image" className="avatar"/>
                <div>
                    <div className="user__name">
                        John Johnson
                    </div>
                    <div>
                        <ion-icon name="caret-down" class="arrow"></ion-icon>
                    </div>
                </div>
            </div>
        </header>
    )
}