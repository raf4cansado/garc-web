import React from "react";
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
    return (
        <header>
            <nav>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <Link to="/cadastro-usuario" className="nav-link active" >Usuário</Link>
                </li>
                <li className="nav-item">
                    <Link to='/cadastro-cliente' className="nav-link active">Cliente</Link>
                </li>
                <li className="nav-item">
                    <Link to='/cadastro-produto' className="nav-link active">Produto</Link>
                </li>
                <li className="nav-item">
                    <Link to='/cadastro-servico' className="nav-link active">Venda</Link>
                </li>
            </ul>
            </nav>
          
        </header>

    )

}

export default Header;