{/* Se espera que este sea un componente "PRESENTACIONAL", el cual es
    un componente dumb, solo presenta información que recibe a través
    de un prop. En este caso, el componente CustomButton recibirá mediante
    props el texto del botón y también su background color. */}

{/* Observar que esta -con los argumentos separados por coma y con todo
    el conjunto de estos entre llaves- es la forma en que se DEFINE las
    props que el componente funcional CustomButto utilizará. En el ejemplo
    del componente Card.jsx veremos cómo se pasan esos parámetros al componente.*/}

function CustomButton ({myButtonText, myButtonColor}) {
    const estilo = {background: myButtonColor, color:'white', padding:'10px', border:'none'};
    return <button style={estilo}>{myButtonText}</button>;
}

export default CustomButton;

