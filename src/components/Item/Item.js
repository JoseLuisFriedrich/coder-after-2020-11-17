import { useEffect, useState } from 'react'

// id: 1
// price: 12
// productName: "Ergonomic Steel Chair"

const Item = ({ item }) => {
  return (
    <div id='Item'>
      <h2>{item.productName}</h2>
    </div>
  )
}

export default Item
