import { useEffect, useState } from 'react'
import { getProduct } from '../../api/products'
import ItemDetail from '../../components/ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
  //Traer 1 producto en particula r(cualquiera!!!) y fijo...
  const [product, setProduct] = useState({})

  useEffect(() => {
    getProduct()
      .then(
        (response) => {
          setProduct(response)
        },
        (err) => {
          console.error(err)
        }
      )
      .catch((err) => {
        console.error(err)
      })
      .finally(() => {})
  }, [])

  return (
    <div id='ItemDetailContainer'>
      <ItemDetail product={product} />
    </div>
  )
}

export default ItemDetailContainer
