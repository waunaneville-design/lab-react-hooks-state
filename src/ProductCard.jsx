import React from 'react'
import ProductCard from './ProductCard'

const products = [
  { id: 1, name: "Apple", category: "Fruits", price: 2 },
  { id: 2, name: "Milk", category: "Dairy", price: 3 },
  { id: 3, name: "Banana", category: "Fruits", price: 1 }
]

export default function ProductList({ category, onAddToCart }) {
  const filtered = category === "all" ? products : products.filter(p => p.category === category)

  return (
    <div className="product-list"> 
      {filtered.map(p => (
        <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />
      ))}
    </div>
  )
}

