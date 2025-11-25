{/* Acá solo quiero mostrar una forma de gestionar el evento onClick del botón. */}

function CustomButton3(props) {
    
    const handleClick = () => {
        alert(`Botón ${props.myButtonText} clickeado`);
    };
    const estilo = {background: props.myButtonColor, color:'white', padding:'10px', border:'none'};
    
    return <button style={estilo} onClick={handleClick}>{props.myButtonText}</button>;
}

export default CustomButton3;