import React from 'react'
import './styles/CStyle.css'
import Header from './Header'
export default function ContactL(prop) {
  return (
    <div>
        <div className='Card'>
            <p>{prop.name}</p>
            <p>{prop.address}</p>
            <p>{prop.phone}</p>
            <p>{prop.email}</p>
            <p>{prop.web}</p>
            <p>{prop.location}</p>
        </div>
          <i class="fa-solid fa-user"></i>
        <p><i class='fas fa-map-marker-alt'></i>dfgdfgfdg</p>
        <i class='fas fa-map-marker-alt'></i>
    </div>
  )
}
