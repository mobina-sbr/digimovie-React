import React from 'react'
import './btn.css'

export default function Btn({icon ,children ,difBg,colorText}) {
  return (
    <div>
        <button className={`button ${colorText} ${difBg} ${icon}`}>{children}</button>
    </div>
  )
}
