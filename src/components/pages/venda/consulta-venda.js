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

        <div className="container p-5 mb-3 bg-light text-dark " style={{ marginTop: 30}}>
            <div className="space-between">
                <div className="col-md-4"><h2>Lista de Vendas</h2></div>
                <div><Link className="btn btn-dark" to={"/cadastro-venda/"}>Novo</Link></div>
           </div>
          
           <br/>
         
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Cliente</th>
                        <th scope="col">Valor</th>
                        <th scope="col">Data Venda</th>

                    </tr>
                </thead>

                <tbody>
                    {listVendas &&
                        listVendas.map((item) => {
                            return (
                                <tr key ={item.id_venda}>
                                    <th scope="row">{item.id_venda}</th>
                                    <td>{item.nome}</td>
                                    <td>{item.valor}</td>
                                    <td>{item.data_venda}</td>
                                    {/* <td className="tdAcao">
                                        <Link className="btn btn-dark btnAcao" to={"/alterar-venda/" + item.id_venda}>Editar</Link>
                                        <button className="btn btn-dark btnAcao " onClick={() => Deletar(item.id_venda)}>Excluir</button>
                                    </td> */}

                                </tr>
                            )
                        })}

                </tbody>
            </table>

        </div>
    )
}

export default ConsultaVenda;