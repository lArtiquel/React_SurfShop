import React from 'react'
import '../res/styles/surf-theme.min.css'


export default (props) => {
    return(
        <div className='slide w-slide' data-ix={props.scrollFloatingType}>
            <img alt={props.boardName} className='image-2' data-ix={props.floatingType}
                    src={props.src}/>
            <div className='surf-board-back-drop'></div>
            <div className='surfboard-description'>
                <div>Funboards</div>
                <h3 className='surfboard-heading'>{props.boardName}</h3>
                <div className='surfboard__price'>
                    <div>{props.price}</div>
                    <a className='surfboard__buy-link' href='#'>BUY</a>
                </div>
            </div>
        </div>
    );
}

