import ProductosConFakeStoreAPI from './ProductosConFakeStoreAPI.jsx'; // Esto lo pondrá luego en /pages, sacándolo de /components.
import Carrito from './Carrito.jsx';     // Esto lo pondré luego en /pages, sacándolo de /components.

const Inicio = () => {
    return (
        <>
            <h1>Inicio</h1>
            <ProductosConFakeStoreAPI />
            <hr />
            <Carrito />
        </>
    )
}

export default Inicio