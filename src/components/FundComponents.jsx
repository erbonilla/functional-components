import { useState } from "react";

function FunctionalComponents() {
    const [value, setValue] = useState(0);

    return (
        <div>Componente Funcional
            <p>
                <button onClick={ () => setValue(value -1) }>-</button> 
                {value}        
                <button onClick={ () => setValue(value + 1) }>+</button>
            </p>
        </div>
    );
}

export default FunctionalComponents;