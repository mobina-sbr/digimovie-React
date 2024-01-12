import React from 'react'
import subImg from '../images/episode.jpg'

export default function Side({bgSide}) {
    return (
        <div className={`subtitle mt-2 ${bgSide}`}>
            <div>
                <img src={subImg} alt="" className='img-fluid' style={{borderRadius: '10px 10px 0 0'}}/>
                <p className='py-2'>قسمت <span><i className="bi bi-6-circle-fill" style={{color:'#eb8307'}}></i></span> فصل اول با زیرنویس منتشر شد</p>
            </div>
        </div>
    )
}
