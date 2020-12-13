import React from 'react';
import logo from '../../img/index.png'
import './index.css'

export default () => {

    const post = (company, position, date, location, logo) => {
        return (
            <div className="post">
                <img className="company-logo" alt="company logo" src={logo}/>
                <div className="job-info">
                    <h3 className="job-info__company">{company}</h3>
                    <div className="job-info__position">{position}</div>
                    <div className="job-info__date-posted">{date}</div>
                </div>
                <div className="job-posting__side">
                    <div className="jobs-posing__side__location">{location}</div>
                    <div className="jobs-posing__side__view-details">View details</div>
                </div>
            </div>
        )
    }

    const renderSearchBox = (keyword, description, placeholder, icon) => {
        return (
            <div className="search-component-left">
                <div className="keyword">{keyword}</div>
                <div className="description">{description}</div>
                <div className="search-field">
                    <input type="text" className = "search" placeholder={placeholder}/>
                    <ion-icon name={icon} class="input-icon"></ion-icon>
                </div>
            </div>
        )
    }

    const renderViewButtons = () => {
        return(
            <div className="icon-view">
                <div>
                    <ion-icon name="menu" class="list-icon"></ion-icon>
                    <ion-icon name="grid" class="list-icon"></ion-icon>
                </div>
            </div> 
        )
    }

    return (
        <div id="main-content">
            <div id="search-wrapper">
                {renderSearchBox("What", "Job title, keywords or company", "within 25 kilometres", "search-outline")}
                {renderSearchBox("Where", "City or state", "Singapore, Southern Malaysia", "location-outline")}          
            </div>
            <div className="button-container">   
                <button className="blue search">Find Jobs</button>
                {renderViewButtons()}       
            </div>      
            <div id="job-postings">
                {post("Google", "Full Stack Developer", "3 days ago", "Singapore", logo)}
                {post("Google", "Full Stack Developer", "3 days ago", "Singapore", logo)}
                {post("Google", "Full Stack Developer", "3 days ago", "Singapore", logo)}
                {post("Google", "Full Stack Developer", "3 days ago", "Singapore", logo)}
                {post("Google", "Full Stack Developer", "3 days ago", "Singapore", logo)}              
            </div>
        </div>
    )
}