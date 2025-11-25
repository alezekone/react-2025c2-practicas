{/* Se espera que este sea un componente "PRESENTACIONAL", el cual es
    un componente dumb, solo presenta información que recibe a través
    de un prop */}

import CustomButton from "./CustomButton";
import CustomButton2 from "./CustomButton2";
import CustomButton3 from "./CustomButton3";

function Card () {
    return (
        <div>
            {/*Las props se pasan como atributos de html.*/}
            <CustomButton myButtonText="Aceptar" myButtonColor="green" />
            <CustomButton2 myButtonText="Más info" myButtonColor="blue" />
            <CustomButton3 myButtonText="Cancelar" myButtonColor="red" />
        </div>
    )
}

export default Card;

