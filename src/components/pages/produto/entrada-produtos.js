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
            Axios.get("http://localhost:3000/entrada-produtos/" + id, { id: id }).then((response) => {
                mapValues(response.data[0], (value, key) => setValue(key, value));
            })
        }

    }, [id])


    const Salvar = (data) => {
        if (id) {
            Axios.post("http://localhost:3000/entrada-produtos", data).then((response) => {
                navigate('/consulta-produto')
                alert('produto lançado')
            })

        }
    }



    return (
        <div className="container p-5 mb-3 bg-light text-dark" style={{ marginTop: 30 }}>
            <h2>{'Entrada Produto'}</h2>
            <form onSubmit={handleSubmit(Salvar)}>
                <div className="row">
                    <div className="form-group col-md-1">
                        <label htmlFor="inputEmail4">Cod.</label>
                        <input className="form-control" type="text" name="id_produto" {...register("id_produto")} id="id_produto" />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="inputEmail4">Produto:</label>
                        <input type="text" className="form-control" name="nome_produto" id="nome_produto" {...register("nome_produto")} />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="inputPassword4">Marca:</label>
                        <input type="text" className="form-control" name="marca" {...register('marca')} id="marca" />
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputEmail4">Quantidade:</label>
                        <input type="text" className="form-control" id="quantidade" placeholder="Quantidade" {...register("quantidade")} />
                    </div>

                    <div className="btnCadastrar">
                        <button className="btn btn-dark" >{'Confirmar'}</button>
                    </div>
                </div>


            </form>

        </div>

    )
}




export default EntradaProduto;


