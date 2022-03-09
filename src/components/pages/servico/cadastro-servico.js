import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


function CadastroServico() {
    return (
        <div class="container p-5 mb-3 bg-light text-dark">
            <h2>Vendas</h2>
            <form>
                <div class="row">
                    <div class="form-group col-md-1">
                        <label for="inputPassword4">Cod.</label>
                        <input class="form-control" type="text" placeholder="COD " readonly />
                    </div>
                    <div class="form-group col-md-3">
                        <label for="inputEmail4">Produto:</label>
                        <input type="text" class="form-control" id="inputEmail4" placeholder="Nome Produto" />
                    </div>
                    <div class="form-group col-md-5">
                        <label for="inputPassword4">Marca:</label>
                        <input type="text" class="form-control" id="inputPassword4" placeholder="Marca" />
                    </div>
                    <div class="form-group col-md-5">
                        <label for="inputPassword4">Marca:</label>
                        <input type="text" class="form-control" id="inputPassword4" placeholder="Marca" />
                    </div>
                    <div class="col-md-3">
                        <label for="validationCustom04" class="form-label">Tipo Produto</label>
                        <select class="form-select" id="validationCustom04" required>
                            <option selected disabled value="">Choose...</option>
                            <option>Administrador</option>
                            <option>Venda</option>
                        </select>
                    </div>
                    <div class="form-group col-md-3">
                        <label for="inputEmail4">Cod. de Barras:</label>
                        <input type="text" class="form-control" id="inputEmail4" placeholder="Cod. de Barras" />
                    </div>
                    <div class="form-group col-md-2">
                        <label for="inputPassword4">Valor:</label>
                        <input type="text" class="form-control" id="inputPassword4" placeholder="R$" />
                    </div>

                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Descrição:</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div class="form-check form-switch col-md-3">
                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label class="form-check-label" for="flexSwitchCheckDefault">Ativo?</label>
                    </div>
                    <div class="d-grid gap-2 d-md-block">
                        <button class="btn btn-primary" type="button">Cadastrar</button>
                        <button class="btn btn-primary" type="button">Cancelar</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CadastroServico;