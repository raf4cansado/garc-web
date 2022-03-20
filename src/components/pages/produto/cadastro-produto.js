import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function CadastroProduto() {
    return (
        <div className="container p-5 mb-3 bg-light text-dark">
            <h2>Cadastro Produto</h2>
            <form>
                <div className="row">
                    <div className="form-group col-md-3">
                        <label for="inputEmail4">Produto:</label>
                        <input type="text" className="form-control" name="prduto" id="produto" placeholder="Produto" />
                    </div>
                    <div className="form-group col-md-5">
                        <label for="inputPassword4">Marca:</label>
                        <input type="text" className="form-control" name="marca"id="marca" placeholder="Marca" />
                    </div>
                    <div className="form-group col-md-2">
                        <label for="inputPassword4">Quantidade:</label>
                        <input type="number" className="form-control" name="quantidade" id="quantidade"/>
                    </div>
                    <div className="col-md-3">
                        <label for="validationCustom04" className="form-label">Tipo Produto</label>
                        <select className="form-select" id="validationCustom04" required>
                            <option selected disabled value="">Choose...</option>
                            <option>Administrador</option>
                            <option>Venda</option>
                        </select>
                    </div>
                    <div className="form-group col-md-3">
                        <label for="inputEmail4">Cod. de Barras:</label>
                        <input type="text" className="form-control" id="inputEmail4" placeholder="Cod. de Barras" />
                    </div>
                    <div className="form-group col-md-2">
                        <label for="inputPassword4">Valor:</label>
                        <input type="text" className="form-control" id="inputPassword4" placeholder="R$" />
                    </div>

                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Descrição:</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className="form-check form-switch col-md-3">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" for="flexSwitchCheckDefault">Ativo?</label>
                    </div>
                    <div className="d-grid gap-2 d-md-block">
                        <button className="btn btn-primary" type="button">Cadastrar</button>
                        <button className="btn btn-primary" type="button">Cancelar</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CadastroProduto;