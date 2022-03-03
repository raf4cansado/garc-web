import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/header/header';

import CadastroUsuario from './components/pages/usuario/cadastro-usuario';

import 'bootstrap/dist/css/bootstrap.min.css';

import Rotas from './Rotas';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Rotas/>
    </BrowserRouter>
  )
}

export default App;
