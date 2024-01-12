import React from 'react'
import './side.css'


export default function ImgSlider({ movie }) {
    return (
        <div>
            <div>
                <a href="#">
                <img src={movie.Poster} alt="" className='img-fluid img-movie' />
                </a>
            </div>
            <div className='text-center mt-4'>
                <h5>{movie.Title}</h5>
            </div>
        </div>
    )
}
