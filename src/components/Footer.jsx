import React from 'react'
import './footer.css'

export default function Footer({ bodySide ,colLast ,colorText,colOne}) {
    return (
        <>
            <div className={` ${bodySide} container-fluid mt-5 `}>
                <div className='row align-items-center container footer py-5'>
                <div className='col-md-4 col-one ' >
                        <a href="#" className={`${colOne}`}>دانلود فیلم</a>
                        <a href="#" className={`mt-2 ${colOne}`}>دانلود فیلم</a>
                        <a href="#" className={`mt-2 ${colOne}`}>دانلود فیلم</a>
                        <a href="#" className={`mt-2 ${colOne}`}>دانلود فیلم</a>
                        <a href="#" className={`mt-2 ${colOne}`}>دانلود فیلم</a>
                    </div>
                    <div className='col-md-4 col-one ' >
                        <a href="#" className={`${colOne}`}>دانلود فیلم</a>
                        <a href="#" className={`mt-2 ${colOne}`}>دانلود فیلم</a>
                        <a href="#" className={`mt-2 ${colOne}`}>دانلود فیلم</a>
                        <a href="#" className={`mt-2 ${colOne}`}>دانلود فیلم</a>
                        <a href="#" className={`mt-2 ${colOne}`}>دانلود فیلم</a>
                    </div>
                    <div className='col-md-4 ' >
                        <div className={`d-flex align-items-center a-footer col-last ${colLast}`}>
                            <div className='telegram ms-3'>
                                <i className="bi bi-telegram fs-4 ms-2 icon-tel"></i>
                            </div>
                            <div className='a-telegram'>
                                <a href="#" className={`${colorText} `}>عضویت در کانال تلکرام</a>
                                <a href="#" className='a-telegram-2 mt-2'>TELEGRAM CHANELL</a>
                            </div>
                        </div>
                        <div className={`d-flex align-items-center a-footer mt-4 col-last ${colLast}`}>
                            <div className='telegram ms-3'>
                                <i className="bi bi-telegram fs-4 ms-2 icon-tel"></i>
                            </div>
                            <div className='a-telegram'>
                                <a href="#" className={`${colorText}`}>عضویت‌درکانال‌تلگرام</a>
                                <a href="#" className='a-telegram-2 mt-2'>TELEGRAM CHANELL</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
