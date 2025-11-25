{/* Otra forma de trabajar las props: considerándolas un objeto.
    Comparar los componente CustomButton vs CustomButton */}

function CustomButton2(props) {
    const estilo = {background: props.myButtonColor, color:'white', padding:'10px', border:'none'};
    return <button style={estilo}>{props.myButtonText}</button>;
}

export default CustomButton2;
