# React Clase 8 Práctica 1
Corresponde a lo visto en la "Clase 8" (Clase teórica), cuyo video en YouTube lleva el nombre "React | Clase 7 - 16/10/25"

## Comentarios de la clase anterior
- Nada para mencionar.

## Temas a ver en esta clase
- Intro a Context API.

## Temas vistos
- Debemos verificar que tenemos el react-router-dom instalado (o instalarlo, obvio).
- Context API permite manejar estados globales, sin pasar props manualmente entre componentes. Nos permite compartir datos entre componentes sin relación en el árbol de la aplicación.
- Cuándo usar Context API ? 
  1.- Acceso múltipe: Cuando tenemos varios componentes que necesitan acceder al mismo estado.
  2.- Evitar Prop Drilling: Para no pasar props a través de múltiples niveles de componentes.
  3.- Estados Globales: Ideal para manejar autenticación o carritos de compras.

- Si queremos manejar estados globales más complejos, existen aplicaciones externas muy utilizadas, como Redux (que además tiene Redux Toolkit) y otra es Zustand.

- Acá se crear una carpeta "context", al mismo nivel de la carpeta "components". Allí se pondrán los componentes relacionados. Ponemos aquí el estado y las funciones que manejan el carrito. Lo que antes estaba en el componente Inicio, ahora lo pasamos al componente CarritoContext.

- En CarritoContext pondremos la lógica del negocio, en este caso la lógica de carrito.

- Se exportan:
  1.- El CarritoContext, y
  2.- La función principal, que es CarritoProvider (que siempre lleva a {children}, pues yo tendré que renderizar la data que traiga ese proveedor).

- En el return tendremos el provider junto con ciertas propiedas -el value- que van a contener la "data y funciones" que vamos a necesitar manipular en otros componentes. (minuto 19:00) En value tendremos:
  1.- carrito: pues yo necesito manejar la data que hay en carrito (que sale del useState).
  2.- agregarAlCarrito: también necesito esta funcion para llamarla en cualquier parte de mi aplicación (ojo, Joaco la llamó agregarCarrito, sin el "Al").

- Luego, en mail.jsx, tal como hicimos con <BrowserRouter> que tuvimos que "envolver" a la aplicación para poder utilizar las rutas en cualquier parte de la aplicación, tendremos que hacer lo mismo con <CarritoProvider> para después poder utilizar esos datos en cualquier parte de mi aplicación.

- Utilizaremos <BrowserRouter> como el padre y <CarritoProvider> como el hijo, porque otro modo podríamos a tener problemas al generar enlaces.

- Nota: en el minuto 26:00 muestra al componente <Carrito> antes de intervenir <CarritoContext>.
- Nota: En 27:30 saca de <Inicio> las cosas que allí tenía para manejar al componente Carrito (e estado de carrito (con useState) y las funciones agregarAlCarrito y eliminarDelCarrito), que ahora quedarán dentro del contexto. Hasta este momento, la función eliminarDelCarrito solo estaba en Inicio, y acá la mueve a CarritoContext.jsx. Personalmente yo, no tenía Inicio.jsx con este contenido, así que lo hago directo en CarritoContext.jsx.

- En 33:10 dice que CarritoContext NO es un componente. Supongo que se refiere a la variable CarritoContext que tiene el mismo nombre del archivo CarritoContext.jsx. Dice que es un objeto, que yo necesito inicializar, y que yo lo estoy como activado con la función createContext. Dice que no es un componente, dice que es un contexto. Es context api. Y lo guardo dentro de la variable CarritoContext para después utilizarla donde la necesite.

- En 38:50 menciona la utilización de la función useContext (que hay que importarla previamente). Allí, en una diapositiva que muestra el componente Carrito, hace el import de useContext y luego lo utiliza al hacer: const {carrito, vaciarCarrito} = useContext(CarritoContext);

- En 40:00 menciona que toda la lógica que pusimos en CarritoContext la usaremos en los componentes Carrito y Product. Entonces en esos componentes haremos el useContext, llevando las cosas que necesitamos, por ejemplo, a Carrito llevaremos "carrito" y "eliminarDelCarrito".

## Sobre la clase de consulta ("React | Clase de Consulta 8 - 21/10/25")

- En el segundo xx:xx:xx....







