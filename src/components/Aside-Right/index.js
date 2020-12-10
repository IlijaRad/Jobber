import React from 'react'
import logo from '../../img/index.png'
import './index.css'

export default () => {
    const renderInfo = (heading, text) => {
        return (
            <div className="info-block">
                <div className="info-block__heading">{heading}</div>
                <div className="info-block__text">{text}</div>
            </div>  
        )
    }
    
    return (
        <aside id="aside-right">
            <img className="company-logo" alt="company logo" src={logo}/>
            <h3 className="company-name">Google</h3>
            {renderInfo("Full Stack Developer", "Singapore, Southern Malaysia")}
            {renderInfo("Job Summary", "Singapore, Southern Malaysia")}
            {renderInfo("Skill Sets Required", "Shipgig Ventures Pvt. Ltd. is looking for the Full Stack Developer ( 1 years to 5 years) of experience with good logical skills:")}
            {renderInfo("Full Stack Developer", "Front end : Angular JS, HTML, CSS \n Back end : Node JS,SQL, SQL LITE")}
            {renderInfo("Venue", "Shipgig Ventures, H - 55, 3rd floor, Sector - 63, Noida - 201301(In Front Of Dena Bank,Near Electronic City Metro Station)")}
            {renderInfo("Contact", "+91- 8874700071 , +91120-4271421 Walk-in Time : 2 Pm to 6 Pm(Monday-Friday)")}
            <button className="blue button apply">Apply now</button>  
        </aside>
    )
}