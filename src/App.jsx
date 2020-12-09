import logo from './logo.svg'
import './App.css'
import Home from './containers/Home/Home'
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer'

function App() {
  return (
    <div className='App'>
      {/* NavBar */}
      {/* Contenedores */}

      {/* '/' */}
      <Home />

      {/* /item/3 */}
      <ItemDetailContainer />

      {/* '/' */}

      {/* Footer */}
    </div>
  )
}

export default App

// 00:00:00 Resolviendo un error de estudiante (estaba usando useParams de React cuando se tiene que importar de react-router-dom)
// 00:10:00 Dudas respecto a la entrega de mañana (explicado en palabras)
// 00:16:00 Armando componentes del listado de productos de la pantalla inicial del e-commerce: Home > ItemList > Item
// 00:34:00 Explicando lo que hay que entregar miércoles
// 00:38:00 ItemDetailContainer > ItemDetail
// 00:48:00 Explicando componentes dentro de ItemDetail
// 00:58:00 Explicando flujo de ejecución de componentes / Effect / Ejecución async (¡importante!)
// 01:21:00 Explicando rápidamente entrega de miércoles
// 01:24:00 Resolviendo dudas de temas de async/await, custom hooks: useFetch([], getProducts())
// 01:43:00 Definición de filter
