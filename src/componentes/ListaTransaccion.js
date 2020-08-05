import React, { useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";
import { Transaccion } from "./Transaccion"

 
export const ListaTransaccion = () => {
  const { transacciones } = useContext(GlobalContext);

    return (
        <>
          <h3> Historial </h3>  
          <ul className="list">
            {transacciones.map(transaccion => (<Transaccion key={transaccion.id} 
            transaccion={transaccion}/>))}
            
          </ul>
        </>
    )
}
