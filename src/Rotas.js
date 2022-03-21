import React from "react";
import { Routes, Route } from 'react-router-dom';

import CadastroUsuario from './components/pages/usuario/cadastro-usuario';
import CadastroCliente from './components/pages/cliente/cadastro-cliente';
import CadastroProduto from "./components/pages/produto/cadastro-produto";
import CadastroServico from "./components/pages/servico/cadastro-servico";

import ConsultaUsuario from "./components/pages/usuario/consulta-usuario";
import ConsultaProduto from "./components/pages/produto/consulta-produto";

function Rotas () {

   return (
        <Routes>
            <Route exact path="/cadastro-usuario" element= {<CadastroUsuario/>}/>
            <Route exact path="/cadastro-cliente" element= {<CadastroCliente/>}/>
            <Route exact path="/cadastro-produto" element= {<CadastroProduto/>}/>
            <Route exact path="/cadastro-servico" element= {<CadastroServico/>}/>


            <Route exact path="/consulta-usuario" element= {<ConsultaUsuario/>}/>
            <Route exact path="/consulta-produto" element= {<ConsultaProduto/>}/>

            <Route exact path="/alterar-usuario/:id" element= {<CadastroUsuario/>}/>
            <Route exact path="/alterar-produto/:id" element= {<CadastroProduto/>}/>  {/* :id indica que id é uma parâmetro */}
            
            
        </Routes>
    );
}

export default Rotas