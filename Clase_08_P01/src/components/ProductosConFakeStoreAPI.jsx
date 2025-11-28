import { useState, useEffect} from 'react';

const ProductosConFakeStoreAPI = () => {
    const [producto, setProducto] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=> {
        fetch('https://fakestoreapi.com/products')
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
            <h2>Productos desde https://fakestoreapi.com</h2>
            <ul>
                {producto.map(producto => (
                    <li key={producto.id}>
                        {producto.title}: {producto.price} pesos
                        <img src={producto.image}
                             alt={producto.title}
                             height={80}
                             width={80} 
                        />
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ProductosConFakeStoreAPI;