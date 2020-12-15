import React from 'react';
import './index.css';
import {connect} from 'react-redux';
import {fetchPosts} from '../../actions'

const App = props => {
 
    const renderPost = (company, position, date, location, logo, id) => {
        let posted = new Date(date);
        let today = new Date();
        let dateDiff = Math.floor((Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()) - Date.UTC(posted.getFullYear(), posted.getMonth(), posted.getDate()) ) /(1000 * 60 * 60 * 24));
        let postedString;
        if (dateDiff === 0) postedString = 'Today';
        else if (dateDiff === 1) postedString = 'Yesterday';
        else postedString = `${dateDiff} days ago`;
        
        return (
            <div key={id} className="post" onClick={()=> alert(id)}>
                <img className="company-logo" alt="logo" src={logo}/>
                <div className="job-info">
                    <h3 className="job-info__company">{company}</h3>
                    <div className="job-info__position">{position}</div>
                    <div className="job-info__date-posted">{postedString}</div>
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
            <div className="search-component">
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

    const renderPosts = () => {
        return props.posts.map((post) => {
            return renderPost(post.company, post.title, post.created_at, post.location, post.company_logo, post.id)
        })
    }


    return (
        <div id="main-content">
            <div id="search-wrapper">
                {renderSearchBox("What", "Job title, keywords or company", "within 25 kilometres", "search-outline")}
                {renderSearchBox("Where", "City or state", "Singapore, Southern Malaysia", "location-outline")}          
            </div>
            <div className="button-container">   
                <button className="blue search" onClick={() => props.fetchPosts('London')}>Find Jobs</button>
                {renderViewButtons()}
            </div>      
            <div id="job-postings">
                {renderPosts()}
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    posts: state.posts
})

export default connect(mapStateToProps, {fetchPosts})(App);