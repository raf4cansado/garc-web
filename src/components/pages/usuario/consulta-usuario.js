import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

import "../usuario/style.css"

function ConsultaUsuario() {
    const [listUsuarios, setlistUsuarios] = useState()

    useEffect(() => {
        obterDados();
    }, [])

    const obterDados = () => {
        Axios.get("http://localhost:3000/consulta-usuario").then((response) => {
            setlistUsuarios(response.data);
        })
    }
    const Deletar = (id) => {

        Axios.delete("http://localhost:3000/deletar-usuario/" + id, {
        }).then((response) => {
            obterDados();
        })

    }

    console.log(listUsuarios)
    return (

        <div className="container p-5 mb-3 bg-light text-dark ">
            <div className="space-between">
                <div><h2>Lista de Usuários</h2></div>
                <div><Link className="btn btn-primary" to={"/cadastro-usuario/"}>Novo</Link></div>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Usuário</th>
                        <th scope="col">Nome</th>
                        <th scope="col">CPF</th>
                        <th scope="col">Telefone</th>
                        <th scope="col">Email</th>
                        <th scope="col">Ativo</th>
                        <th scope="col" className="acao">Ações</th>

                    </tr>
                </thead>

                <tbody>
                    {listUsuarios &&
                        listUsuarios.map((item) => {
                            return (
                                <tr>
                                    <th scope="row">{item.id_usuario}</th>
                                    <td>{item.usuario}</td>
                                    <td>{item.nome}</td>
                                    <td>{item.cpf}</td>
                                    <td>{item.telefone}</td>
                                    <td>{item.email}</td>
                                    <td>{item.ativo}</td>
                                    <td className="tdAcao">
                                        <Link className="btn btn-dark btnAcao" to={"/alterar-usuario/" + item.id_usuario}>Editar</Link>
                                        <button className="btn btn-dark btnAcao " onClick={() => Deletar(item.id_usuario)}>Excluir</button>
                                    </td>

                                </tr>
                            )
                        })}

                </tbody>
            </table>

        </div>
    )
}

export default ConsultaUsuario;