# React Clase 8 Práctica 1
Corresponde a lo visto en la "Clase 8" (Clase teórica), cuyo video en YouTube lleva el nombre "React | Clase 7 - 16/10/25"

## Comentarios de la clase anterior
- Nada para mencionar.

## Temas a ver en esta clase
- Intro a Context API.
- Separó Productos y Carrito: el componente <Inicio> hasta ahora mostraba <Productos> y <Carrito>, y estaban muy relacionados. Ahora los separa, preparando el terreno para llevar Carrito fuera de <Inicio>. Recordemos que <Productos> será público, pero <Carrito> debe ser manejado por cada usuario.
- Despliegue en Vercel.

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

- En 40:00 menciona que toda la lógica que pusimos en CarritoContext la usaremos en los componentes Carrito y Product. Entonces en esos componentes haremos uso de useContext, llevando las cosas que necesitamos, por ejemplo, a Carrito llevaremos "carrito" y "eliminarDelCarrito" (antes estas cosas se las hacíamos llegar a Carrito (y también a Product) a través de las props).

- A partir de haber visto el "import { Link } from 'react-router-dom", noto que me había olvidado de ir a la visa de detalle del producto (a renderizar con el componente <ProductoDetalle>). Efectivamente, en el segundo 48:52 confirmo el Link para este propósito.

- En 53:10 hizo un resumen PERFECTO de todo lo que hizo respecto al contexto. Verdaderamente excelente.

- 1:03:30 menciona que se puede tener más de 1 contexto, aunque sería raro tener muchos. Si el proyecto es grande y se necesitan "muchos" contextos, deberán utilizarse otras herramientas tales como Redux.

- Despliegue en Vercel -> 1:09:22.

- Pasos para el despligue:
  1.- Revisar que funcione bien en local.
  2.- Verificar que package.json contiene todas las dependencias que necesitamos.
  3.- Tener el archivo .env para credenciales seguras.
  4.- Realizar el commit final con git.
  5.- Logearse en Vercel con la cuenta de GitHub (después de todo, Vercel necesitará acceder a nuestro repo). Curiosidad: en 1:11:50 el profe muestra sus proyectos -varios- desplegados en Vercel.
  6.- Agregar nueva proyecto, y bueno, seguir las instrucciones.


## Sobre la clase de consulta ("React | Clase de Consulta 8 - 21/10/25")

- En el segundo 16:54, en el chat, alguien responde a una pregunta soble excel/google sheets, y comenta que se pueden consumir (las google spread sheets) para luego, por ejemplo, renderizarlas. Menciona que hay varios tutoriales en YouTube (nunca se me ocurrió buscar el tema). El profe menciona que sí, que puede usarse un excel a modo de base de base de datos (Interesante porque es lo que hace Google Appsheet: te permite armar un front y una mobile app con facilidad para consumir y mostrar datos de una spreadsheet). Y que otra alternativa es hacerse un backend o usar un servicio como Firestore o Supabase (este último usa PostgreSQL).
- En 21:15 mencionan lo bueno de usar Mongo, que te dá una BD en la nube gratis (Atlas). El profe destaca que lo lindo de Mongo es que es básicamente un JSON (y luego aclara que técnicamente es un BSON, hay que investigarlo).
- 23:45 el profe analiza como deployar en GitHub Pages, teniendo presente que este es un proyecto armado con Vite.
- IMPORTANTE: En 26:49 Vercel muestra un warning avisando que el usuario (el profe) tiene 7 proyectos que usan Node.js 18 o anterior, y que nuevos builds sobre esos proyectos fallarán a partir del 31/8/2025. Así que hay que mantener todo actualizado !!! Esto es importante cuando se habla con clientes, para explicarles que el mantenimiento tiene un costo !!!
- 45:06 Un flaco menciona en el chat que al desplegar no le tomaba los estilos. Lo solucionó interviniendo en vite.config.js.-
- 48:35 el profe muestra un poquito más de Tailwind y lo piola que es al ofrecer componentes ya armados, y que -seleccionando Code (en Preview/Code) y React (en HTML/React/Vue) arriba a la derecha- tenés el código listo para copiar y pegar. ESTO ES PARA MIRARLO CON ATENCIÓN: tailwindcss.com/plus/ui-blocks/ecommerce/components/category-previews (ojo, en la página de Tailwind hay algunos gratis y otros pagos, pero también hay otros lugares donde se pu)
-INTERSANTE: en la página anterior (Tailwind) te ofrece (abajo a la izquierda) un curso gratis de 5 días para dominar el tema de las UI.
- IMPORTANTE: Para usar la documentación, empezar acá: [tailwindcss.com/docs/display](https://tailwindcss.com/docs/display) explica TODO, con ejemplos y todo. Muestra a qué clases de css corresponde cada clase de tailwind.








: