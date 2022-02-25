import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/header';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>


  )
}

export default App;
