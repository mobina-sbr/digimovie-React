import React, { useContext } from 'react'
import './favourite.css'
import { MovieContext } from '../context/MovieContext'
import { useAPI } from '../context/DataContext'
import BoxMovie from './BoxMovie'

export default function Favourite() {
  const cart = useContext(MovieContext)
  const { movie } = useAPI()
  const MovieCount = cart.items.reduce((sum, product) => sum + product.quantity, 0)

  return (
    <div>
      {MovieCount > 0 ? (
        <>
          {cart.items?.map((item, i) => {
            const { id } = item;
            const moviez = movie.find(data => data.id === id)
            console.log(cart.items)
            return (
              <div>
                <div style={{borderRadius:'10px', backgroundColor: '#242424' }} className='mt-5 container align-items-center' >
                  <BoxMovie key={i} data={moviez} />
                </div>
              </div>
            )

          })}
        </>
      ) : (
        <h3 className='empty-list text-center py-3'>Favorites list is empty</h3>
      )}
    </div>
  )
}
