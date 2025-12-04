import { useState, useEffect, act } from 'react';
import FormularioProducto from './FormularioProducto';
import EditarProducto from './EditarProducto';

const API = 'https://6927072e26e7e41498fca0cb.mockapi.io/api/v1/productos';

const GestionProductos = () => {

    const [productos, setProductos] = useState([]);
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);
    const [cargando, setCargando] = useState(false);
    const API = "https://6927072e26e7e41498fca0cb.mockapi.io/api/v1/productos";

    // Cargar productos al montar el componente...
    useEffect(() => {
        cargarProductos();}
    , []);

    const cargarProductos = async () => {
        try {
            setCargando(true);
            const respuesta = await fetch(API);
            const datos = await respuesta.json();
            setProductos(datos);
        } catch (error) {
            console.error('Error al cargar productos:', error);
            alert('Error al cargar productos');
        } finally {
            setCargando(false);
        }
    };

    const seleccionarUnProducto = (producto) => {
        setProductoSeleccionado(producto);
    }

    if (cargando) {
        return <div>Cargando productos...</div>
    }

    const agregarProducto = async (producto) => {
        try {
            const respuesta = await fetch(API, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(producto)
            });
            if (respuesta.ok) {
                const nuevoProducto = await respuesta.json();
                setProductos([...productos, nuevoProducto]);
                console.log('Producto agregado:', nuevoProducto);
                alert(`Producto "${nuevoProducto.nombre}" agregado exitosamente`);
            } else {
                throw new Error('Error al agregar producto');
            }
        } catch (error) {
            console.error('Error al agregar producto:', error);
            alert('Error al agregar producto');
        }
    }

    const actualizarProducto = (productoEnActualizacion) => {
        const listaSinElProductoAActualizar = productos.filter(producto => producto.id !== productoEnActualizacion.id);
        // El problema con la siguiente linea es que el producto actualizado
        // pasa al final de la lista, y esto -con este cambio en el orden- se nota
        // mucho al renderizar. Hay que colocar al producto modificado en el mismo 
        // lugar en el que estaba.
        setProductos([...listaSinElProductoAActualizar, productoEnActualizacion]);
    }

    const eliminarProducto = async (id) => {
        const confirmar = window.confirm('¿Estás seguro de que deseas eliminar este producto?');
        if (!confirmar) return;
        try {
            const respuesta = await fetch(`${API}/${id}`, {
                method: 'DELETE'
            });
            if (respuesta.ok) {
                // Actualizo el estado local para reflejar la eliminación
                // sin necesidad de recargar toda la lista desde el servidor
                setProductos(productos.filter(producto => producto.id !== id));
                alert('Producto eliminado exitosamente');
            } else {
                throw new Error('Error al eliminar producto');
            }
        } catch (error) {
            console.error('Error al eliminar producto:', error);
            alert('Error al eliminar producto');
        }
    }

return (
    <>
        <div>
            <h2>Gestión de Productos</h2>
        </div>

        <div>
            <FormularioProducto onAgregar={agregarProducto} />
        </div>

        <div>
            <h2>Lista de Productos</h2>
            {productos.length === 0 ? (
                <p>No hay productos disponibles</p>
            ) : (
                <ul>
                    {productos.map(producto => (
                        <li key={producto.id}>
                            {producto.nombre} - ${producto.precio}
                            <img src={producto.imagen} alt={producto.nombre} width={80} height={80} />
                            {producto.descripcion}
                            <button onClick={() => seleccionarUnProducto(producto)}>Editar</button>
                            <button onClick={() => eliminarProducto(producto.id)}>Eliminar</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
        <div>
            <h2>Producto en Edición</h2>
            {productoSeleccionado ? (
                <EditarProducto
                    productoEnEdicion={productoSeleccionado}
                    onActualizar={actualizarProducto}
                />
            ) : (
                <p>No hay producto seleccionado</p>
            )}
        </div>
    </>
)

}

export default GestionProductos;