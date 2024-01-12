import React from 'react'
import './side.css'

export default function Arrow({ chevron, hndleClick }) {
    return (
        <div>
            <button className='arrow-btn'>
                <i className={` ${chevron}`} onClick={hndleClick}></i>
            </button>
        </div>
    )
}
