import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function CadastroUsuario() {
    return (
        <div class="container p-5 mb-3 bg-light text-dark">
            <h1>Cadastro Usuário</h1>
            <form>
                <div class="row">

                    <div class="form-group col-md-1">
                        <label for="inputPassword4">Cod.</label>
                        <input class="form-control" type="text" placeholder=" " readonly />

                    </div>
                    <div class="form-group col-md-2">
                        <label for="inputEmail4">Usuário:</label>
                        <input type="text" class="form-control" id="inputEmail4" placeholder="Digite o Usuário" />
                    </div>
                    <div class="form-group col-md-5">
                        <label for="inputPassword4">Nome:</label>
                        <input type="text" class="form-control" id="inputPassword4" placeholder="Digite o Nome" />
                    </div>
                    <div class="form-group col-md-2">
                        <label for="inputEmail4">CPF:</label>
                        <input type="text" class="form-control" id="inputEmail4" placeholder="000.000.000-00" />
                    </div>
                    <div class="form-group col-md-3">
                        <label for="inputPassword4">Telefone:</label>
                        <input type="text" class="form-control" id="inputPassword4" placeholder="(62) 9" />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputEmail4">E-mail:</label>
                        <input type="text" class="form-control" id="inputEmail4" placeholder="Digite o E-mail" />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputPassword4">Observação:</label>
                        <input type="text" class="form-control" id="inputPassword4" placeholder="Digite uma Observação" />
                    </div>
                </div>
                <div class="row">

                </div>

                <div class="form-row">

                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                        Usuário Ativo
                    </label>
                </div>
                <div class="form-group col-md-6">
                    <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Tipo de Usuário:</label>
                    <select class="custom-select my-0 mr-sm-2" id="inlineFormCustomSelectPref">
                        <option selected> </option>
                        <option value="1">Administrador</option>
                        <option value="2">Gerente</option>
                        <option value="3">Padrão</option>
                    </select>
                </div>

                <div>
                    <button type="button" class="btn btn-primary">Cadastrar</button>
                    <button type="button" class="btn btn-primary">Cancelar</button>
                </div>


            </form>
        </div>
    )
}

export default CadastroUsuario;