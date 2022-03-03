import React from "react";
import { Routes, Route } from 'react-router-dom';

import CadastroUsuario from './components/pages/usuario/cadastro-usuario';
import CadastroCliente from './components/pages/cliente/cadastro-cliente';
import CadastroProduto from "./components/pages/produto/cadastro-produto";
import CadastroServico from "./components/pages/produto/cadastro-produto";

function Rotas () {

   return (
        <Routes>
            <Route exact path="/cadastro-usuario" element= {<CadastroUsuario/>}/>
            <Route exact path="/cadastro-cliente" element= {<CadastroCliente/>}/>
            <Route exact path="/cadastro-produto" element= {<CadastroProduto/>}/>
            <Route exact path="/cadastro-servico" element= {<CadastroServico/>}/>
        </Routes>
    );
}

export default Rotas