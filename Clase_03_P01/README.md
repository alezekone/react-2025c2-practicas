# React Clase 3 Práctica 1
Corresponde a lo visto en la "Clase 3" (Clase teórica, no abarca el After)

## Temas vistos
- Componentes fundamentales: Header, Main, Footer, Nav y Gallery
- Tema props, listas y maps: un nuevo ejemplo (Ver componentes "Student" y "StudentList"...los pongo en inglés para que me queden juntos en el explorer, el cual los ordena alfabéticamente).
- En el segundo 1:41:40 de "React | Clase 3 - 12/09/25" habla brevemente de CSS Modules (a modo de ejemplo: Header.module.css). Si declaro una clase con el mismo nombre en dos componentes, puede haber conflictos. Gracias a los css modules, el nombre de la clase se modifica (automáticamente) para cada componente.
- En el segundo 1:46:00 habló del archivo globals.css, para los estilos que afectarán a todos los componentes. Sin embargo, todavía no lo usó.

## Sobre la clase de consulta

- Ya en la clase "React | Clase de consulta 3 - 16/09/25", en el segundo 20:12 comenta que React se creó para SPA, entonces surgió una forma de mostrar varías página (). El que se creó de entrada para múltiples páginas es Next.js, dice. A esto le llama paginación.

- El body de html se renderiza con el main, y para ponerlo todo en negro lo haríamos con CSS desde index.css.

- En el minuto 54:00 se presentó la siguiente variante, la cual está tomada de "https//es.react.dev/learn":
        "Dentro de tu componente, utiliza la función map() para transformar
         el arreglo de productos en un arreglo de elementos <li>:

        ```jsx
        // Observemos que el resultado del map(), que aquí
        // es un trozo de html, se termina guardando en la
        // variable listItems.
        const listItems = productos.map( =>
            <li key={product.id}>
                {product.title}
            </li>
        );
        
        return (
            <ul>{listItems}</li>
        );
        ```



        
