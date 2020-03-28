import React, {useState} from 'react';
import Vimeo from '@u-wave/react-vimeo';
import StaticPlayImage from './StaticPlayImage';

// should be static image instead of video on error, but there is a bug in react-vimeo
export default ({imgSource, videoURL, responsive}) => {
//    const [error, setError] = useState(false);
    const color = '0000FF';

    return (
/*        error?
            <StaticPlayImage imgSource={imgSource} /> :
*/
            <Vimeo
                video = {videoURL}
                color = {color}
                responsive = {responsive}
                // onError={setError(true)}         
            />
    );
}
