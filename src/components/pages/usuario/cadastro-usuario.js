import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from "axios";
import { Link, useParams } from "react-router-dom";
function CadastroUsuario() {

    const [values, setValues] = useState();
    const [listUsuarios, setlistUsuarios] = useState();
    const [valoresIniciais, setValoresIniciais] = useState({

    });

    const { register, handleSubmit, setValue, formState: { errors } } = useForm({
        defaultValues: valoresIniciais
    });


    const { id } = useParams();

    useEffect(() => {
        if (id) {
            Axios.get("http://localhost:3000/obter-usuario/" + id, { id: id }).then((response) => {
                setValoresIniciais(response.data[0]);
            })
        }

    }, [id])

    const handleChangeValues = (value) => {

        setValues((prevValue) => ({
            ...prevValue,
            [value.target.name]: value.target.value,
        }))
    };

    const Salvar = (data) => {
        if (id) {
            Axios.put("http://localhost:3000/editar-usuario", {
                id: id,
                ...data
            }).then((response) => {
            })
        } else {
            Axios.post("http://localhost:3000/cadastro-usuario", data).then((response) => {
            })
        }

    }

    useEffect(() => {
        Axios.get("http://localhost:3000/visualizacao-usuario").then((response) => {
            setlistUsuarios(response.data);
        })
    }, [])

    return (
        <div className="container p-5 mb-3 bg-light text-dark">
            <h2>{id ? 'Alterar Usuário' : 'Cadastrar Usuário'}</h2>
            <form onSubmit={handleSubmit(Salvar)}>
                <div className="row">
                    <div className="form-group col-md-3">
                        <label htmlFor="inputEmail4">Usuário:</label>
                        <input type="text" {...register("usuario", { required: true,minLength: 3, maxLength: 20, pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i} })} defaultValue={valoresIniciais.usuario} className="form-control" id="usuario" placeholder="Usuário" onChange={handleChangeValues} />
                        {errors.usuario && errors.usuario.type === "required" && <span>Preencha todos os campos!</span>}
                        {errors.usuario && errors.usuario.type === "pattern" && <span>Caracteres Inválidos</span>}
                    </div>
                    <div className="form-group col-md-5">
                        <label htmlFor="inputPassword4">Nome:</label>
                        <input type="text" {...register("nome")} defaultValue={valoresIniciais.nome} className="form-control" id="nome" placeholder="Digite o Nome" onChange={handleChangeValues} />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="validationCustom04" className="form-label">Tipo Usuário</label>
                        <select className="form-select" id="tipo_usuario" name="tipo_usuario" >
                            <option>Administrador</option>
                            <option>Venda</option>
                        </select>
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputEmail4">CPF:</label>
                        <input type="text" className="form-control" id="cpf" placeholder="000.000.000-00" {...register("cpf")} defaultValue={valoresIniciais.cpf} onChange={handleChangeValues} />
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputPassword4">Telefone:</label>
                        <input type="text" className="form-control" id="telefone" placeholder="(62)" {...register("telefone")} defaultValue={valoresIniciais.telefone} onChange={handleChangeValues} />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputEmail4">E-mail:</label>
                        <input type="text" className="form-control" id="email" placeholder="Digite o E-mail" {...register("email")} defaultValue={valoresIniciais.email} onChange={handleChangeValues} />
                    </div>
                    <div className="form-check form-switch col-md-3">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" name="ativo" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Ativo?</label>
                    </div>
                    <div>
                        <button className="btn btn-primary col-md-2 mr-2" >{id ? 'Alterar' : 'Cadastrar'}</button>
                        <Link to="/visualizacao-usuario"><button className="btn btn-dark  col-md-2 ml-2" type="button">Visualizar</button></Link>
                    </div>

                </div>
            </form>
        </div>
    )
}

export default CadastroUsuario;