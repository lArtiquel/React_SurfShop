import React from 'react'
import SideBar from '../containers/SideBar.js'
import CoverContainer from '../containers/CoverContainer.js'
import QuoteContainer from '../containers/QuoteContainer.js'
import SurfStoriesContainer from '../containers/SurfStoriesContainer.js'
import ShopContainer from '../containers/ShopContainer.js'
import AboutSurfboardsContainer from '../containers/AboutSurfboardsContainer'
import PointBreakContainer from '../containers/PointBreakContainer'


function MainContentSection() {
    return (
        <section className='section'>
            <SideBar />
            <CoverContainer />
            <QuoteContainer />
            <SurfStoriesContainer />
            <ShopContainer />
            <AboutSurfboardsContainer />
            <PointBreakContainer />
        </section>
    );
}

export default MainContentSection;