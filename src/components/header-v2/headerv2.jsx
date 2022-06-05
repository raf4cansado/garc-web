import React, { useState } from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import GarcLogo from '../../img/garc.png'
import style from './style.css'


import { Container } from './styles'
import { FaBars } from 'react-icons/fa'
import Sidebar from "../sidebar/siderbar";

const Headerv2 = () => {

    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <Container>
            <img className="logo" src={GarcLogo}/>
            <FaBars onClick={showSidebar}/>
            {sidebar && <Sidebar active ={setSidebar} />}
        </Container>
    )
}

export default Headerv2