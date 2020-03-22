import React from 'react'
import '../res/surf-theme.min.css'
import SideBar from './SideBar.js'
import CoverContainer from './CoverContainer.js'
import QuoteContainer from './QuoteContainer.js'
import SurfStoriesContainer from './SurfStoriesContainer.js'
import ShopContainer from './ShopContainer.js'
import AboutSurfboardsContainer from './AboutSurfboardsContainer'
import PointBreakContainer from './PointBreakContainer'


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