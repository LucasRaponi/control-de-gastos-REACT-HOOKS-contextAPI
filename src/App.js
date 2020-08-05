import React from 'react';
import { Header } from "./componentes/Header";
import './App.css';
import { Balance } from "./componentes/Balance";
import { IngresosExpensas } from './componentes/IngresosExpensas';
import { ListaTransaccion } from './componentes/ListaTransaccion';
import { AddTransaccion } from './componentes/AddTransaccion';
import { GlobalProvider } from "./context/GlobalState";



function App() {
  return (
    <GlobalProvider>
    <Header />
    

    <div className="container">
      <Balance />
      <IngresosExpensas />
      <ListaTransaccion />
      <AddTransaccion />
    </div>




    </GlobalProvider>
  );
}

export default App;
