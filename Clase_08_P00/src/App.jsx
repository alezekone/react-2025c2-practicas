import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from './components/Header.jsx'
import Nav from './components/Nav.jsx'
import Main from './components/Main.jsx'
import Gallery from './components/Gallery.jsx'
import Footer from './components/Footer.jsx'
import Boton from './components/Boton.jsx'
import Boton2 from './components/Boton2.jsx'
import Formulario from './components/Formulario.jsx'
import Carrito from './components/Carrito.jsx'
import Clicker from './components/Clicker.jsx'
import ProductosConMockAPI from './components/ProductosConMockAPI.jsx'
import ProductosConFakeStoreAPI from './components/ProductosConFakeStoreAPI.jsx'
import Inicio from './components/Inicio.jsx'
import Contacto from './components/Contacto.jsx'
import RutaProtegida from './components/RutaProtegida.jsx'
import DetalleProductoSencillo from './components/DetalleProductoSencillo.jsx'
import DetalleProductoCompleto from './components/DetalleProductoCompleto.jsx'
import Login from './components/Login.jsx'
import Admin from './components/Admin.jsx'
// import StudentList from './components/StudentList.jsx'

function App() {
  // const [count, setCount] = useState(0)
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const iniciarSesion = () => setIsAuthenticated(true);
  const cerrarSesion = () => setIsAuthenticated(false);

  return (
    <>
      <Header />
      <Nav />  {/*Hoy en día, el Nav se usa dentro del Header. Ayuda cuando vemos el sitio desde un teléfono.*/}
      {
        isAuthenticated ? 
        (<button onClick = {cerrarSesion}>Cerrar sesión</button>) :
        (<button onClick = {iniciarSesion}>Iniciar sesión</button>)
      }

      <Routes>
        <Route path={"/"} element={<Inicio />} />
        <Route path={"/contacto"} element={<Contacto />} />
        <Route path={"/admin"} 
               element={<RutaProtegida isAuthenticated={isAuthenticated}> {/* <--props */}
                           <Admin /> {/* <--children */}
                        </RutaProtegida>
                       } 
               />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/producto-sencillo/:id"} element={<DetalleProductoSencillo />} />
        <Route path={"/producto-completo/:id"} element={<DetalleProductoCompleto />} />
      </Routes>
      {/*<ProductosConMockAPI />*/}
      <ProductosConFakeStoreAPI />
      <Footer />

      {/*<StudentList />*/} {/* Debería ponerlo en Main.jsx, pero nada, no importa. */}
      {/*<Main />*/}
      {/*<Clicker />*/}
      {/*<Formulario />*/}
      {/*<Carrito />*/}
      {/*<Boton />*/}
      {/*<Boton2 />*/}
      {/*<Gallery />*/}   

    </>
  )
}

export default App
