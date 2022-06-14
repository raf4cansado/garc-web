import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useParams, useNavigate } from "react-router-dom";
import mapValues from "lodash/mapValues";
import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../pages/style.css"
import swal from 'sweetalert';

function CadastroUsuario() {

    const { register, handleSubmit, setValue, formState: { errors } } = useForm({
        shouldUnregister: false
    });

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            Axios.get("http://localhost:3000/obter-usuario/" + id, { id: id }).then((response) => {
                mapValues(response.data[0], (value, key) => setValue(key, value));
            })
        }
    }, [id])

    // const Obter = (value) => {

    //     setValues((prevValue) => ({
    //         ...prevValue,
    //         [value.target.name]: value.target.value,
    //     }))
    // };

    const Salvar = (data) => {
        if (id) {
            Axios.put("http://localhost:3000/alterar-usuario", {
                id: id,
                ...data
            }).then((response) => {
                swal("Concluído", "Alteracão Realizada", "success");
                navigate('/consulta-usuario')
            })
        } else {
            Axios.post("http://localhost:3000/cadastro-usuario", data).then((response) => {
                swal("Concluído", "Cadastro Realizado", "success");
                navigate('/consulta-usuario')

            })
        }
    }

    return (
        <div className="container p-5 mb-3 bg-light text-dark" style={{ marginTop: 30}}>
            <h2>{id ? 'Alterar Usuário' : 'Cadastrar Usuário'}</h2>
            <form onSubmit={handleSubmit(Salvar)}>
                <div className="row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputPassword4">Nome:</label>
                        <input type="text" {...register("nome")} className="form-control" id="nome" placeholder="Nome" />
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputEmail4">Usuário:</label>
                        <input type="text" {...register("usuario")} className="form-control" id="usuario" placeholder="Usuário" />
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputEmail4">Senha:</label>
                        <input type="password" className="form-control" id="senha" placeholder="******"{...register("senha")} />
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputEmail4">CPF:</label>
                        <input type="text" className="form-control" id="cpf" placeholder="000.000.000-00" {...register("cpf")} />
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputPassword4">Telefone:</label>
                        <input type="text" className="form-control" id="telefone" placeholder="Telefone" {...register("telefone")} />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputEmail4">E-mail:</label>
                        <input type="text" className="form-control" id="email" placeholder="E-mail" {...register("email")} />
                    </div>
                    <div className="btnCadastrar">
                        <button className="btn btn-dark " >{id ? 'Alterar' : 'Cadastrar'}</button>
                    </div>

                </div>
            </form>
        </div>
    )
}

export default CadastroUsuario;