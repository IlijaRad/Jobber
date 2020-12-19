import React from 'react';
import './index.css';
import logo from '../../img/not-available.png';
import {connect} from 'react-redux';
import {fetchPosts, selectPost} from '../../actions'

const App = props => {
    
    const descriptionRef = React.createRef();
    const locationRef = React.createRef();

    React.useEffect(() => {
        if (document.querySelector("#job-postings")) {
            if (props.posts.list.length % 2 === 0) {
                document.querySelector("#job-postings").classList.add('start');
            } else {
                document.querySelector("#job-postings").classList.remove('start');
            }
        }
        
    }, [props.posts.list])
 
    const renderPost = ({company, title, created_at, location, company_logo, id, type}) => {
        let posted = new Date(created_at);
        let today = new Date();
        let dateDiff = Math.floor((Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()) - Date.UTC(posted.getFullYear(), posted.getMonth(), posted.getDate()) ) /(1000 * 60 * 60 * 24));
        let postedString;
        if (dateDiff === 0) postedString = 'Today';
        else if (dateDiff === 1) postedString = 'Yesterday';
        else postedString = `${dateDiff} days ago`;
        
        return (
            <div key={id} className="post">
                {company_logo ? <img className="company-logo" alt="logo" src={company_logo}/> : <img className="company-logo" alt="logo" src={logo}/>}
                <div className="job-info">
                    <h3 className="job-info__company">{company}</h3>
                    <div className="job-info__position">{title}</div>
                    <div className="job-info__date-posted">{postedString}</div>
                </div>
                <div className="job-posting__side">
                    <div className="jobs-posing__side__location">{location}</div>
                    <div className="jobs-posing__side__view-details" onClick={() => {props.selectPost(id); window.scrollTo(0, 0)}}>View details</div>
                </div>
               
            </div>
        )
    }

    const handleSubmit = (e, ref, type) => {
        e.preventDefault();
        if (type === "description") props.fetchPosts('', undefined, ref.current.value);
        else if (type === "location") props.fetchPosts(ref.current.value);
    }



    const renderSearchBox = (keyword, description, placeholder, icon, ref) => {
        const type = keyword === "What" ? "description" : "location";
        return (
            <div className="search-component">
                <div className="keyword">{keyword}</div>
                <div className="description">{description}</div>
                <form className="search-field" onSubmit={e => handleSubmit(e, ref, type)} >
                    <input type="text" className = "search" placeholder={placeholder} ref={ref}/>
                    <button><ion-icon name={icon} class="input-icon"></ion-icon></button>
                </form>
            </div>
        )
    }

    const renderViewButtons = () => {
        return(
            <div className="icon-view">
                <div>
                    <ion-icon name="menu" class="list-icon" onClick={() => document.getElementById('job-postings').classList.remove('grid')}></ion-icon>
                    <ion-icon name="grid" class="list-icon" onClick={() => document.getElementById('job-postings').classList.add('grid')}></ion-icon>
                </div>
            </div> 
        )
    }

    const renderPosts = () => {
        return props.posts.list.map((post) => {
            return renderPost(post)
        })
    }

  
    return (
        <div id="main-content">
            <div id="search-wrapper">
                {renderSearchBox("What", "Job title, keywords or company", "within 25 kilometres", "search-outline", descriptionRef)}
                {renderSearchBox("Where", "City or state", "Singapore, Southern Malaysia", "location-outline", locationRef)}          
            </div>
            <div className="button-container">   
                <button className="blue search" onClick={() => props.fetchPosts(locationRef.current.value, undefined, descriptionRef.current.value)}>Find Jobs</button>
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

export default connect(mapStateToProps, {fetchPosts, selectPost})(App);