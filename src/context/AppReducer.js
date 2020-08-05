export default (state, action) => {
    switch (action.type) {
        case "BORRAR_TRANSACCION": return {
        ...state,
        transacciones: state.transacciones.filter(transaccion => transaccion.id !== action.payload)
        }

        case "AÑADIR_TRANSACCION": return {
            ...state,
            transacciones: [action.payload, ...state.transacciones]
        }

        default: return state
    }

}
