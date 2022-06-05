import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="container p-5 mb-3 bg-light text-dark " style={{ marginTop: 30 }} >
          <h1>Vai da certo  🍃 </h1>
            {/*<div><Link src = '/garc-web/public/sr.png' to={"/cadastro-usuario/"}></Link></div>*/}
        </div>
    );
};

export default Home;