// import { useContext } from 'react';
// import { CarritoContext } from '../context/CarritoContext.jsx';

import ProductosConFakeStoreAPI from './ProductosConFakeStoreAPI.jsx'; // Esto lo pondrá luego en /pages, sacándolo de /components.
import Carrito from './Carrito.jsx';     // Esto lo pondré luego en /pages, sacándolo de /components.

const Inicio = () => {

    // const {agregarAlCarrito } = useContext(CarritoContext);

    return (
        <>
            <h1>Inicio</h1>
            {/* <ProductosConFakeStoreAPI agregarProducto={agregarAlCarrito}/> */}
            <ProductosConFakeStoreAPI />
            <hr />
            <Carrito />
        </>
    )
}

export default Inicio