import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import GarcLogo from '../../img/garc-preto.png'
import "../pages/style.css"

function Home() {
    return (
        <div className="container p-5 mb-3 bg-light text-dark " style={{ marginTop: 30 }} >
          <img className="logo home" src={GarcLogo}/>
          <h2 style={{marginLeft: 454,marginTop: -30}}>SISTEMAS</h2>
        </div>
    );
};

export default Home;