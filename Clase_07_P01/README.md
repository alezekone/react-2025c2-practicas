# React Clase 7 Práctica 1
Corresponde a lo visto en la "Clase 7" (Clase teórica), cuyo video en YouTube lleva el nombre "React | Clase 7 - 09/10/25"

## Comentarios de la clase anterior
- Nada para mencionar.

## Temas a ver en esta clase
- Rutas protegidas.

## Temas vistos
- Debemos verificar que tenemos el react-router-dom instalado (o instalarlo, obvio).
- Acá aparece el componente Navigate, importado de react-router-dom. 
- Rutas sensibles a proteger: Carrito y Admin.
- Con la definición de la ruta protegida en App.jsx aprovecho para lo siguiente:
  vemos al llamar al componente <RutaProtegida> pasamos isAuthenticated como *atributo* (es decir que pasa como *prop*) y el componente <Admin> queda como *valor* (anidado) de <RutaProtegida> (es decir que pasa como *children*). Es un excelente ejemplo en el que hay props y children juntos, lo que nos permite fijar en nuestra memoria la diferencia entre ambos.
  En el segundo 32:45 lo explica "en detalle", pero mi explicación anterior es más clara. Sin embargo, usa un ejemplo muy piola de pasaje de información a una Card que puede ser muy útil. Vale la pena mencionar que children es parte del objeto prop. Parece que *props* lleva entonces tanto los atributos como los nodos hijos.
- Diferencia entre los componentes Link y Navigate: el Link hay que clickearlo, mientras que el Navigate redirecciona sin intervención del usuario.
- Navigate tiene un atributo *replace*. Para qué sirve ? Bueno, supongamos en la barra del navegador estamos en misitio.com/contacto. Escribimos misitio.com/admin y no estamos autenticados, entonces nos rebota y nos redirecciona a login. Si ahora, en el navegador, ponemos flechita hacia atrás, debería mandarnos a misitio.com/admin (porque es de donde veníamos). Esto, al no estar autenticados, nos redireccionaría a login una vez más. Sin embargo, gracias al replace, la flechita hacia atrás nos conducirá a misitio.com/contacto, que es de donde venía originalmente.
- *replace* changes the navigation behavior from a "push" action to a "replace" action within the browser's history stack. So, what *replace* does is:
   1.- Replaces the current history entry: Instead of adding a new entry to the browser's history stack (which is the default behavior when navigating), replace overwrites the current entry.
   2.- Impact on the back button: This means that if a user navigates to a new page using replace, and then presses the browser's back button, they will not return to the page they just left. Instead, they will go to the page before the replaced one in the history.
- Hacia el segundo 52:00 hizo una implementación simplificada para "loggearse" en el sistema -para poder probar esto de la Admin como ruta protegida- que está muy muy piola. Obviamente, yo lo incorporé en el presente código.
- En el TP deben ponerse como rutas protegidas tanto Admin como Carrito. Observar que a Carrito debe poder acceder solo el usuario propietario de cada carrito, mientras que a Admin solo debe poder acceder el administrador del sistema.
- En el minuto 1:22:00 habla con un flaco sobre librerías de íconos. Mencionó React Icon.

## Sobre la clase de consulta ("React | Clase de Consulta 7 Pre-entrega - 14/10/25")

- En el segundo 6:35 de estas clase de consulta comienza a hablar nuevamente sobre cómo desde Inicio muestra Productos y Carrito, enviándoles componentes, arrays y funciones como props. Pero en esta oportunidad casi no habló en profundidad del tema. Hay que verlo en la clase de consulta anterior (Creo. Chequearlo en el readme de la clase anterior).
- En el segundo 38:40 explica esto que ya explicó en el 6:35, pero ahora de verdad. Ahora sí lo explica bien. Excelente !!! Los explicó hasta el segundo 53:00.








