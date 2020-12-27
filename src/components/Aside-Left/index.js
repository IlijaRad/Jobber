import React from 'react';
import {connect} from 'react-redux';
import {selectType, fetchPosts, selectLocation} from '../../actions';
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

    const sortBy = () => {
        alert('snickers');
    }

    const mapElements = (elements, param) => {
        const helper = (el, param) => {
            if (param === 'location'){
                if (props.location === el) props.selectLocation(null);
                else props.selectLocation(el);
            } else props.selectType()
        }
        return elements.map((element, ix) => { 
            return (
                <React.Fragment key={ix}>
                    {<label className="filter-option__label"><input className="filter-option__checkbox" type="checkbox" name="fullTime" checked={param === 'type' ? props.full_time : (element === props.location ? true : false)} onChange={() => helper(element, param)}/><span>{element}</span></label>}
                </React.Fragment>
            )
        })
    }

    const renderFilter = (icon, heading, option, param) => {
        return (
            <div className="filter-group">
                <div className="filter-group icon">
                    <ion-icon name={icon}></ion-icon>
                </div>
                <div className="filter-option">
                    <div className="filter-option__heading">{heading}</div>
                    <div className="filter-option__options">{mapElements(option , param)}</div>
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
                    {renderFilter("location-outline", "Location:", ["Berlin", "London", "Amsterdam"], 'location')}
                    {renderFilter("briefcase-outline", "Job Type:", ["Full time"], 'type')}
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
    full_time: state.posts.full_time,
    location: state.posts.location
})

export default connect(mapStateToProps, {selectType, fetchPosts, selectLocation})(AsideLeft);