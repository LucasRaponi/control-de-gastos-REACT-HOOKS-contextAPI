import React, { useContext } from 'react'
import { GlobalContext } from "../context/GlobalState"

export const Transaccion = ({ transaccion }) => {

    const { borrarTransaccion } = useContext(GlobalContext)

  


    const sign = transaccion.cantidad < 0 ? '-' : '+';

    return (
        <li className={transaccion.cantidad < 0 ? "minus" : "plus"} /* en casa de que 
                                                                    la cantidad de la transaccion
                                                                    sea menor a 0 (osea negativo)
                                                                    declarame la clase como "minus"
                                                                    osea roja, de lo contrario que sea
                                                                    plus (verde) */> 
                {transaccion.texto} <span> {sign}${Math.abs(transaccion.cantidad)} 
                </span> 
                
                <button onClick={() => borrarTransaccion(transaccion.id)} 
                className="delete-btn"> X </button>

            </li>
    )
}


