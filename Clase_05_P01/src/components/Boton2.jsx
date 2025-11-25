import { useState } from "react";

const Boton = () => {

    const [contador, setContador] = useState(0);

    const handleClick = () => {
        setContador(contador + 1);
    }

    return (
        <>
            <h3>Contador = {contador}</h3>
            <button onClick={handleClick}>Click me!</button>
        </>
    );
}


export default Boton;