import React from 'react'
import {connect} from 'react-redux';
import logo from '../../img/not-available.png';
import './index.css'

const AsideRight = props => {
    const renderInfo = (heading, text) => {
        return (
            <div className="info-block">
                <div className="info-block__heading">{heading}</div>
                <div className="info-block__text" dangerouslySetInnerHTML={{ __html: text }}></div>
            </div>  
        )
    }

    const renderAside = ({company, company_logo, title, location, description, how_to_apply}) => (
        <React.Fragment>
            {company_logo ? <img className="company-logo" alt="logo" src={company_logo}/> : <img className="company-logo" alt="logo" src={logo}/> }
            <h3 className="company-name">{company}</h3>
            {renderInfo(title, location)}
            {renderInfo("Job Description", description)}
            {renderInfo("How to apply?", how_to_apply)}
        </React.Fragment>
    )
    
    return (
        <aside id="aside-right">
            {Object.keys(props.posts.selectedPost).length ? renderAside(props.posts.selectedPost) : null}
        </aside>
    )
}

const mapStateToProps = state => ({
    posts: state.posts
})

export default connect(mapStateToProps)(AsideRight);