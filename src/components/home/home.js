import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="container p-5 mb-3 bg-light text-dark ">
            <div className="space-between">
                <div><h2>GARC</h2></div>
            </div>
            <div>
                <img src = "/images/sr.png"/>
                <h4>Usuário</h4>
            </div>
            <div>
                <img src = "/images/client.png"/>
                <h4>Cliente</h4>
                </div>
            <div>
            
            </div>
            {/*<div><Link src = '/garc-web/public/sr.png' to={"/cadastro-usuario/"}></Link></div>*/}
        </div>
    );
};

export default Home;