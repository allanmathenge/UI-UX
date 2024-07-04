import React from 'react'
import Product from "../../assets/headphones_c_1.webp"

const Items = () => {
  return (
    <div className="items">
      <div className="products">
        <img src={Product} className="products image" alt="products" />
      </div>
      <div className="products">
        <img src={Product} className="products image" alt="products" />
      </div>
      <div className="products">
        <img src={Product} className="products image" alt="products" />
      </div>
      <div className="products">
        <img src={Product} className="products image" alt="products" />
      </div>
    </div>
  )
}

export default Items