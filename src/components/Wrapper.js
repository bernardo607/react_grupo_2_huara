import React from 'react';
import ProductsTable from './ProductsTable';
import ContentProducts from './ContentProducts';
import UltimoProduct from './UltimoProduct';
import PanelCategorias from './PanelCategorias';
import '../assets/css/Wrapper.css';


function Wrapper(){
    return(
        <React.Fragment>
            <body>
            <ContentProducts/>
            <UltimoProduct/>
            <PanelCategorias/>
            <ProductsTable/>
            </body>
        </React.Fragment>
    )
}
export default Wrapper;