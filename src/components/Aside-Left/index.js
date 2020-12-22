import React from 'react';
import {connect} from 'react-redux';
import {selectType} from '../../actions';
import './index.css'

const AsideLeft = props => {

    const renderNav = () => {
        return (
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
        )
    }

    const mapElements = (elements, selectedIndex, chkbox) => {

        return elements.map((element, ix) => { 
            return (
                <React.Fragment key={ix}>
                    {!chkbox ? (ix === selectedIndex ? <div className="filter-option__option selected" dangerouslySetInnerHTML={{ __html: element }}></div> : <div className="filter-option__option" dangerouslySetInnerHTML={{ __html: element }}></div>)
                    : (<label><input className="filter-option__checkbox" type="checkbox" name="fullTime" defaultChecked={true} checked={props.full_time} onChange={() => props.selectType()}/> Full time</label>)}
                </React.Fragment>
            )
        })
    }

    const renderFilter = (icon, heading, option, selectedIndex=-1, chkbox=false) => {
        return (
            <div className="filter-group">
                <div className="filter-group icon">
                    <ion-icon name={icon}></ion-icon>
                </div>
                <div className="filter-option">
                    <div className="filter-option__heading">{heading}</div>
                    {mapElements(option, selectedIndex, chkbox)}
                </div>
            </div>
        )
    }

    const renderFilters = () => {
        return (
            <div id="search-filters">
                <div>
                    <div className="search-filter jobs">
                        <h4>Jobs in</h4>
                        <div id="job-location">Singapore, Southern Malaysia</div>
                    </div>
                    {renderFilter("swap-vertical-outline", "Sort by:", ["Relevance - <span>date</span>"])}
                    {renderFilter("location-outline", "Distance:", ["Within 5 kilometres", "Within 10 kilometres" , "Within 15 kilometres"
                , "Within 20 kilometres", "Within 25 kilometres"], 4)}
                    {renderFilter("briefcase-outline", "Job Type:", ["Full time"], 0, true)}
                </div> 
            </div>
        )
    }

    return (
        <aside id="aside-left">
            {renderNav()}
            {renderFilters()}
        </aside>
    )
}

const mapStateToProps = state => ({
    full_time: state.full_time
})

export default connect(mapStateToProps, {selectType})(AsideLeft);