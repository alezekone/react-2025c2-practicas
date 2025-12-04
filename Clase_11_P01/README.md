# React Clase 11 Práctica 1
Corresponde a lo visto en la "Clase 11" (Clase teórica), cuyo video en YouTube lleva el nombre "React | Clase 11 - 06/11/25"

## Comentarios de la clase anterior
- Nada para mencionar. Siempre recordar hacer el npm install del react-router-dom.

## Temas a ver en esta clase
- Leer y renderizar productos almacenados en MockAPI.
- Implementar la funcionalidad de edición de productos c/formularios controlados.
- Permitir la eliminación de productos con confirmación del usuario.
- Validar los datos en el formulario de edición.

- Nota: en esta clase crea/agrega dos componentes, a saber: EditarProducto.jsx y GestionProducto.jsx (además, creo GestionProducto.module.css).

## Temas vistos            
- Minuto 4:50 -> En resumen, la lectura de productos (ya vista mucho antes) consiste en:
  (1) Configurar useEffect (para inicializar el estado con datos de la API).
  (2) Realizar el fetch (obtener productos de la API).
  (3) Actualizar estado (almacenar productos obtenidos en el estado del componente).
- Minuto 15:40 -> Muestra dos ventanas, side by side, con los códigos de Productos.jsx y de GestionProducto.jsx. En la primera se manejan promesas con ".then y .catch" y en la segunda con "asycn y await". Lo intersante del caso es que muestra claramente que, en el segundo caso, todo va dentro de un "try - catch" !!! La forma del ".then y .catch" ya tiene el try/catch embebido. El profe dice, además, que con "async / await" seguís trabajando con funciones, lo cual es más legible que el ".then/.catch"
- Minuto 20:50 -> Actualización de productos - > Formulario de Edición:
  (1) Utizar useState para manejar los datos del formulario.
  (2) LLenar el formulario con los datos existentes del producto.
  (3) Validación de datos actualizados antes de su envío.
- Minuto 25:10 -> Muestra las validaciones que hizo en FormProducto.jsx (FormularioProducto.jsx en mi caso) y adelanta que no lo hará tan completo en GestiónProducto.jsx, pero que así de completas deberían ser.
- OJO-OJO: (Minuto 49:47) Sacó de Admin.jsx (y metió en GestionProducto.jsx) la parte de agregar producto. Ahora Admin quedó mucho más limpio.
- Minuto 51:35 comienza a explicar cómo trabaja <GestionProducto.jsx>
- Minuto 1:17:00 muestra la parte del return de <GestionProducto.jsx>

## Sobre la clase de consulta ("React | Clase 11 de Consulta - 11/11/25")
- La clase de consulta de hoy...todo blabla la primera parte de la clase.

- 43:01 da una charla sobre los eventos onSubmit y onChange. La IA le generó un muy buen resumen, que resultó distintó del que me generó a mi. Lo claro del asunto, que a esta parte debe resultar obvio, es que el evento simplemente se genera al presionarse un button con type="submit". Podemos encontrar el ejemplo más simple posible en https://developer.mozilla.org/es/docs/Web/API/HTMLFormElement/submit_event 

- Delcy -una alumna- recomienda https://argentinaprograma.com/ que está llevada por un argentino que vive en Alemania y tiene cursos de JS muy buenos. Otro que recomienda es theodinproject.com/lessons

- 48:50 El profe menciona que veremos React Helmet para SEO y luego agrega que si queremos un buen SEO no trabajemos con React, debemos trabajar con Next o con Astro.

## PENDIENTES



