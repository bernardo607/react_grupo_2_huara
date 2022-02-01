import React from 'react';
import Test from './Test';
import Header from './Header';
import BarraLateral from './BarraLateral';
import ContentProducts from './ContentProducts';
import UltimoUser from './UltimoUser';
import PanelCategorias from './PanelCategorias';
//import NotFound from './NotFound';
//import { Route, BrowserRouter } from 'react-router-dom'


function App() {
  return (
    <React.Fragment>
    <Header />
    <BarraLateral />
    <ContentProducts />
    <UltimoUser />
    <PanelCategorias />
    <Test />
    </React.Fragment>
  );
}

export default App;
