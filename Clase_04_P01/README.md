# React Clase 4 Práctica 1
Corresponde a lo visto en la "Clase 4" (Clase teórica, no abarca el After), cuyo video en YouTube lleva el nombre "React | Clase 4 - 18/09/25"

## Temas a ver en esta clase
- Hooks (Permiten gestionar información dentro de un componente)
- Manejo de eventos en React
- Formulario
- Carrito de compras básico

## Temas vistos
- Componentes "de Clase": La forma antigua. Tenían una estructura muy parecida a la clásica de una clase de java, con un método "render()" que contenía el return que -al igual que hoy en día- contenía el jsx.
- Componente "Funcionales": Los que usamos hoy en día. Son posibles gracias a los hooks (?).

- Hooks más usados: useState, useEffect, useContext, useRef, Custom Hooks.
- useState: nos permite manejar el estado del componente de manera local (ese es su scope). Por ejemplo, el estado de un botón puede ser habilitado / deshabiliatado.
- useRef nos permite acceder al DOM.

En relación a los eventos, en JS tenemos el evento onclick, mientras que en JSX tenemos onClick (camel case). Esto es extensivo al resto de los enventos (onClick, onChange y onSumit (para los formularios), onMouseOver y onMouseOut).

Formularios: Sirven para capturar datos del usuario. En REACT los hay controlados y no controlados (se trabajan de forma parecida a como sabíamos hacerlo: con html, css y js; esto se hace accediendo directamente al DOM haciendo uso del hook useRef). Tienen su origen en HTML, no vienen de JS. En el uso que se hacía hasta hora, no controlabamos los formularios, pues esto lo hacía el DOM. Ahora, se controlan por medio de estados (por esta razón necesitabamos ver useState antes).

## Sobre la clase de consulta ("React | Clase de consulta 4 - 23/09/25")

- Ya en la clase de consulta, en el segundo 39:00 estuvo trabajando un ejemplo lindo con props, que incluye mostrar imágnes también. Breve, lo hizo a mil y está completo.

- En el minuto 43:00 volvió a hablar del globals.css.

- En el minuto 45:20 habló de Cloudinary. Para traer imágenes (que te permite guardar previamente) y que luego podés traer con algunos efectos. La pregunta vino porque alguien quería mostrar una imagen de su google drive a partir de su url, pero no, eso no puede hacerse. Cómo hacerlo ? Con Cloudinary, por ejemplo.



