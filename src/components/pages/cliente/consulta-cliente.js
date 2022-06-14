import Axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../style.css"


function ConsultaCliente() {

    const [listaCliente, setListaCliente] = useState();

    useEffect(() => {
        ObterDados();
    }, [])

    const ObterDados = () => {
        Axios.get("http://localhost:3000/consulta-cliente").then((response) => {
            setListaCliente(response.data)
        })
    }

    const Deletar = (id) => {
        Axios.delete("http://localhost:3000/deletar-cliente/" +id, {

        }).then((response) => {
            ObterDados();
        })
    }

    return (

        <div className="container p-5 mb-3 bg-light text-dark " style={{ marginTop: 30}}>
            <div className="space-between">
                <div><h2>Lista de Clientes</h2></div>
                <div><Link className="btn btn-dark" to={"/cadastro-cliente/"}>Novo</Link></div>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Cliente</th>
                        <th scope="col">Telefone</th>
                        <th scope="col">Email</th>
                        <th scope="col" className="acao">Ações</th>

                    </tr>
                </thead>

                <tbody>
                    {listaCliente &&
                        listaCliente.map((item) => {
                            return (
                                <tr key={item.id_cliente}>
                                    <th scope="row">{item.id_cliente}</th>
                                    <td>{item.nome}</td>
                                    <td>{item.telefone}</td>
                                    <td>{item.email}</td>
                                 
                                    <td className="tdAcao">
                                        <Link className="btn btn-dark btnAcao" to={"/alterar-cliente/" + item.id_cliente}>Editar</Link>
                                    </td>

                                </tr>
                            )
                        })}

                </tbody>
            </table>
        </div>
    )
}

export default ConsultaCliente