import { useState } from "react";

const Boton = () => {

    const [contador, setContador] = useState(0);

    return (
        <>
            <h3>Contador = {contador}</h3>

            <button onClick={() => setContador(contador + 1)}>Click me!</button>
        </>
    );
}


export default Boton;