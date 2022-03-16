import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from "axios";

function CadastroCliente() {
    return (
        <div class="container p-5 mb-3 bg-light text-dark">
            <h2>Cadastro Cliente</h2>
            <form>
                <div class="row">
                    <div class="form-group col-md-1">
                        <label for="inputPassword4">Cod.Cliente</label>
                        <input class="form-control" type="text" placeholder="COD " readonly />
                    </div>
                    <div class="form-group col-md-8">
                        <label for="inputEmail4">Nome:</label>
                        <input type="text" class="form-control" id="inputEmail4" placeholder="Escreva aqui..." />
                    </div>
                    <div class="form-group col-md-3">
                        <label for="inputEmail4">CPF:</label>
                        <input type="text" class="form-control" id="inputEmail4" placeholder="000.000.000-00" />
                    </div>
                    <div class="col-md-2">
                        <label for="validationCustom04" class="form-label">Sexo:</label>
                        <select class="form-select" id="validationCustom04" required>
                            <option>Masculino</option>
                            <option>Feminino</option>
                        </select>
                    </div>
                    <div class="form-group col-md-5">
                        <label for="inputEmail4">Endereço:</label>
                        <input type="text" class="form-control" id="inputEmail4" placeholder="Escreva aqui..." />
                    </div>
                    <div class="form-group col-md-5">
                        <label for="inputEmail4">Complemento:</label>
                        <input type="text" class="form-control" id="inputEmail4" placeholder="Escreva aqui..." />
                    </div>
                    <div class="form-group col-md-3">
                        <label for="inputPassword4">Contato:</label>
                        <input type="text" class="form-control" id="inputPassword4" placeholder="(62)" />
                    </div>
                    <div class="form-group col-md-3">
                        <label for="inputPassword4">Contato 2:</label>
                        <input type="text" class="form-control" id="inputPassword4" placeholder="(62)" />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputEmail4">Email:</label>
                        <input type="email" class="form-control" id="inputEmail4" placeholder="Escreva aqui..." />
                    </div>

                </div>
                <h2>Pet:</h2>
                <br />
                <div class="row">
                    <div class="form-group col-md-5">
                        <label for="inputEmail4">Nome do animal:</label>
                        <input type="text" class="form-control" id="inputEmail4" placeholder="Escreva aqui..." />
                    </div>
                    <div class="col-md-3">
                        <label for="validationCustom04" class="form-label">Sexo:</label>
                        <select class="form-select" id="validationCustom04" required>
                            <option selected disabled value="">Choose...</option>
                            <option>Masculino</option>
                            <option>Feminino</option>
                        </select>
                    </div>
                    <div class="form-group col-md-1">
                        <label for="inputPassword4">Idade:</label>
                        <input type="number" class="form-control" id="inputPassword4" />
                    </div>
                    <div class="form-group col-md-3">
                        <label for="inputEmail4">Raça do animal:</label>
                        <input type="text" class="form-control" id="inputEmail4" placeholder="Escreva aqui..." />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Observação:</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div class="form-check form-switch col-md-3">
                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label class="form-check-label" for="flexSwitchCheckDefault">Ativo?</label>
                    </div>
                </div>

                <div>
                    <input class="btn btn-primary" type="submit" value="Cadastrar" />
                    <input class="btn btn-primary" type="submit" value="Cancelar" />
                </div>
            </form>
        </div>
    )
}

export default CadastroCliente;