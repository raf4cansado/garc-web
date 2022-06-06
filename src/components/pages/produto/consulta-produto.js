import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import pdfProduto from "../../../relatórios/produto";

function ConsultaProduto() {
    const [listProdutos, setListProdutos] = useState();


    useEffect(() => {
        ObterDados();
    }, [])

    const ObterDados = () => {
        Axios.get("http://localhost:3000/consulta-produto").then((response) => {
            setListProdutos(response.data);

        })
    }

    const Deletar = (id) => {
        Axios.delete("http://localhost:3000/deletar-produto/" + id, {

        }).then((response) => {
            ObterDados();
        })
    }

    return (
        <div className="container p-5 mb-3 bg-light text-dark " style={{ marginTop: 30}}>
            <div className="space-between">
                <div><h2>Lista de Produtos</h2></div>
                <td className="btnAcap">
                    <Link className="btn btn-dark" to={"/cadastro-produto/"}>Novo</Link>
                    <button className="btn btn-dark btnAcao" onClick={ () => pdfProduto(listProdutos)}> Imprimir Relatório</button>
                </td>

            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Produto</th>
                        <th scope="col">Marca</th>
                        <th scope="col-">Tipo Produto</th>
                        <th scope="col">Cod. de Barras</th>
                        <th scope="col">Descrição</th>
                        <th scope="col">Quantidade</th>
                        <th scope="col" className="acao">Ações</th>

                    </tr>
                </thead>

                <tbody>
                    {listProdutos &&
                        listProdutos.map((item) => {
                            return (
                                <tr key={item.id_produto}>
                                    <th scope="row">{item.id_produto}</th>
                                    <td>{item.nome_produto}</td>
                                    <td>{item.marca}</td>
                                    <td>{item.tipo_produto}</td>
                                    <td>{item.codigo_barras}</td>
                                    <td>{item.descricao}</td>
                                    <td>{item.quantidade}</td>
                                    <td className="tdAcao">
                                        <Link className="btn btn-dark btnAcao" to={"/alterar-produto/" + item.id_produto}>Editar</Link>
                                        {/* <button className="btn btn-dark btnAcao " onClick={() => Deletar(item.id_produto)}>Excluir</button> */}
                                        <Link className="btn btn-dark btnAcao" to={"/entrada-produtos/"+item.id_produto}>Entrada </Link>
                                    </td>

                                </tr>
                            )
                        })}

                </tbody>
            </table>

        </div>
    )
}

export default ConsultaProduto;