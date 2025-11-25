const Student = ({datos}) => {
    const {nombre, edad} = datos; /* Destructuring*/
    return (
        <div>
            <h3>Nombre: {nombre}, Edad: {edad}</h3>
        </div>
    );

    
}

export default Student;