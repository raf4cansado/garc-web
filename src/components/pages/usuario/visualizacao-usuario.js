import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

function VisualizacaoUsuario() {
    const [listUsuarios, setlistUsuarios] = useState()

    useEffect(() => {
        Axios.get("http://localhost:3000/visualizacao-usuario").then((response) => {
            setlistUsuarios(response.data);
        })

    }, [])

    console.log(listUsuarios)
    return (

        <div className="container p-5 mb-3 bg-light text-dark ">
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
                        <th scope="col">Ações</th>

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
                                    <td><Link className="btn btn-dark" to={"/alterar-usuario/" + item.id_usuario}>Editar</Link></td>
                                    <td><button className="btn btn-dark">Excluir</button></td>

                                </tr>
                            )
                        })}

                </tbody>
            </table>

        </div>
    )
}

export default VisualizacaoUsuario;