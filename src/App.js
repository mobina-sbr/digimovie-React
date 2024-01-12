import React from 'react'
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { ApiContextProvider } from './context/DataContext';
import { MovieProvider } from './context/MovieContext';
import Front from './components/pages/Front';
import Favourite from './components/Favourite';

export default function App() {
  
  return (
    <ApiContextProvider>
      <MovieProvider>
        <Routes>
          <Route path='/' Component={Front}/>
          <Route path='Favourite' Component={Favourite}/>
        </Routes>
      </MovieProvider>
    </ApiContextProvider>
  )
}
