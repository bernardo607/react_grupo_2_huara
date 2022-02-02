import React from 'react';
import ProductsTable from './ProductsTable';
import Header from './Header';
import BarraLateral from './BarraLateral';
import ContentProducts from './ContentProducts';
import UltimoProduct from './UltimoProduct';
import PanelCategorias from './PanelCategorias';
//import NotFound from './NotFound';
//import { Route, BrowserRouter, } from 'react-router-dom'


function App() {
  return (
    <React.Fragment>
    <Header />
    <BarraLateral />
    <ContentProducts />
    <UltimoProduct />
    <PanelCategorias />
    <ProductsTable />
    </React.Fragment>
  );
}

export default App;


/*<Router>
    <Header />
    <BarraLateral/>
    <Route path='/totales' component={ContentProducts} />
    <Route path='/ultimo' component={UltimoUser} />
    <Route path='/categorias' component={PanelCategorias} />
    <Route path='/productos' component={ProductsTable} />
    <Route  component={NotFound} />
    
    </Router>*/