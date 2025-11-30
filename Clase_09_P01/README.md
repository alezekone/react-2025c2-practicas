# React Clase 9 Práctica 1
Corresponde a lo visto en la "Clase 9" (Clase teórica), cuyo video en YouTube lleva el nombre "React | Clase 9 - 23/10/25"

## Comentarios de la clase anterior
- Nada para mencionar. Siempre recordar hacer el npm install del react-router-dom.

## Temas a ver en esta clase
- Introducción a la autenticación de usuarios.
- Implementación de formulario de login.
- Manejo de autenticación con tokens (simulada).
- Protección de rutas usando Context API para la autenticación.
- Componente Navigate (en <RutaProtegida>) vs. el hook useNavigate (en <Login>). Ambas se importan de react-router-dom. De esto se habla en el minuto 30:00.
- En esta clase autenticamos al usuario Admin (que tiene acceso a, por ejemplo, a la edición de la lista de productos, y en sistemas reales, a la lista de proveedores y otros). En otra clase se autenticará a un usuario, el cual tendrá autorización para ver SU carrito.

## Temas vistos            
- Autenticación para: 
  (1) Seguridad: Evitar accesos no autorizados a secciones privadas de la app. 
  (2) Personalización: permitiría mostrar contenido específico para usuarios autenticados.
  (3) UX: mejora la UX al dirigir a los usuarios a las áreas correctas.
- Implementación del formulario de Login (9:10).
- Evitemos -hasta donde sea posible- guardar información en el FrontEnd, porque queda muy vulnerable a ataques (habló de ataques XSS). Hoy haremos una simulación del token, porque eso debe hacerse en el back end (y escapa al alcance del curso).
- En 51:00 dice que almacenará el Token simulado en LocalStorage para tener persistencia. Dice que hay otras opciones, por ejemplo, cookies. Tambien el SessionStorage, pero se pierde cuando se cierra la sesión. En cambio, LocalStorage guarda de manera local dentro del navegador (habría que ver -digo yo- hasta que punto esto no puede dar lugar a un problema de seguridad).
- IMPORTANTE: CUSTOMS HOOKS -> (56:10) Siempre que veamos "use" como prefijo significa que estamos frente a un hook. LEER MIS COMENTARIOS AL FINAL DE AutoContext.jsx
- En el minuto 58:50 vemos un poco el código del componente Header, en donde aparecen el login, el admin, etc, componentes importantes relacionados con el AuthContext.
- 1:08:10 Protección de rutas usando Context API.
- 1:10:00 Cambiará en App.jsx la parte de la <RutaProtegida> (pues teníamos allí un mecanismo medio manual para setearnos como autenticados) y ahora usará el contexto <AutoContext> en RutaProtegida.jsx.
- 1:23:50 Usa el AuthContext() en Navbar.jsx (en mi caso, Nav.jsx).
- 1:25:50 Usa el AuthContext() en Header.jsx.

- Nota: elimino componentes que ya no tienen relación con el proyecto (Boton.jsx, Boton2.jxs, Clicker.jsx, Login2.jsx, ProductosConMockAPI.jsx, Student.jsx, StudenList.jsx)

## Sobre la clase de consulta ("React | Clase de Consulta 9 - 28/10/25")

- Se habla un poco de Tailwindcss.
- Se conversa sobre el trabajo de Delcy (github.com/DelcyVillalba/Chic-Tech-E-commerce-en-React). Ya el readme.md está muy bueno.
- Un colega recomienda una página con componentes gratis: https://www.hyperui.dev en Tailwind CSS v4.












: