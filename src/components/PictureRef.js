import React from 'react'
import '../res/styles/surf-theme.min.css'

export default (props) => {
    return (
        <a className={props.refClassName?props.refClassName:''} href={props.href? props.href : '#'}>
            <img className={props.imgClassName?props.imgClassName:''} src={props.imgSrc} width={props.imgWidth?props.imgWidth:''}/>
        </a>
    );
}