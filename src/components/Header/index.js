import React from 'react';
import './index.css'
import GoogleAuth from '../GoogleAuth'

const Header = () => {

    const renderLogo = () => {
        return (
            <div id="logo">
                <div>Jobber</div>
            </div>
        )
    }

    const renderNav = () => {
        return (
            <nav id="main-nav">
                <ul>
                    <a href="#"><li className="selected">Find Jobs</li></a>
                    <a href="#"><li>Company Reviews</li></a>
                    <a href="#"><li>Find Resumes</li></a>
                    <a href="#"><li>Employers / Post Job</li></a>
                </ul>
            </nav>
        )
    }

    const renderUser = () => {
        return <GoogleAuth/>
    }

    return (
        <header>
            {renderLogo()}
            {renderNav()}
            {renderUser()}
        </header>
    )
}

export default Header;