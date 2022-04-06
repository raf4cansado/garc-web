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
                navigate('/consulta-venda')

            })
        }

    }


    return (
        <div className="container p-5 mb-3 bg-light text-dark">
            <h2>{id ? 'Alterar Venda' : 'Cadastrar Venda'}</h2>
            <form onSubmit={handleSubmit(Salvar)}>
                <div className="row">
                    <div className="form-group col-md-1">
                        <label htmlFor="inputEmail4">Cod.</label>
                        <input className="form-control" type="text" {...register("id")} id="id" readonly />
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputEmail4">Cliente:</label>
                        <input type="number" className="form-control" id="id_cliente" placeholder="Digite aqui.." {...register("id_cliente")} />
                    </div>
                    <div className="form-group col-md-5">
                        <label htmlFor="inputEmail4">CPF/CNPJ:</label>
                        <input type="text" className="form-control" id="cpf_cliente_final" placeholder="Digite aqui.." {...register("cpf_cliente_final")}/>
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputEmail4">Vendedor:</label>
                        <input type="number" className="form-control" id="id_usuario" placeholder="Digite aqui.." {...register("id_usuario")} />
                    </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputEmail4">Produto:</label>
                            <input type="number" className="form-control" id="id_produto" placeholder="Digite aqui.." {...register("id_produto")} />
                        </div>
                        <div className="form-group col-md-3">
                            <label htmlFor="inputEmail4">Valor:</label>
                            <input type="number" className="form-control" id="valor" placeholder="Digite aqui.." {...register("valor")}/>
                        </div>
                        <div className="form-group col-md-3">
                            <label htmlFor="inputEmail4">Quantidade:</label>
                            <input type="number" className="form-control" id="quantidade" placeholder="Digite aqui.." {...register("quantidade")} />
                        </div>
                       <div className="mb-3">
                            <label htmlFor="inputEmail4">Descrição:</label>
                            <textarea className="form-control" id="descricao" {...register("descricao")} rows="3"></textarea>
                        </div>
                    <div className="btnCadastrar">
                        <button className="btn btn-primary col-md-2" >{id ? 'Alterar' : 'Cadastrar'}</button>
                    </div>
                </div>
            </form>


        </div>

    )
    }
    
    export default  CadastroServico;

    /* function CadastroItensProdutos() {

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
                Axios.put("http://localhost:3000/consulta-venda", {
                    id: id,
                    ...data
                }).then((response) => {
                    navigate('/consulta-venda')
                })
            } else {
                Axios.post("http://localhost:3000/cadastro-itens-produtos", data).then((response) => {
                    navigate('/consulta-venda')
    
                })
            }
    
        }
    
        return (
            <div className="container p-5 mb-3 bg-light text-dark">
               <h2>{id ? 'Alterar produtos' : 'Escolher Produtos'}</h2>
                <form onSubmit={handleSubmit(Salvar)}>
                    <div className="row">
                        <div className="form-group col-md-2">
                            <label htmlFor="inputEmail4">Cod.</label>
                            <input className="form-control" type="text" {...register("id")} id="id" readonly />
                        </div>
                        <div className="form-group col-md-2">
                            <label htmlFor="inputEmail4">Cod. Venda:</label>
                            <input className="form-control" type="number" {...register("id_venda")} id="id_venda" readonly />
                        </div>
                        <div className="form-group col-md-2">
                            <label htmlFor="inputEmail4">Produto:</label>
                            <input type="number" className="form-control" id="id_produto" placeholder="Digite aqui.." {...register("id_produto")} />
                        </div>
                        <div className="form-group col-md-2">
                            <label htmlFor="inputEmail4">Valor:</label>
                            <input type="number" className="form-control" id="valor" placeholder="Digite aqui.." {...register("valor")}/>
                        </div>
                        <div className="form-group col-md-3">
                            <label htmlFor="inputEmail4">Quantidade:</label>
                            <input type="number" className="form-control" id="quantidade" placeholder="Digite aqui.." {...register("quantidade")} />
                        </div>
                       <div className="mb-3">
                            <label htmlFor="inputEmail4">Descrição Produto:</label>
                            <textarea className="form-control" id="descr" {...register("descr")} rows="3"></textarea>
                        </div>
                        <div className="btnCadastrar">
                            <button className="btn btn-primary col-md-2" >{id ? 'Alterar' : 'Cadastrar'}</button>
                        </div>
                    </div>
                </form>
    
    
            </div>
    
    
            
    
        )
    }  */
    
   
    




