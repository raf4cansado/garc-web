import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from "react-hook-form";
import Axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import mapValues from "lodash/mapValues";


function CadastroProduto() {    

    const { register, handleSubmit, setValue } = useForm({
        shouldUnregister: false
    });

    const navigate = useNavigate()
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            Axios.get("http://localhost:3000/obter-produto/" + id, { id: id }).then((response) => {
                mapValues(response.data[0], (value, key) => setValue(key, value))
                
            })
        }

    }, [id])

    const Salvar = (data) => {

        if (id) {
            Axios.put("http://localhost:3000/alterar-produto", {
                id: id,
                ...data
            }).then((response) => {
                navigate('/consulta-produto')
            })
        } else {
            Axios.post("http://localhost:3000/cadastro-produto", data).then((response) => {
                navigate('/consulta-produto')
            })
        }

    }

    return (
        <div className="container p-5 mb-3 bg-light text-dark">
        <h2>{id ? "Alterar Produto" : "Cadastro Produto"}</h2>
           <br/>
            <form onSubmit={handleSubmit(Salvar)}>
                <div className="row">
                    <div className="form-group col-md-3">
                        <label htmlFor="inputEmail4">Produto:</label>
                        <input type="text" className="form-control" name="nome_produto" {...register('nome_produto')} id="nome_produto" placeholder="Produto" />
                    </div>
                    <div className="form-group col-md-5">
                        <label htmlFor="inputPassword4">Marca:</label>
                        <input type="text" className="form-control" name="marca" {...register('marca')} id="marca" placeholder="Marca" />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="validationCustom04" className="form-label">Tipo Produto</label> 
                        <select className="form-control" name="tipo_produto" id="tipo_produto" {...register('tipo_produto')}>
                            <option defaultValue>Tipo Produto</option>
                            <option>Alimento</option>
                            <option>Medicamento</option>
                            <option>Brinquedo</option>
                            <option>Serviço</option>
                        </select>
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputEmail4">Cod. de Barras:</label>
                        <input type="text" className="form-control" name="codigo_barras" {...register('codigo_barras')} id="codigo_barras" placeholder="Cod. de Barras" />
                    </div>
                    <div className="form-group col-md-2">
                        <label htmlFor="inputPassword4">Valor:</label>
                        <input type="text" className="form-control" name="valor_produto" {...register('valor_produto')} id="valor_produto" placeholder="R$" />
                    </div>

                    <div className="form-group col-md-12">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Descrição:</label>
                        <textarea className="form-control" id="descricao" name="descricao" rows="3" {...register('descricao')}></textarea>
                    </div>
                    <div className="btnCadastrar">
                        <button className="btn btn-primary" >{id ? "Alterar" : "Cadastrar"}</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CadastroProduto;