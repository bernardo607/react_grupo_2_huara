import React from 'react';
import ProductsTable from './ProductsTable';
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
    <ProductsTable />
    </React.Fragment>
  );
}

export default App;
