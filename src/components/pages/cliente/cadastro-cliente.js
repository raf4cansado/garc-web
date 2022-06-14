import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import mapValues from "lodash/mapValues";
import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../style.css"
import swal from 'sweetalert';

function CadastroCliente() {
    const { register, handleSubmit, setValue } = useForm({
        shouldUnregister: false
    })


    const navigate = useNavigate()
    const {id} = useParams()


    useEffect(() =>{
        if(id){
            Axios.get("http://localhost:3000/obter-cliente/" + id, {id:id}). then((response) =>{
                mapValues(response.data[0], (value, key) => setValue(key, value))
            })
        }
    }, [id])

    const Salvar = (data) => {
        if(id){
            Axios.put("http://localhost:3000/alterar-cliente/",{
                id: id,
                ...data
            }).then((response) =>{
                swal("Concluído", "Alteracão Realizada", "success");
                navigate("/consulta-cliente")

            })

        } else {
            Axios.post("http://localhost:3000/cadastro-cliente", data).then((response) => {
                swal("Concluído", "Cadastro Realizado", "success");
                navigate("/consulta-cliente")
            })
        }
      
    }

    return (
        <div>
            <div className="container p-5 mb-3 bg-light text-dark" style={{ marginTop: 30}}>
                <h2>{id ?"Alterar Cliente" : "Cadastrar Cliente"}</h2>
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
                            <input type="text" className="form-control"{...register("data_nascimento")} name="data_nascimento" id="data_nascimento" placeholder="Data de Nascimento" />
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

                    <div className="btnCadastrar">
                        <button className="btn btn-dark">{id ? "Alterar " : "Cadastrar"}</button>
                    </div>
                </form>
            </div>
        </div >
    )
}

export default CadastroCliente;