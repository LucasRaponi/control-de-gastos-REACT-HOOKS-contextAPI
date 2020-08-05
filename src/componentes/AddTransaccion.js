import React, {useState, useContext} from 'react'
import { GlobalContext } from "../context/GlobalState";

export const AddTransaccion = () => {

const [texto, setTexto] = useState('');
const [cantidad, setCantidad] = useState(0);
const { añadirTransaccion } = useContext(GlobalContext)

const onSubmit = e => {
  e.preventDefault();

  const nuevaTransaccion = {
    id: Math.floor(Math.random() * 100000000), /* obtiene un id random para el objeto, no es una forma 
                                                eficiente para que no se repitan los ids pero para
                                                  una aplicacion pequeña como esta funciona bien */
    texto,
    cantidad: + cantidad
  }

  añadirTransaccion(nuevaTransaccion);

}

    return (
        <>
            <h3>Añadir nueva transacción</h3>
      <form onSubmit={onSubmit} >
        <div className="form-control">
          <label htmlFor="text">Razón</label>
          <input type="text" value={texto} onChange={(e) =>setTexto(e.target.value) } placeholder="Razón del gasto / ingreso" />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Cantidad <br />
            (negativo - gasto, positivo - ingreso)</label
          >
          <input type="number" value={cantidad} onChange={(e) =>setCantidad(e.target.value) } placeholder="Cantidad" />
        </div>
        <button className="btn">Añadir transacción</button>
      </form>
        </>
    )
}
