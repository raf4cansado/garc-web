import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import "../style.css"

function ConsultaVenda() {
    const [listVendas, setlistVendas] = useState()

    useEffect(() => {
        obterDados();
    }, [])

    const obterDados = () => {
        Axios.get("http://localhost:3000/consulta-venda").then((response) => {
            setlistVendas(response.data);
        })
        
    }
    const Deletar = (id) => {

        Axios.delete("http://localhost:3000/deletar-venda/" + id, {
        }).then((response) => {
            obterDados();
        })

    }
    return (

        <div className="container p-5 mb-3 bg-light text-dark ">
            <div className="space-between">
                <div><h2>Vendas Realizadas!</h2></div>
                <div><Link className="btn btn-primary" to={"/cadastro-venda/"}>Nova Venda!</Link></div>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Código Venda</th>
                        <th scope="col">Cliente</th>
                        <th scope="col">CPF/CNPJ</th>
                        <th scope="col">Vendedor</th>
                        <th scope="col">Produto</th>
                        <th scope="col">Valor</th>
                        <th scope="col">Quantidade</th>
                        <th scope="col">Descrição</th>
                        <th scope="col" className="acao">Ações</th>

                    </tr>
                </thead>

                <tbody>
                    {listVendas &&
                        listVendas.map((item) => {
                            return (
                                <tr key ={item.id_venda}>
                                    <th scope="row">{item.id_venda}</th>
                                    <td>{item.id_cliente}</td>
                                    <td>{item.cpf_cliente_final}</td>
                                    <td>{item.id_usuario}</td>
                                    <td>{item.id_produto}</td>
                                    <td>{item.valor}</td>
                                    <td>{item.quantidade}</td>
                                    <td>{item.descricao}</td>
                                    <td className="tdAcao">
                                        <Link className="btn btn-dark btnAcao" to={"/alterar-venda/" + item.id_venda}>Editar</Link>
                                        <button className="btn btn-dark btnAcao " onClick={() => Deletar(item.id_venda)}>Excluir</button>
                                    </td>

                                </tr>
                            )
                        })}

                </tbody>
            </table>

        </div>
    )
}

export default ConsultaVenda;