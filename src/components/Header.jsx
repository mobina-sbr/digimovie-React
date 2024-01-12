import React from 'react'
import './navbar.css'


export default function Header({ difBg, colorText, inputBg }) {

    return (
        <nav className={`navbar navbar-expand-lg navbar-bg py-5 ${difBg}`}>
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item align-items-center text-center d-flex ms-5">
                            <div>
                                <i className="bi bi-house icon"></i>
                            </div>
                            <div>
                                <a className={`nav-link active ${colorText} `} aria-current="page" href="#">خانه</a>
                                <a className="nav-link active color-text-yellow" aria-current="page" href="#">HOME</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown ms-5 align-items-center d-flex ">
                            <div>
                                <i className="bi bi-film icon"></i>
                            </div>
                            <div>
                                <a className={`nav-link active ${colorText} `} aria-current="page" href="#">دانلود فیلم</a>
                                <a className="nav-link dropdown-toggle active color-text-yellow" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    MOVIES
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item dropdown align-items-center d-flex ms-5">
                            <div>
                                <i className="bi bi-pc-display-horizontal icon"></i>
                            </div>
                            <div>
                                <a className={`nav-link active ${colorText} `} aria-current="page" href="#">دانلود سریال</a>
                                <a className="nav-link dropdown-toggle active color-text-yellow" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    SERIES
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item dropdown ms-5  align-items-center d-flex">
                            <div>
                                <i className="bi bi-person-vcard icon"></i>
                            </div>
                            <div>
                                <a className={`nav-link active ${colorText} `} aria-current="page" href="#">هنرمندان</a>
                                <a className="nav-link dropdown-toggle active color-text-yellow" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    ARTISTS
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item align-items-center text-center ms-5 d-flex">
                            <div>
                                <i className="bi bi-headset icon"></i>
                            </div>
                            <div>
                                <a className={`nav-link active ${colorText}`} aria-current="page" href="#">تماس با ما</a>
                                <a className="nav-link active color-text-yellow" aria-current="page" href="#">CONTACT</a>
                            </div>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className={`bg-input ${inputBg}`} type="search" placeholder="Search..." aria-label="Search" />
                        <button className='btn-form btn btn-outline' type="submit">
                            <i className="bi bi-search "></i>
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    )
}
