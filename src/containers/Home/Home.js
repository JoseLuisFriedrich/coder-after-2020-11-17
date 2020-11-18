import { useEffect, useState } from 'react'
import { getProducts } from '../../api/products'
import ItemList from '../../components/ItemList/ItemList'

const Home = () => {
  //Llamado a la promise que nos devuelve un listado de productos para la home
  const [items, setItems] = useState([])
  console.log('1')

  useEffect(() => {
    console.log('3')

    setTimeout(() => {
      getProducts()
        .then(
          (response) => {
            // console.log(response)
            setItems(response)
          },
          (err) => {
            console.error(err)
          }
        )
        .catch((err) => {
          console.error(err)
        })
        .finally(() => {})
    }, 5000)
  }, [])

  console.log(items)

  return (
    <div id='Home'>
      <h2>Home</h2>
      <ItemList items={items} />
    </div>
  )
}

export default Home
