import { useState, useEffect} from 'react';

const ProductosConMockAPI = () => {
    const [producto, setProducto] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    // Si quiero simular un error en la carga de datos, hago el fetch a la sgte URL:
    // https://6927072e26e7e41498fca0cb.mockapi.io/
    useEffect(()=> {
        fetch('https://6927072e26e7e41498fca0cb.mockapi.io/api/v1/productos')
            .then(respuesta => respuesta.json())
            .then(datos => {
                setProducto(datos);
                setCargando(false);
            })
            .catch(error => {
                console.log('Error al cargar los productos', error);
                setError("Error al cargar los productos", error);
                setCargando(false);
            })
    },[]);

    if(cargando) return <p>Cargando productos...</p>;
    if(error) return <p>{error}</p>;

    return (
        <>
            <h2>Productos desde https://mockapi.io</h2>
            <ul>
                {producto.map(producto => (
                    <li key={producto.id}>{producto.nombre}: {producto.precio} pesos</li>
                ))}
            </ul>
        </>
    );
}

export default ProductosConMockAPI;