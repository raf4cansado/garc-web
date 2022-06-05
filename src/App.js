import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/header/header';

import Headerv2 from './components/header-v2/headerv2'

import 'bootstrap/dist/css/bootstrap.min.css';

import Rotas from './Rotas';

function App() {
  return (
    <BrowserRouter>
      <Headerv2/>
      <Rotas/>
    </BrowserRouter>
  )
}

export default App;
