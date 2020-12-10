import React from 'react';
import logo from '../../img/index.png'
import './index.css'

export default () => {

    const post = () => {
        return (
            <div className="post">
                <img className="company-logo" alt="company logo" src={logo}/>
                <div className="job-info">
                    <h3 className="job-info__company">Google</h3>
                    <div className="job-info__position">Full Stack Developer</div>
                    <div className="job-info__date-posted">3 days ago</div>
                </div>
                <div className="job-posting__side">
                    <div className="jobs-posing__side__location">Singapore</div>
                    <div className="jobs-posing__side__view-details">View details</div>
                </div>
            </div>
        )
    }
    return (
        <div id="main-content">
            <div id="search-wrapper">
                <div className="search-component-left">
                    <div className="keyword">What</div>
                    <div className="description">Job title, keywords or company</div>
                    <div className="search-field">
                        <input type="text" className = "search km" placeholder="within 25 kilometres"/>
                        <ion-icon name="search-outline" class="input-icon"></ion-icon>
                    </div>
                    
                    
                </div>
                <div className="search-component-right">
                    <div className="keyword">Where</div>
                    <div className="description">city or state</div>
                    <div className="search-field">
                        <input type="text" className="search location" placeholder="Singapore, Southern Malaysia"/>
                        <ion-icon name="location-outline" class="input-icon"></ion-icon>
                    </div>
                </div> 
            </div>
            <div className="button-container">   
                <button className="blue search">Find Jobs</button>
                <div className="icon-view">
                    <div>
                        <ion-icon name="menu" class="list-icon"></ion-icon>
                        <ion-icon name="grid" class="list-icon"></ion-icon>
                    </div>
                </div>                   
            </div>      
            <div id="job-postings">
                {post()}
                {post()}
                {post()}
                {post()}
                {post()}
                {post()}
                
            </div>
        </div>
    )
}