import { useEffect, useState } from 'react'
import Item from '../Item/Item'

const ItemList = ({ items }) => {
  //map de los items y llamar a Item por cada iteración
  return (
    <div id='ItemList'>
      {items.map((item, idx) => {
        return <Item key={idx} item={item} />
      })}
    </div>
  )
}

export default ItemList
