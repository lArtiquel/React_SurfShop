import React, {useState} from 'react';
import Vimeo from '@u-wave/react-vimeo';


// should be static image instead of video on error, but there is a bug in react-vimeo
/*
// prop: imgSource = {process.env.PUBLIC_URL + '/img/surfer-2.jpg'
import StaticPlayImage from './StaticPlayImage';
export default ({imgSource, videoURL, responsive}) => {
    const [error, setError] = useState(false);
    const color = '0000FF';

    return (
        error?
            <StaticPlayImage imgSource={imgSource} /> :
            <Vimeo
                video = {videoURL}
                color = {color}
                responsive = {responsive}
                // onError={setError(true)}         
            />
    );
}
*/

export default ({videoURL, responsive}) => {
    return (
        <Vimeo
            video = {videoURL}
            responsive = {responsive}       
        />
    );
}
