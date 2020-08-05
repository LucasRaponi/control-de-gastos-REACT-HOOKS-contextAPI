import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";





const innitialState = {
    transacciones: []
}

export const GlobalContext = createContext(innitialState);

export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, innitialState);


    /* acciones */

function borrarTransaccion (id) {
    dispatch({
        type: "BORRAR_TRANSACCION",
        payload: id
    })
};   

function añadirTransaccion (transaccion) {
    dispatch({
        type: "AÑADIR_TRANSACCION",
        payload: transaccion
    })
};   



/* el value despues del provider indica todos los valores que vamos a proveerles 
a los componentes, osea le vamos a proveer del estado y de las acciones creadas */ 


    return (<GlobalContext.Provider value={{
        transacciones: state.transacciones,
        borrarTransaccion,
        añadirTransaccion
    }}> {children}
    </GlobalContext.Provider>);
}