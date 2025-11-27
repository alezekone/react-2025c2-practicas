# React Clase 6 Práctica 1
Corresponde a lo visto en la "Clase 6" (Clase teórica), cuyo video en YouTube lleva el nombre "React | Clase 6 - 02/10/25"

## Comentarios de la clase anterior
- En la clase pasada se usó https://mockapi.io pues bien, resulta que no podíamos traer de allí imágenes relacionadas. Para solucionar esto podemos utilizar https://fakestoreapi.com/ la cual brinda datos más realistas, incluyendo imágenes de verdad relacionadas con nuestro interés.

## Temas a ver en esta clase
- Rutas estáticas (con React Router)
- Rutas dinámicas -> usará otro hook: useParams().
- Rutas protegidas se verá la próxima clase.
- Instalación de Tailwind (en la clase de consulta).

## Temas vistos
- React Router DOM es una biblioteca de React (creada por la comunidad) que nos permite manejar rutas. Hay que instalarla.
- React es client-side rendering.
- React Router permite la navegación entre vistas sin recargar la página, mejorando la experiencia del usuario.
- Instalación: npm install react-router-dom
- Luego tenemos que envolver la aplicación con el <BrowserRouter></BrowserRouter>. Esto lo podemos hacer en App.jsx o en main.jsx. En este caso, la envolveremos en main.jsx.
- Interesante que el segundo 9:45 habla de hacer una suerte de alias, haciendo el import así:
    import { BrowserRouter as Router }
- Si hacemos lo del alias, deberemos usar <Router><Router/> para envolver la app.
- Rutas estáticas: como siempre, son las que no dependen de datos dinámicos.
- 1.- Usamos <Routes> agrupando las rutas, asegurando que solo una coincida y se renderice. 
- 2.- Luego está <Route>, que tiene dos atributos: path y element.
- En este ejemplo, crearemos 2 rutas: Inicio y Contacto.
- Para la navegación, react-router-dom trabaja con la etiqueta Link. Cuando se renderiza en html en el browser, no veremos la etiqueta <link></link> sino <a></a>.
- Observar que sigue siendo una SPA: solo renderiza el componente que estoy llamando, y no toda la página.
- 1:01:30 habla de un nuevo hook: useParams() para poder capturar lo que sería el :id del browser al usar Rutas Dinámicas.
- Dicen -las diapositivas- que las rutas dinámicas "mejoran la indexación de páginas individuales en motores de búsqueda" (SEO).

## Sobre la clase de consulta ("React | Clase de Consulta 6 Pre-entrega - 07/09/25")

- En el segundo 16:35 muestra cómo hace el filter para eliminar del array de productos:    
```jsx
const eliminarDelCarrito = (indiceAEliminar) => {
    setCarrito(carrito.filter((_, indice) => indice !== indiceAEliminar));
};

```
- Esta parte -desde el segundo 15:00 o antes- es interesante y SUPER IMPORTANTE, porque acá habla del componente Inicio que ya no está en la carpeta "components", sino en la carpeta "pages", de la cual nunca antes se había hablado, jaja. En el componenete Inicio se llamará a dos componentes:
1.- Llama al componente Productos con parámetros como prop: la *función* agregarAlCarrito.
2.- Llama al componente Carrito con dos parámetros como props: el *array* carrito y la *función* eliminarDelCarrito.
- Minuto 26:00 habla de todo el lío de pasaje por parámetros (props - argumentos). Super-importante. Esto hasta el minuto 38:00 hay que volver a escucharlo. Todo esto muestra la relación entre los componentes Productos.jsx, Inicio.jsx y Carrito.jsx.-
- Minuto 56:10 muestra cómo instalar Tailwind.
- Más tarde explicó también como subir el proyecto a GitHub. Es obvio, pero fue muy práctico, se nota la experiencia.






