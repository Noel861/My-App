import React from 'react'
import Banner from './features/banner'
import Skills from './features/skills'
import Tracks from './features/tracks'
import Decor from './features/decor.jsx'
import Comments from './features/comments.jsx'
import Tracks2 from './features/tracks2.jsx'
import Search from './features/searchbox.jsx'

const HomePage = () => {
    return (
        <div>
            <Banner />
            <Skills />
            <Tracks />
            <Decor />
            <Comments />
            <Tracks2 />
            <Search />
        </div>
    )
}

export default HomePage