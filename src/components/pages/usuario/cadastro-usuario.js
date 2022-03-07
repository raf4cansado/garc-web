import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function CadastroUsuario() {
    return (
        <div class="container p-5 mb-3 bg-light text-dark">
            <h2>Cadastro Usuário</h2>
            <form>
                <div class="row">
                    <div class="form-group col-md-1">
                        <label for="inputPassword4">Cod.</label>
                        <input class="form-control" type="text" placeholder="COD " readonly />
                    </div>
                    <div class="form-group col-md-3">
                        <label for="inputEmail4">Usuário:</label>
                        <input type="text" class="form-control" id="inputEmail4" placeholder="Usuário" />
                    </div>
                    <div class="form-group col-md-5">
                        <label for="inputPassword4">Nome:</label>
                        <input type="text" class="form-control" id="inputPassword4" placeholder="Digite o Nome" />
                    </div>
                    <div class="col-md-3">
                        <label for="validationCustom04" class="form-label">Tipo Usuário</label>
                        <select class="form-select" id="validationCustom04" required>
                            <option selected disabled value="">Choose...</option>
                            <option>Administrador</option>
                            <option>Venda</option>
                        </select>
                    </div>
                    <div class="form-group col-md-3">
                        <label for="inputEmail4">CPF:</label>
                        <input type="text" class="form-control" id="inputEmail4" placeholder="000.000.000-00" />
                    </div>
                    <div class="form-group col-md-3">
                        <label for="inputPassword4">Telefone:</label>
                        <input type="text" class="form-control" id="inputPassword4" placeholder="(62)" />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputEmail4">E-mail:</label>
                        <input type="text" class="form-control" id="inputEmail4" placeholder="Digite o E-mail" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Observação:</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div class="form-check form-switch col-md-3">
                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label class="form-check-label" for="flexSwitchCheckDefault">Ativo?</label>
                    </div>
                    <div class="d-grid gap-2 d-md-block">
                        <button class="btn btn-primary" type="button">Button</button>
                        <button class="btn btn-primary" type="button">Button</button>
                    </div>
                </div>


            </form>
        </div>
    )
}

export default CadastroUsuario;