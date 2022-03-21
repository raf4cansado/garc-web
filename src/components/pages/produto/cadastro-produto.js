import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from "react-hook-form";
import Axios from "axios";

function CadastroProduto(props) {

    const [values, setValues] = useState();
    const [listProdutos, setListProdutos] = useState();
    const { register, handleSubmit, setValue } = useForm({});

    useEffect(() => {

    }, [])

    const Obter = (value) => {
        setValues((obj) => ({
            ...obj,
            [value.target.name]: value.target.value,

        }))

    }

    console.log("Dados", values)

    const Salvar = (obj) => {
        Axios.post("http://localhost:3000/cadastro-produto", obj).then((response) => {
            console.log("passei aqui")
        })

    }

    useEffect(() => {
        Axios.get("http://localhost:3000/consulta-produto").then((response) => {
            setListProdutos(response.obj);
        })
    }, [])

    return (
        <div className="container p-5 mb-3 bg-light text-dark">
            <h2>Cadastro Produto</h2>
            <form onSubmit={handleSubmit(Salvar)}>
                <div className="row">
                    <div className="form-group col-md-3">
                        <label htmlFor="inputEmail4">Produto:</label>
                        <input type="text" className="form-control" name="nome_produto" {...register('nome_produto')} id="nome_produto" placeholder="Produto" onChange={Obter} />
                    </div>
                    <div className="form-group col-md-5">
                        <label htmlFor="inputPassword4">Marca:</label>
                        <input type="text" className="form-control" name="marca" {...register('marca')} id="marca" placeholder="Marca" onChange={Obter} />
                    </div>
                    <div className="form-group col-md-2">
                        <label htmlFor="inputPassword4">Quantidade:</label>
                        <input type="number" className="form-control" name="quantidade" {...register('quantidade')} id="quantidade" onChange={Obter} />
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="validationCustom04" className="form-label">Tipo Produto</label>
                        <select className="form-select" name="tipo_produto" id="tipo_produto" {...register('tipo_produto')} onChange={Obter}>
                            <option selected disabled value="">Choose...</option>
                            <option>Alimento</option>
                            <option>Medicamento</option>
                            <option>Brinquedo</option>
                            <option>Serviço</option>
                        </select>
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputEmail4">Cod. de Barras:</label>
                        <input type="text" className="form-control" name="codigo_barras" {...register('codigo_barras')} id="codigo_barras" placeholder="Cod. de Barras" onChange={Obter} />
                    </div>
                    <div className="form-group col-md-2">
                        <label htmlFor="inputPassword4">Valor:</label>
                        <input type="text" className="form-control" name="valor_produto" {...register('valor_produto')} id="valor_produto" placeholder="R$" onChange={Obter} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Descrição:</label>
                        <textarea className="form-control" id="descricao" name="descricao" rows="3" {...register('descricao')} onChange={Obter}></textarea>
                    </div>
                    <div className="d-grid gap-2 d-md-block">
                        <button className="btn btn-primary">Cadastrar</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CadastroProduto;