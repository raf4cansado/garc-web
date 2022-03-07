import React from "react";
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
    return (
        <header>
            <nav>
            <ul class="nav justify-content-center">
                <li class="nav-item">
                    <Link to="/cadastro-usuario" class="nav-link active" >Usuário</Link>
                </li>
                <li class="nav-item">
                    <Link to='/cadastro-cliente' class="nav-link active">Cliente</Link>
                </li>
                <li class="nav-item">
                    <Link to='/cadastro-produto' class="nav-link active">Produto</Link>
                </li>
                <li class="nav-item">
                    <Link to='/cadastro-servico' class="nav-link active">Venda</Link>
                </li>
            </ul>
            </nav>
          
        </header>

    )

}

export default Header;