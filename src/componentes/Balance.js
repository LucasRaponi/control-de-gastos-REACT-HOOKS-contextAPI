import React, { useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";

 
export const Balance = () => {

const { transacciones } = useContext(GlobalContext)


    const cantidades = transacciones.map(transaccion => transaccion.cantidad);

  const total = cantidades.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <div>
            <h4>
                Mi plata es 
            </h4>

            <h1>
                ${total}
            </h1>
        </div>
    )
}
