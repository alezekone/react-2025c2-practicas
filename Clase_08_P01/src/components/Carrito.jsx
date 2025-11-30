import { useContext } from 'react';
import { CarritoContext } from '../context/CarritoContext.jsx';

const Carrito = ({ productosEnCarrito, productosEliminados}) => {

    const {carrito, eliminarDelCarrito, vaciarCarrito } = useContext(CarritoContext);

    return (
        <div>
            <h1>Carrito de Compras</h1>
            {carrito.map((producto, index) => 
                <div key={index}>
                    <p>{producto.title}: {producto.price}</p> {/* Para FakeStoreAPI: title y price */}
                    <button onClick={() => eliminarDelCarrito(index)}>Eliminar</button>
                </div>
            )}
            <button onClick={()=>vaciarCarrito()}>Vaciar Carrito</button>
        </div>
    )
}

export default Carrito;
