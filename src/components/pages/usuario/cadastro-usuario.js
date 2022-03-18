import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from "axios";
import { Link } from "react-router-dom";
function CadastroUsuario() {

    const [values, setValues] = useState();
    const [listUsuarios, setlistUsuarios] = useState();

    console.log(listUsuarios)
    console.log(values)

    const handleChangeValues = (value) => {

        setValues((prevValue) => ({
            ...prevValue,
            [value.target.name]: value.target.value,
        }))
    };
    const handleClickButoon = () => {
        Axios.post("http://localhost:3000/cadastro-usuario", {
            usuario: values.usuario,
            nome: values.nome,
            cpf: values.cpf,
            telefone: values.telefone,
            email: values.email,
            ativo: values.ativo
        }).then((response) => {
            console.log(response)
        })
    }

    useEffect(() => {
        Axios.get("http://localhost:3000/visualizacao-usuario").then((response) => {
            setlistUsuarios(response.data);
        })
    }, [])

    return (
        <div className="container p-5 mb-3 bg-light text-dark">
            <h2>Cadastro Usuário</h2>
            <form>
                <div className="row">
                    <div className="form-group col-md-3">
                        <label htmlFor="inputEmail4">Usuário:</label>
                        <input type="text" name="usuario" className="form-control" id="inputEmail4" placeholder="Usuário" onChange={handleChangeValues} />
                    </div>
                    <div className="form-group col-md-5">
                        <label htmlFor="inputPassword4">Nome:</label>
                        <input type="text" name="nome" className="form-control" id="inputPassword4" placeholder="Digite o Nome" onChange={handleChangeValues} />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="validationCustom04" className="form-label">Tipo Usuário</label>
                        <select className="form-select" id="validationCustom04" name="tipo_usuario" >
                            <option>Administrador</option>
                            <option>Venda</option>
                        </select>
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputEmail4">CPF:</label>
                        <input type="text" className="form-control" id="inputEmail4" placeholder="000.000.000-00" name="cpf" onChange={handleChangeValues} />
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputPassword4">Telefone:</label>
                        <input type="text" className="form-control" id="inputPassword4" placeholder="(62)" name="telefone" onChange={handleChangeValues} />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputEmail4">E-mail:</label>
                        <input type="text" className="form-control" id="inputEmail4" placeholder="Digite o E-mail" name="email" onChange={handleChangeValues} />
                    </div>
                    <div className="form-check form-switch col-md-3">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" name="ativo" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Ativo?</label>
                    </div>
                    <div>
                        <button className="btn btn-primary col-md-2 mr-2" type="button" onClick={handleClickButoon}>Cadastrar</button>
                        <Link to="/visualizacao-usuario"><button className="btn btn-dark  col-md-2 ml-2" type="button">Visualizar</button></Link>
                    </div>

                </div>
            </form>
        </div>
    )
}

export default CadastroUsuario;