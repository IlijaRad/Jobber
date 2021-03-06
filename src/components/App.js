import React from 'react'
import Header from './Header';
import AsideLeft from './Aside-Left'
import Main from './Main'
import AsideRight from './Aside-Right';
import './index.css';

const App = () => {
    return (
        <div id="container">
            <Header />
            <div id="content">
                <AsideLeft/>
                <Main />
                <AsideRight />
            </div>
        </div>
    )
}

export default App;