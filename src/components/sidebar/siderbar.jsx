import React from "react";
import { Container, Content } from "./styles";
import { Link } from 'react-router-dom';

// ICONS
import { FaTimes, FaHome } from 'react-icons/fa'
import { BsFillBasket2Fill } from "react-icons/bs";
import { ImUser, ImUsers } from "react-icons/im";
import { AiOutlineDropbox } from "react-icons/ai";


import Sidebaritem from '../siderbaritem/sidebaritem'

const Sidebar = ({ active }) => {
    const closeSidebar = () =>{
        active(false)
    }

    return (
        <Container sidebar={active}>
            <FaTimes onClick={closeSidebar}/>
            <Content>
        <Link to = {"/"}><Sidebaritem Icon={FaHome} Text = "Home"/></Link>
        <Link to={"/consulta-usuario"}><Sidebaritem Icon={ImUser} Text = "Usuário"/></Link>
        <Link to={"/consulta-cliente"}><Sidebaritem Icon={ImUsers} Text = "Clientes"/></Link>
        <Link to={"/consulta-produto"}><Sidebaritem Icon={AiOutlineDropbox} Text = "Produto"/></Link>
        <Link to={"/consulta-venda"}><Sidebaritem Icon={BsFillBasket2Fill} Text = "Venda"/></Link>
            </Content>
        </Container>
    )
}

export default Sidebar