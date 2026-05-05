import React from 'react'

export default function Cart({ cart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>No items yet</p>
      ) : (
        <ul>
          {cart.map((item, i) => (
            <li key={i}>
              {item.name} is in your cart - ${item.price}
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${total}</h3>
    </div>
  )
}
