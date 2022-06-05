import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useParams, useNavigate } from "react-router-dom";
import mapValues from "lodash/mapValues";
import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../style.css"




function EntradaProduto() {


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
            Axios.post("http://localhost:3000/entrada-produtos", data).then((response) => {
                navigate('/entrada-produtos')
                alert("Produto lançado!!")


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
            <h2>{'Entrada Produto'}</h2>
            <form onSubmit={handleSubmit(Salvar)}>
                <div className="row">
                    <div className="form-group col-md-1">
                        <label htmlFor="inputEmail4">Cod.</label>
                        <input className="form-control" type="text" {...register("id")} id="id" />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="inputEmail4">Produto:</label>
                        <input type="text" className="form-control" id="id_produto" placeholder="Produto" {...register("id_produto")} />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="inputPassword4">Marca:</label>
                        <input type="text" className="form-control" name="marca" {...register('marca')} id="marca" placeholder="Marca" />
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputEmail4">Quantidade:</label>
                        <input type="text" className="form-control" id="quantidade" placeholder="Quantidade" {...register("quantidade")} />
                    </div>

                    <div className="btnCadastrar">
                        <button className="btn btn-primary" >{'Confirmar'}</button>
                    </div>
                </div>
            
                
            </form>
            
        </div>



    )
}




export default EntradaProduto;


