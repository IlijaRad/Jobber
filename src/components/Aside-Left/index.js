import React from 'react';
import './index.css'

export default () => {

    const mapElements = elements => {
        return elements.map((element) => {
            return <div className="filter-option__option" dangerouslySetInnerHTML={{ __html: element }}></div> 
        })
    }

    const renderGroup = (icon, heading, option) => {
        return (
            <div className="filter-group">
                <div className="filter-group icon">
                    <ion-icon name={icon}></ion-icon>
                </div>
                <div className="filter-option">
                    <div className="filter-option__heading">{heading}</div>
                    {mapElements(option)}
                </div>
            </div>
        )
    }
    return (
        <aside id="aside-left">
            <nav id="side-nav">
                <div id="icon-container">
                    <div>
                        <ion-icon name="briefcase-outline" class="selected"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="notifications-outline"></ion-icon>
                        <div className="circle red"></div> 
                    </div>
                    <div>
                        <ion-icon name="mail-outline"></ion-icon>
                        <div className="circle green"></div> 
                    </div>
                    <div>
                        <ion-icon name="settings-outline"></ion-icon>
                    </div>
                </div>
            </nav>
            <div id="search-filters">
                <div>
                    <div className="search-filter jobs">
                        <h4>Jobs in</h4>
                        <div id="job-location">Singapore Southern malaysis</div>
                    </div>
                    {renderGroup("swap-vertical-outline", "Sort by:", ["Relevance - <span>date</span>"])}
                    {renderGroup("location-outline", "Distance:", ["Within 5 kilometres", "Within 10 kilometres" , "Within 15 kilometres"
                , "Within 20 kilometres", "Within 25 kilometres"])}
                    {renderGroup("wallet-outline", "Minimum Salary", ["$2000", "$3000", "$5000", "$10000"])}
                    {renderGroup("briefcase-outline", "Job Type:", ["Full time", "Internship", "Fresher"])}
                </div> 
            </div>
        </aside>
    )
}