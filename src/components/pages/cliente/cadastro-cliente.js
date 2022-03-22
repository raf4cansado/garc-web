import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
function CadastroCliente() {
    return (
        <div>


            <div className="container p-5 mb-3 bg-light text-dark">
                <h2>Cadastro Cliente</h2>
                <form>

                    <div className="row">
                        <div className="form-group col-md-8">
                            <label for="inputEmail4">Nome:</label>
                            <input type="text" className="form-control" name="nome" id="nome" placeholder="Nome" />
                        </div>
                        <div className="form-group col-md-3">
                            <label for="inputEmail4">CPF:</label>
                            <input type="text" className="form-control" name="cpf" id="cpf" placeholder="CPF" />
                        </div>
                        <div className="form-group col-md-7">
                            <label for="inputEmail4">Endereço:</label>
                            <input type="text" className="form-control" name="endereco" id="endereco" placeholder="Endereço" />
                        </div>
                        <div className="form-group col-md-5">
                            <label for="inputEmail4">Complemento:</label>
                            <input type="text" className="form-control" name="complemento" id="complemento" placeholder="Complemento" />
                        </div>
                        <div className="form-group col-md-3">
                            <label for="inputPassword4">Telefone:</label>
                            <input type="text" className="form-control" name="telefone" id="telefone" placeholder="Telefone" />
                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputEmail4">Email:</label>
                            <input type="email" className="form-control" name="email" id="email" placeholder="Email" />
                        </div>

                    </div>
                </form>
            </div>

            <div className="container p-5 mb-3 bg-light text-dark" >
                <h2>Pet:</h2>
                <form>
                    <div className="row">
                        <div className="form-group col-md-5">
                            <label for="inputEmail4">Nome do animal:</label>
                            <input type="text" className="form-control" name="pet_nome" id="pet_nome" placeholder="Escreva aqui..." />
                        </div>
                        <div className="col-md-3">
                            <label for="validationCustom04" className="form-label">Sexo:</label>
                            <select className="form-select" name="sexo_pet" id="sexo_pet">
                                <option selected disabled value="">Choose...</option>
                                <option>Masculino</option>
                                <option>Feminino</option>
                            </select>
                        </div>
                        <div className="form-group col-md-1">
                            <label for="inputPassword4">Especié::</label>
                            <input type="number" className="form-control" name="tipo_pet" id="tipo_pet" />
                        </div>
                        <div className="form-group col-md-3">
                            <label for="inputEmail4">Raça do animal:</label>
                            <input type="text" className="form-control" name="raca_pet" id="raca_pet" placeholder="Escreva aqui..." />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label">Observação:</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                    </div>
                    <div>
                        <input className="btn btn-primary" type="submit" value="Cadastrar" />
                        <input className="btn btn-primary" type="submit" value="Cancelar" />
                    </div>
                </form>
            </div >
        </div >
    )
}

export default CadastroCliente;