//Esta función es llamada por la Home para darle al usuario
// la lista complemta de productos disponibles para comprar
// en nuestra e-commerce+

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    resolve([
      { id: 1, productName: 'Ergonomic Steel Chair', price: 12 },
      { id: 2, productName: 'Generic Plastic Hat', price: 20 },
      { id: 3, productName: 'Tasty Rubber Towels', price: 8 },
    ])
  })
}

//función que devuelve un objeto para mostrar el detalle en pantalla.
export const getProduct = () => {
  return new Promise((resolve, reject) => {
    resolve({ id: 3, productName: 'Tasty Rubber Towels', price: 8, reviews: 4, comments: '...' })
  })
}
