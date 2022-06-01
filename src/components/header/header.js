import React, {Component} from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';

class header extends Component{
    render(){
        return (
            <div>
                <Navbar bg="primary" expand="lg">
  
      <Navbar.Brand as = {Link} to = {"/"} >
        <img
          alt=""
          src="../public/images/garc.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      GARC
      </Navbar.Brand>
 
  
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="justify-content-center">
        <NavDropdown title="Usuário" id="basic-nav-dropdown">
          <NavDropdown.Item as = {Link} to = {"/consulta-usuario"}>Consulta</NavDropdown.Item>
          <NavDropdown.Item as = {Link} to = {"/cadastro-usuario"}>Cadastro</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Cliente" id="basic-nav-dropdown">
          <NavDropdown.Item as = {Link} to = {"/consulta-cliente"}>Consulta</NavDropdown.Item>
          <NavDropdown.Item as = {Link} to = {"/cadastro-cliente"}>Cadastro</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Produto" id="basic-nav-dropdown">
          <NavDropdown.Item as = {Link} to = {"/consulta-produto"}>Consulta</NavDropdown.Item>
          <NavDropdown.Item as = {Link} to = {"/cadastro-produto"}>Cadastro</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Venda" id="basic-nav-dropdown">
          <NavDropdown.Item as = {Link} to = {"/consulta-venda"}>Consulta</NavDropdown.Item>
          <NavDropdown.Item as = {Link} to = {"/cadastro-venda"}>Cadastro</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  
</Navbar>
            </div>
        )
    }

}
export default header;