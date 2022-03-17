import React from "react";
import CadastroUsuario from "./cadastro-usuario";

function VisualizacaoUsuario(props) {

    return (

        <div className="visualizacaoUsuario">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Usuário</th>
                        <th scope="col">Nome</th>
                        <th scope="col">CPF</th>
                        <th scope="col">Telefone</th>
                        <th scope="col">Email</th>
                        <th scope="col">Ativo</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">{props.id_usuario}</th>
                        <td>{props.usuario}</td>
                        <td>{props.nome}</td>
                        <td>{props.cpf}</td>
                        <td>{props.telefone}</td>
                        <td>{props.email}</td>
                        <td>{props.ativo}</td>
                    </tr>

                </tbody>
            </table>

        </div>
    )
}

export default VisualizacaoUsuario;