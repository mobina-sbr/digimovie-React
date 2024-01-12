import React from 'react'
import './side.css'

export default function Genre({name,bodySide,colorText}) {
    return (
        <div className={`box-new mt-4 py-4 ${bodySide}`}>
            <div className='d-flex justify-content-center mt-4'>
                <div>
                    <i className="bi bi-film ms-2 icon"></i>
                </div>
                <div>
                    <p>دسته‌بندی <br /> <small>{name}</small></p>
                </div>
            </div>
            <div className='genre px-2'>
                <div>
                    <i className="bi bi-chevron-left"></i>
                    <a className={`${colorText}`} href="#">درام</a>
                </div>
                <span>(548)</span>
            </div>
            <div className='genre px-2 mt-2'>
                <div>
                    <i className="bi bi-chevron-left"></i>
                    <a  className={`${colorText}`} href="#">هیجان انگیز</a>
                </div>
                <span>(548)</span>
            </div>
            <div className='genre px-2 mt-2'>
                <div>
                    <i className="bi bi-chevron-left"></i>
                    <a  className={`${colorText}`} href="#">کمدی</a>
                </div>
                <span>(548)</span>
            </div>
            <div className='genre px-2 mt-2'>
                <div>
                    <i className="bi bi-chevron-left"></i>
                    <a  className={`${colorText}`} href="#">رازآلود</a>
                </div>
                <span>(548)</span>
            </div>
            <div className='genre px-2 mt-2'>
                <div>
                    <i className="bi bi-chevron-left"></i>
                    <a  className={`${colorText}`} href="#">اکشن</a>
                </div>
                <span>(548)</span>
            </div>
            <div className='genre px-2 mt-2'>
                <div>
                    <i className="bi bi-chevron-left"></i>
                    <a  className={`${colorText}`} href="#">ماجراجویی</a>
                </div>
                <span>(548)</span>
            </div>
            <div className='genre px-2 mt-2'>
                <div>
                    <i className="bi bi-chevron-left"></i>
                    <a  className={`${colorText}`} href="#">جنایی</a>
                </div>
                <span>(548)</span>
            </div>
            <div className='genre px-2 mt-2'>
                <div>
                    <i className="bi bi-chevron-left"></i>
                    <a  className={`${colorText}`} href="#">ترسناک</a>
                </div>
                <span>(548)</span>
            </div>
            <div className='genre px-2 mt-2'>
                <div>
                    <i className="bi bi-chevron-left"></i>
                    <a  className={`${colorText}`} href="#">عاشقانه</a>
                </div>
                <span>(548)</span>
            </div>
            <div className='genre px-2 mt-2'>
                <div>
                    <i className="bi bi-chevron-left"></i>
                    <a  className={`${colorText}`} href="#">فانتزی</a>
                </div>
                <span>(548)</span>
            </div>
            <div className='genre px-2 mt-2'>
                <div>
                    <i className="bi bi-chevron-left"></i>
                    <a  className={`${colorText}`} href="#">علمی نخیلی</a>
                </div>
                <span>(548)</span>
            </div>
            <div className='genre px-2 mt-2'>
                <div>
                    <i className="bi bi-chevron-left"></i>
                    <a  className={`${colorText}`} href="#">انیمیشن</a>
                </div>
                <span>(548)</span>
            </div>
            <div className='genre px-2 mt-2'>
                <div>
                    <i className="bi bi-chevron-left"></i>
                    <a  className={`${colorText}`} href="#">خانوادگی</a>
                </div>
                <span>(548)</span>
            </div>
            <div className='genre px-2 mt-2'>
                <div>
                    <i className="bi bi-chevron-left"></i>
                    <a  className={`${colorText}`} href="#">بیوگرافی</a>
                </div>
                <span>(548)</span>
            </div>
            <div className='genre px-2 mt-2'>
                <div>
                    <i className="bi bi-chevron-left"></i>
                    <a  className={`${colorText}`} href="#">تاریخی</a>
                </div>
                <span>(548)</span>
            </div>
            <div className='genre px-2 mt-2'>
                <div>
                    <i className="bi bi-chevron-left"></i>
                    <a  className={`${colorText}`} href="#">حنگی</a>
                </div>
                <span>(548)</span>
            </div>
            <div className='genre px-2 mt-2'>
                <div>
                    <i className="bi bi-chevron-left"></i>
                    <a  className={`${colorText}`} href="#">رمانتیک</a>
                </div>
                <span>(548)</span>
            </div>
            <div className='genre px-2 mt-2'>
                <div>
                    <i className="bi bi-chevron-left"></i>
                    <a  className={`${colorText}`} href="#">ورزشی</a>
                </div>
                <span>(548)</span>
            </div>
            <div className='genre px-2 mt-2'>
                <div>
                    <i className="bi bi-chevron-left"></i>
                    <a  className={`${colorText}`} href="#">موزیکال</a>
                </div>
                <span>(548)</span>
            </div>
            <div className='genre px-2 mt-2'>
                <div>
                    <i className="bi bi-chevron-left"></i>
                    <a  className={`${colorText}`} href="#">وسترن</a>
                </div>
                <span>(548)</span>
            </div>
            <div className='genre px-2 mt-2'>
                <div>
                    <i className="bi bi-chevron-left"></i>
                    <a  className={`${colorText}`} href="#">مستند</a>
                </div>
                <span>(548)</span>
            </div>
            <div className='genre px-2 mt-2'>
                <div>
                    <i className="bi bi-chevron-left"></i>
                    <a  className={`${colorText}`} href="#">معمایی</a>
                </div>
                <span>(548)</span>
            </div>
            <div className='genre px-2 mt-2'>
                <div>
                    <i className="bi bi-chevron-left"></i>
                    <a  className={`${colorText}`} href="#">فیلم کوتاه</a>
                </div>
                <span>(548)</span>
            </div>
            <div className='genre px-2 mt-2'>
                <div>
                    <i className="bi bi-chevron-left"></i>
                    <a  className={`${colorText}`} href="#">اجتماعی</a>
                </div>
                <span>(548)</span>
            </div>
            <div className='genre px-2 mt-2'>
                <div>
                    <i className="bi bi-chevron-left"></i>
                    <a  className={`${colorText}`} href="#">انیمیشن کوتاه</a>
                </div>
                <span>(548)</span>
            </div>
        </div>
    )
}
