import React, { useContext } from 'react'
import { GlobalContext } from "../context/GlobalState";


export const IngresosExpensas = () => {

    const { transacciones } = useContext(GlobalContext);
    const cantidades = transacciones.map(transaccion => transaccion.cantidad);


    const ingreso = cantidades
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

    const gasto = (
        cantidades.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
        -1
      ).toFixed(2);

    return (
        <div className="inc-exp-container">


            <div>
                <h4>
                    Ingresos
                </h4>
                <p className="money plus"> 
                    ${ingreso}
                </p>
            </div>


            <div>
        <h4>
            Gastos
        </h4>
        <p className="money minus">
                     ${gasto}
        </p>
            </div>




        </div>
    )
}
