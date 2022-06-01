import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useParams, useNavigate } from "react-router-dom";
import mapValues from "lodash/mapValues";
import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../style.css"


function CadastroServico() {


    const { register, handleSubmit, setValue, formState: { errors } } = useForm({
        shouldUnregister: false
    });


    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            Axios.get("http://localhost:3000/obter-venda/" + id, { id: id }).then((response) => {
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
            Axios.put("http://localhost:3000/alterar-venda", {
                id: id,
                ...data
            }).then((response) => {
                navigate('/consulta-venda')
            })
        } else {
            Axios.post("http://localhost:3000/cadastro-venda", data).then((response) => {
                navigate('/cadastro-venda')
                alert("Pedido Feito!")


            })
        }

    }

    const { idd } = useParams();

    useEffect(() => {
        if (idd) {
            Axios.get("http://localhost:3000/obter-venda/" + idd, { id: idd }).then((response) => {
                mapValues(response.data[0], (value, key) => setValue(key, value));
            })
        }

    }, [idd])

    const Salvarr = (data) => {
        if (idd) {
            Axios.put("http://localhost:3000/alterar-venda", {
                id: idd,
                ...data
            }).then((response) => {
                navigate('/consulta-venda')
            })
        } else {
            Axios.post("http://localhost:3000/cadastro-itens-produtos", data).then((response) => {
                navigate('/cadastro-venda')
                alert("Produto Adicionado!")


            })
        }

    }


    return (
        <div className="container p-5 mb-3 bg-light text-dark">
            <h2>{'Dados do Cliente'}</h2>
            <form onSubmit={handleSubmit(Salvar)}>
                <div className="row">
                    <div className="form-group col-md-9">
                        <label htmlFor="nome">Nome / Razão Social:</label>
                        <input type="text" className="form-control" {...register("nome")} name="nome" id="nome" placeholder="Nome / Razão Social" />
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="cpf">CPF / CNPJ:</label>
                        <input type="text" className="form-control"{...register("cpf")} name="cpf" id="cpf" placeholder="CPF / CNPJ" />
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="data_nascimento">Data de Nascimento</label>
                        <input type="text" className="form-control"{...register("data_nascimento")} name="data_nascimento" id="data_nascimento" placeholder="DD/MM/YYYY" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="email">Email:</label>
                        <input type="email" className="form-control"{...register("email")} name="email" id="email" placeholder="Email" />
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="telefone">Telefone:</label>
                        <input type="text" className="form-control" {...register("telefone")} name="telefone" id="telefone" placeholder="Telefone" />
                    </div>

                    <div className="form-group col-md-7">
                        <label htmlFor="endereco">Endereço:</label>
                        <input type="text" className="form-control" {...register("endereco")} name="endereco" id="endereco" placeholder="Endereço" />
                    </div>
                    <div className="form-group col-md-5">
                        <label htmlFor="complemento">Complemento:</label>
                        <input type="text" className="form-control" {...register("complemento")} name="complemento" id="complemento" placeholder="Complemento" />
                    </div>
                </div>
            </form>

            <h2>{'Produtos'}</h2>
            <h1>FIELDARRAY AQUI</h1>
        </div>

    )
}


export default CadastroServico;


