import React from 'react'
import InfoMovie from './InfoMovie'
import './side.css'
import sideimg from '../images/side.jpg'
import Genre from './Genre'
import Side from './Side'
import MovieSlider from './MovieSlider'

export default function BodyMovie({ bodySide ,bgSide,colorText}) {
    return (
        <div className='container'>
            <div className='row mt-5' >
                <div className='col-md-3 side-body'>
                    <div className={`box-new p-2 ${bodySide}`}>
                        <div className='d-flex justify-content-center mt-4 '>
                            <div>
                                <i class="bi bi-tv ms-2 icon"></i>
                            </div>
                            <div>
                                <p>سریال های <br /> <small>به روز شده</small></p>
                            </div>
                        </div>
                        <div>
                            <img src={sideimg} className='img-fluid img-side py-2' alt="" />
                        </div>
                        <Side bgSide={bgSide}/>
                        <Side bgSide={bgSide}/>
                        <Side bgSide={bgSide}/>
                        <Side bgSide={bgSide}/>
                        <Side bgSide={bgSide}/>
                        <Side bgSide={bgSide}/>
                        <Side bgSide={bgSide}/>
                        <Side bgSide={bgSide}/>
                        <Side bgSide={bgSide}/>
                        <Side bgSide={bgSide}/>
                        <Side bgSide={bgSide}/>
                        <Side bgSide={bgSide}/>
                        <Side bgSide={bgSide}/>
                        <Side bgSide={bgSide}/>
                    </div>
                    <MovieSlider bodySide={bodySide}/>
                    <Genre name='فیلم ها' bodySide={bodySide} colorText={colorText}/>
                    <Genre name='سریال ها' bodySide={bodySide} colorText={colorText}/>
                    <Genre name='فیلم ها' bodySide={bodySide} colorText={colorText}/>
                    <Genre name='سریال ها' bodySide={bodySide} colorText={colorText}/>
                </div>
                <div className='col-md-9'>
                    <InfoMovie bodySide={bodySide} />
                </div>
            </div>
        </div>
    )
}
