import { useState } from 'react';

const FormularioProducto = ({ onAgregar }) => {

    const [errores, setErrores] = useState({});
    const [producto, setProducto] = useState({
        nombre: '',
        precio: '',
        imagen: '',
        descripcion: ''
    });

    const handleChange = (e) => {
        // const {name, value} = evento.target;  // <-- Desestructuración.
        // setProducto({...producto, [name]: value});
        setProducto({...producto, [e.target.name]: e.target.value});
    }

    const validarFormulario = () => {
        const nuevosErrores = {};

        if (!producto.nombre.trim()) 
            nuevosErrores.nombre = 'El nombre es obligatorio.';

        if (!producto.precio || producto.precio < 0)
            nuevosErrores.precio = 'El precio debe ser mayor a cero.';

        if (!producto.imagen.trim() || producto.imagen.length < 6)
            nuevosErrores.imagen = 'Se requiere URL de imagnen válida.';

        if (!producto.descripcion.trim() || producto.descripcion.length < 10)
            nuevosErrores.descripcion = 'La descripción debe tener al menos 10 caracteres.';

        setErrores(nuevosErrores);
        return Object.keys(nuevosErrores).length === 0;
        // Si no hay erores, entonces retorna true.
    }

    const handleSubmit = (evento) => {
        evento.preventDefault();
        if (!validarFormulario()) // Si no hay errores, validarFormulario() retorna true.
            return;           // =>  Si no hay errores, !validarFormulario() es false.
                              // =>  Si no hay errores, no hace el return y por tanto,
                              // continúa la ejecución de la función.

        // Si no hay errores, entonces creamos el
        // productoAEnviar:
        const productoAEnviar = { 
            // Me traigo el producto con el spread operator.
            // Luego, sobreescribo el precio para convertirlo a numero (es decir, modifico el tipo).
            // Puntualmente, en float (aunque no exite tal tipo, por eso digo en number).
            ...producto, precio: parseFloat(producto.precio)
        }

        onAgregar(productoAEnviar); /// ***** <-- Ver Admin.jsx ***** ///
        // Limpiamos el formulario
        setProducto({
            nombre: '',
            precio: '', 
            imagen: '',
            descripcion: ''
        });
        // Limpiamos los errores que puiera haber.
        setErrores({});
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <h2>Agregar Producto</h2>
                {/*---------------------------------------------------*/}
                <div>
                    <label>Nombre</label>
                    <br />
                    <input type='text'
                           name='nombre'
                           value={producto.nombre}
                           onChange={handleChange}
                    />
                    {errores.nombre && <p style={{color:'red'}}>{errores.nombre}</p>}
                </div>
                {/*---------------------------------------------------*/}
                <div>
                    <label>Precio</label>
                    <br />
                    <input type='number'
                           name='precio'
                           value={producto.precio}
                           onChange={handleChange}
                           min={0}       
                           step='any'    
                    />
                    {errores.precio && <p style={{color:'red'}}>{errores.precio}</p>}
                </div>
                {/* min={0} -> Validar: minimo = 0 */}
                {/* step='any' -> Para poder utilizar decimales. */}

                {/*---------------------------------------------------*/}
                <div>
                    <label>Imagen</label>
                    <br />
                    <input type='text'
                           name='imagen'
                           value={producto.imagen}
                           onChange={handleChange}
                    />
                    {errores.imagen && <p style={{color:'red'}}>{errores.imagen}</p>}
                </div>
                {/*---------------------------------------------------*/}
                <div>
                    <label>Descripción</label>
                    <br />
                    <textarea
                        name='descripcion'
                        value={producto.descripcion}
                        onChange={handleChange}
                    />
                    {errores.descripcion && <p style={{color:'red'}}>{errores.descripcion}</p>}
                </div>
                {/*---------------------------------------------------*/}
                <button type='submit'>Agregar</button>
            </form>
        </>
    );

}

export default FormularioProducto;  
     
