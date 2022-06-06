import React from "react";
import { Routes, Route } from 'react-router-dom';

import CadastroUsuario from './components/pages/usuario/cadastro-usuario';
import CadastroCliente from './components/pages/cliente/cadastro-cliente';
import CadastroProduto from "./components/pages/produto/cadastro-produto";
import CadastroServico from "./components/pages/venda/cadastro-venda";
import ConsultaUsuario from "./components/pages/usuario/consulta-usuario";
import ConsultaProduto from "./components/pages/produto/consulta-produto";


import ConsultaCliente from "./components/pages/cliente/consulta-cliente";
import Home from "./components/home/home";
import ConsultaVenda from "./components/pages/venda/consulta-venda";
import EntradaProduto from "./components/pages/produto/entrada-produtos";

import ModalEntrada from "./components/pages/produto/modal-entrada";

// import ConsultaCliente from "./components/pages/cliente/consulta-cliente";
function Rotas () {

   return (
        <Routes>
            <Route exact path="/" element= {<Home/>}/>

            <Route exact path="/cadastro-usuario" element= {<CadastroUsuario/>}/>
            <Route exact path="/cadastro-cliente" element= {<CadastroCliente/>}/>
            <Route exact path="/cadastro-produto" element= {<CadastroProduto/>}/>
            <Route exact path="/cadastro-venda" element= {<CadastroServico/>}/>
            <Route exact path="/entrada-produtos" element= {<EntradaProduto/>}/>

            <Route exact path="/consulta-usuario" element= {<ConsultaUsuario/>}/>
            <Route exact path="/consulta-produto" element= {<ConsultaProduto/>}/>
            <Route exatc path="/consulta-cliente" element= {<ConsultaCliente/>}/>
            <Route exatc path="/consulta-venda" element= {<ConsultaVenda/>}/>

            <Route exact path="/modal-entrada" element={<ModalEntrada/>}/>

            <Route exact path="/alterar-usuario/:id" element= {<CadastroUsuario/>}/>
            <Route exact path="/alterar-produto/:id" element= {<CadastroProduto/>}/>  {/* :id indica que id é uma parâmetro */}
            <Route exact path="/alterar-cliente/:id" element= {<CadastroCliente/>}/>
            <Route exact path="/entrada-produtos/:id" element= {<EntradaProduto/>}/>
            
            
        </Routes>
    );
}

export default Rotas