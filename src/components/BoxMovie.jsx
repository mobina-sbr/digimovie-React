import React, { useContext } from 'react'
import './info-movie.css'
import imdb from '../images/IMDb_BrandBanner_1920x425.jpg'
import { MovieContext } from '../context/MovieContext'


export default function BoxMovie({ data, bodySide }) {

    const cart = useContext(MovieContext)
    const movieQuantity = cart.getMovieQuantity(data.id)

    return (
        <div className={` box-movie mb-5 ${bodySide}`}>
            <div className='row '>
                <div className='col-md-3'>
                    <img src={data.ImageURL} alt="" className='img-movie mt-5 pe-2' />
                </div>
                <div className='col-md-6'>
                    <h5 className='mb-4 pt-5'>دانلود فیلم {data.Title}</h5>
                    <div>
                        <div className='d-flex'>
                            <i className="bi bi-folder2-open ms-2 icon-2"></i>
                            <p>ژانر: {data.Genre.Name}</p>
                        </div>
                        <div className='d-flex'>
                            <i className="bi bi-justify ms-2 icon-2"></i>
                            <p>سال تولید: {data.Release}</p>
                        </div>
                        <div className='d-flex'>
                            <i className="bi bi-person-lines-fill ms-2 icon-2"></i>
                            <p>کارگردان: {data.Director.Name}</p>
                        </div>
                        <div className='d-flex'>
                            <i className="bi bi-person-vcard ms-2 icon-2"></i>
                            <p>بیوگرافی : {data.Director.Bio}</p>
                        </div>
                        <div className='d-flex'>
                            <i className="bi bi-film ms-2 icon-2"></i>
                            <p>خلاصه‌داستان: {data.Description}</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 left-box pt-5'>
                    <div>
                        <div>
                            {movieQuantity > 0 ? (
                                <>
                                    <i className="bi bi-dash fs-5 px-1 total"></i>
                                    <button onClick={() => cart.deleteFromCart(data.id)} className='hrt-btn btn  btn-secondary'>
                                        <i className=" bi bi-suit-heart-fill text-center"></i>
                                    </button>
                                </>
                            ) : (
                                <>
                                    <i className="bi bi-plus fs-5 px-1 total"></i>
                                    <button onClick={() => cart.addMovieToCart(data.id)} className='hrt-btn btn  btn-secondary'>
                                        <i className=" bi bi-suit-heart text-center"></i>
                                    </button>
                                </>
                            )}
                        </div>
                        <div>
                            <img src={imdb} alt="" className='ps-4 img-fluid mt-5 text-center' />
                        </div>
                    </div>
                    <div className='download text-center'>
                        <i className="bi bi-box-arrow-in-down-right text-center fs-4"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
