# React Clase 5 Práctica 1
Corresponde a lo visto en la "Clase 5" (Clase teórica), cuyo video en YouTube lleva el nombre "React | Clase 5 - 25/09/25"

## Temas a ver en esta clase
- Hooks useEffect
- Peticiones a APIs: mapas (maps, geocoding, OpenStreetMap,etc), pagos (Stripe, PayPal, MercadoPago, etc), autenticación con RRSS (RRSS = Redes Sociales: APIs de Google, X, GitHub, Discord, etc). Para acceder a APIs como la de Google tenés que ir a la página para developers y registrate, según parece. Podríamos usar "fetch()" (que es la API nativa del navegador), o Axios, la cual es más completa pero requiere instalación.
- Usaremos a la API de MockAPI (https://mockapi.io). Hay que registrarse, pero está buenísima. Lo explicó en el segundo 1:20:20.

## Temas vistos
- El hook useEffect sirve para manejar "efectos secundarios". Los "efectos secundarios" son operaciones que ocurren fuera del flujo principal del renderizado de un componente. Ejemplos de estas "operaciones" o "efectos secundarios" podrían ser: obtener datos de APIs, manipular el DOM, establecer suscripciones o establecer temporizadores. 
- En cualquier caso, la idea general es que estos "efectos secundarios" permiten interactuar con el mundo exterior (por ejemplo, el consumo de una API no es propio del componente, luego sí lo renderizaremos dentro de nuestro componente) y manejar operaciones asíncronas.
- Casos comunes de uso de useEffect: Obtener datos de una API, actualizar el título de la página (ejemplo del profe con el componente "Clicker", en donde está manipulando el DOM), temporizadores (estabelecimiento y limpieza).
- El profe de otro curso (Mati Campos) propuso los siguientes casos:

    1.- Caso 1: APIs -> el efecto secundario lo hace un <kbd>fetch()</kbd> -> Se cancela con <kbd>AbortController</kbd>
    
    2.- Caso 2: Temporizador -> el efecto secundario lo hace un <kbd>setInterval()</kbd> -> Se cancela con <kbd>clearInterval()</kbd>
    
    3.- Caso 3: Evento globar -> el efecto secundario lo hace un <kbd>addEventListener()</kbd> -> Se cancela con <kbd>removeEventListener()</kbd>
    
    4.- Caso 4: WebSocket -> el efecto secundario lo hace un <kbd>socket.onmessage =</kbd> -> Se cancela con <kbd>socket.close()</kbd>

- La función useEffect recibe una función callback y un array -opcional- de argumentos.
- Según parece, la función useEffect se puede escribir de dos maneras:
    1.- 
    ```javascript
        useEffect(effectFunction, dependencies);
    ```
    2.- 
    ```javascript
        useEffect(() => {
            // Código del efecto.
            }, [dependencies]); 
            // Array con lista de dependencias
    ```
- La función useEffect cubre las 3 etapas del ciclo de vida:
    + 1.- Mount: le pasamos la callback function que se supone debe ejecutarse -solo una vez- en el montaje. En este caso, pasamos un array vacío como segundo argumento.
    + 2.- Update: le pasamos también la callback function, pero a continuación tenemos dos opciones:
    - (a) No le pasamos segundo argumento, en cuyo caso la callback es ejecutada en cada update.
    - (b) Le pasamos un array, en cuyo caso la callback se ejecutará solo si una de las dependencias especificadas en el array ha cambiado.
    + 3.- Unmount: podemos responder al unhooking de nuestro componente del "component tree" retornando nuevamente una función desde la callback function. Esta función es ejecutada luego de la remoción del componente.


## Sobre la clase de consulta ("React | Clase de Consulta 5 - 30/09/25")

- En el minuto 43:00 volvió a hablar de...






