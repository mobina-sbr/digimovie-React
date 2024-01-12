import React from 'react'
// import './info-movie.css'
import { useAPI } from '../context/DataContext'
import BoxMovie from './BoxMovie'


export default function InfoMovie({bodySide}) {
    
    const { movie } = useAPI()

    return (
        <>
        {movie?.map((data)=>{
            return(
                <BoxMovie bodySide={bodySide} data={data}/>
            )
        })}
        </>
    )
}
