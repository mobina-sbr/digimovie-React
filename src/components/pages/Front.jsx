import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import useDarkMode from '../../useDarkMode'
import Header from '../Header'
import BodyMovie from '../BodyMovie'
import Btn from '../Btn'
import logo from '../../images/logo-light.png'
import logoLight from '../../images/logo-dark.png'
import { MovieContext } from '../../context/MovieContext'
import Footer from '../Footer'

export default function Front() {
    const [theme, toggleTheme] = useDarkMode()
    const cart = useContext(MovieContext)
    const MovieCount = cart.items.reduce((sum, product) => sum + product.quantity, 0)
    return (
        <>
            <div className={theme === 'dark' ? 'cover-dark' : 'covor-light'}  >
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-md-3 d-flex offset-5'>
                            <Btn difBg={`${theme === 'dark' ? 'bg-dark' : 'bg-light'}`} colorText={`${theme === 'dark' ? 'color-text-dark' : 'color-text-light'}`} children='ثبت‌نام' icon='bi bi-person-add' />
                            <Btn difBg={`${theme === 'dark' ? 'bg-dark' : 'bg-light'}`} colorText={`${theme === 'dark' ? 'color-text-dark' : 'color-text-light'}`} children='وارد‌شوید' icon='bi bi-box-arrow-in-right' />
                        </div>
                        <div className='col-md-4 d-flex py-3 align-items-center'>
                            <Link className=' ms-2 px-2 pb-2' to='/Favourite'>
                                <span className='spn px-2 pb-1'>{MovieCount}</span>
                                <i className="link-icon fs-5 px-2 py-1 px-1 bi bi-suit-heart text-center"></i>
                            </Link>
                            <div className='ms-5'>
                                <button onClick={toggleTheme} className='buton' style={{ backgroundColor: theme === 'light' ? '#ccc' : '#252525' }}>
                                    <i class="bi bi-moon-fill fw-bold icon" style={{ color: '#f1c40f' }} />
                                    <i class="bi bi-sun-fill me-3 fw-bold icon" style={{ color: '#f39c12' }} />
                                    <div className='circle' style={{ transform: theme === 'light' ? 'translateX(18px)' : 'translateX(-18px)' }}></div>
                                </button>
                            </div>
                            <div>
                                {theme === 'dark' ? <img src={logo} className='img-fluid' /> : <img src={logoLight} className='img-fluid' />}
                            </div>
                        </div>
                    </div>
                </div>
                <Header difBg={`${theme === 'dark' ? 'bg-dark' : 'bg-light'}`} colorText={`${theme === 'dark' ? 'color-text-dark' : 'color-text-light'}`} inputBg={`${theme === 'dark' ? 'dark-input' : 'dark-light'}`} />
                <BodyMovie bgSide={`${theme === 'dark' ? 'color-dark' : 'color-light'}`} colorText={`${theme === 'dark' ? 'color-text-dark' : 'color-text-light'}`} bodySide={`${theme === 'dark' ? 'body-dark' : 'body-light'}`} />
                <Footer colOne={`${theme === 'dark' ? 'col-one-a' : 'col-one-a-dark'}`} colorText={`${theme === 'dark' ? 'color-text-dark' : 'color-text-light'}`} colLast={`${theme === 'dark' ? 'footer-dark' : 'footer-light'}`} bodySide={`${theme === 'dark' ? 'body-dark' : 'body-light'}`}/>
            </div>
        </>
    )
}
