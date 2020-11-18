import { useEffect, useState } from 'react'

// comments: "..."
// id: 3
// price: 8
// productName: "Tasty Rubber Towels"
// reviews: 4

const ItemDetail = ({ product }) => {
  return (
    <div id='ItemDetail'>
      <hr />
      <h2>{product.productName}</h2>
      <h3>{product.price}</h3>
      <p>{product.reviews}</p>

      {/* ItemCount */}

      {/* quiero agregar al carrito 3 unidades del producto id : 3 (Tasty Rubber Towels) */}
      <button>agregar al carrito</button>
    </div>
  )
}

export default ItemDetail
