import React, { useEffect, useState } from 'react'
import Arrow from './Arrow'
import ImgSlider from './ImgSlider'
import './side.css'

export default function MovieSlider({ bodySide }) {

    const [slider, setSlider] = useState([])
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies')
            .then((response) => response.json())
            .then((data) => setSlider(data))
    },
        [])

    function nextHndler() {
        const indexMovie = current + 1 < slider.length ? current + 1 : 0;
        setCurrent(indexMovie)
    }

    function prevHndler() {
        const indexMovie = current - 1 < 0 ? slider.length - 1 : current - 1;
        setCurrent(indexMovie)
    }

    return (
        <>
            {!slider.length ? (
                <p>nothing</p>
            ) : (
                <div className={`section mt-3 pb-5 ${bodySide}`}>
                    <div className='d-flex justify-content-center mt-4 '>
                        <div>
                            <i class="bi bi-mic-fill ms-2 icon"></i>
                        </div>
                        <div>
                            <p>فیلم های <br /> <small>دوبله فارسی</small></p>
                        </div>
                    </div>
                    <div className='mt-2'>
                        <ImgSlider movie={slider[current]} />
                        <div className='arrow mt-3'>
                            <Arrow chevron='bi bi-chevron-right next' hndleClick={nextHndler} />
                            <Arrow chevron='bi bi-chevron-left prev' hndleClick={prevHndler} />
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
