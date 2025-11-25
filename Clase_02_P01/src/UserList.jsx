{/* Se espera que este sea un componente "CONTENEDOR", el cual es
    un componente smart: además de tener un return con jsx, hay un
    manejo que incluye lógica (antes del return). */}

const UserList = () => {
    const usuarios = ['Ana', 'Luis', 'Pedro', 'Marcos'];
    
    {/* Lo siguiente es "válido", pero tiene el problema de que 
        si un nombre de la lista se repite, terminaremos teniendo
        dos list items (li) con idéntico valor del atributo key, y
        nosotro queremos que ese atributo sea único.
    return (
        <ul>
            {usuarios.map(usuario => (
                <li key={usuario}>{usuario}</li>
            ))}
        </ul>
    )
    */}

    return (
        <ul>
            {usuarios.map((usuario, index) => (
                <li key={index}>{usuario}</li>
            ))}
        </ul>
    );
}

export default UserList;
