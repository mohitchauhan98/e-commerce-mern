import React from 'react'
import './Offers.css'
import exclusiveImg from "../assets/exclusive_image.png"

const Offers = () => {
  return (
    <div className='offers'>
        <div className='offers-left'>
            <h1>Exclusive</h1>
            <h1>Offers for You</h1>
            <p>Only on Best Seller Products</p>
            <button>Check Now</button>
        </div>
        <div className='offers-right'>
            <img src = {exclusiveImg} alt = "" />
        </div>
    </div>
  )
}

export default Offers;
