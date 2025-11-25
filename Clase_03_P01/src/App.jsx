import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from './components/Header.jsx'
import Nav from './components/Nav.jsx'
import Main from './components/Main.jsx'
import Gallery from './components/Gallery.jsx'
import Footer from './components/Footer.jsx'


import StudentList from './components/StudentList.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <StudentList /> {/* Debería ponerlo en Main.jsx, pero nada, no importa. */}
      <Header />
      <Nav />  {/*Hoy en día, el Nav se usa dentro del Header. Ayuda cuando vemos el sitio desde un teléfono.*/}
      <Main />
      <Gallery />
      <Footer />
    </>
  )
}

export default App
