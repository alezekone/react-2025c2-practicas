# React Clase 12 Práctica 1
Corresponde a lo visto en la "Clase 12" (Clase teórica), cuyo video en YouTube lleva el nombre "React | Clase 12 - 13/11/25"

## Comentarios de la clase anterior
- Nada para mencionar. Siempre recordar hacer el npm install del react-router-dom.

## Temas a ver en esta clase
- Implementación del CRUD completo. Esto implica:
  (1) Hacer el "Contexto de Producto".
  (2) Conectar el formulario agregar/editar productos con el estado global.
  (3) Validación de formularios y manejo de errores.

## Temas vistos            
- Minuto 18:25 -> Context API para Estado Global
  (1) Crear Contexto: configurar ProductsProvider para almacenar el estado global de productos.
  (2) Integrar en la App: envolver la aplicación con ProductsProvider para acceso al estado global.
  (3) Conectar Componentes: usar el contexto en FormularioEdicion y ListaProductos para gestionar productos.

- 19:55 El <ProductsProvider /> envolverá la <App />, entonces la <App /> pasará a ser su children y así se le podrán utilizar los datos a toda la <App />.

- 20:35 -> Formulario (será el mismo para editar y agregar) conectado al estado global
  (1) Importaciones: useContext y ProductsContext.
  (2) Estado local: useState para manejar el estado del formulario.
  (3) Contexto global: acceder a funciones globales con useContext.

- 25:50 Arranca con el código.

- 30:00 Unificaremos el formulario para que agregue o edite. El profe hizo el formulario como ventana modal.
- 41:35 Agregamos en main.jsx el Provider del Contexto.
- A partir de la utilización del contexto <ProductsContext /> habrá un gran rediseño de muchos de los componentes, pues cosas tales como la API, el estado de producto (entre otros) y las llamadas a la API, quedarán centralizados en ProductsContext.jsx.
- 52:00 Veremos ahora el tema del formulario, empezando por el que se encuentra en <GestionProducto />. Veremos que hay muchos más cambios en GestionProducto.jsx producto del uso del contexto de producto.
- 55:15 Acá muestra las clases para el CSS o lo que use para dar estilo al formulario.
- 01:00:00 Explica que el modal se hace con CSS y que le pidió a la IA que lo haga. Esto, en el código del profe, estaría en FormProducto.module.css (porque él llamó FormProducto.jsx al componente).
- 01:11:40 Muestra como quedó el formulario de producto (FormularioProducto.jsx), que ahora unifica agregar y editar, y que gracias al CSS ahora se muestra como modal.



## Sobre la clase de consulta ("React | Clase 12 de Consulta - 18/11/25")
- La clase de consulta de hoy...

## PENDIENTES


