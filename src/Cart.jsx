import React from 'react'

export default function Cart({ cart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.map((item, i) => (
        <div key={i}>{item.name} - ${item.price}</div>
      ))}
      <h3>Total: ${total}</h3>
    </div>
  )
}
