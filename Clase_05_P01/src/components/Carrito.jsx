import { useState } from 'react'

const Carrito = () => {
    const listaProductos = [
        {id: 1, nombre: "papas", precio: 1500},
        {id: 2, nombre: "tomates", precio: 1800},
        {id: 3, nombre: "cilantro", precio: 2000}
    ];

    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (producto) => {
        setCarrito([...carrito, producto]);
    }

    return (
        <div>
            <h2>Productos</h2>
            <ul>
                {listaProductos.map(producto => 
                    <li key={producto.id}>
                        {producto.nombre}:
                        {producto.precio}
                        <button onClick={() => agregarAlCarrito(producto)}>Agregar</button>
                    </li>
                )}
            </ul>
            <hr />
            <h2>Carrito de Compras</h2>
            {carrito.map((producto, index) => 
                <p key={index}>{producto.nombre}: {producto.precio}</p>
            )};
            <hr />
            <button onClick={()=>setCarrito([])}>Vaciar carrito</button>
        </div>
    )
}

export default Carrito;
