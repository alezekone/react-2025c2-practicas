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
import DetalleProductoSencillo from './components/DetalleProductoSencillo.jsx'
import DetalleProductoCompleto from './components/DetalleProductoCompleto.jsx'
// import StudentList from './components/StudentList.jsx'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Nav />  {/*Hoy en día, el Nav se usa dentro del Header. Ayuda cuando vemos el sitio desde un teléfono.*/}
      <Routes>
        <Route path={"/"} element={<Inicio />} />
        <Route path={"/contacto"} element={<Contacto />} />
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
