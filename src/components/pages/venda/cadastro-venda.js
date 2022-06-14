import React, { useState, useEffect } from "react";
import { useForm, useFieldArray, Controller, useWatch } from "react-hook-form";
import { Link, useParams, useNavigate } from "react-router-dom";
import mapValues from "lodash/mapValues";
import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../style.css"
import AsyncSelect from 'react-select/async';

function CadastroServico() {

    const { register, handleSubmit, getValues, setValue, formState: { errors }, control, reset, watch } = useForm({
        shouldUnregister: false,
        defaultValues: {
            produtos: [{ produto: "", quantidade: "", valor_produto: "" }]
        }
    });
    const [data, setData] = useState();
    const [valorTotal, setValorTotal] = useState();
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        setValorTotal(getValues().produtos.map(x => x.valor_produto * (x.quantidade || 1)).reduce((pcc, cv) => pcc + cv, 0))


    }, [getValues().produtos])

    useEffect(() => {
        if (id) {
            Axios.get("http://localhost:3000/obter-venda/" + id, { id: id }).then((response) => {
                mapValues(response.data[0], (value, key) => setValue(key, value));
            })
        }

    }, [id])


    const InputCliente = (props) => {
        const [data, setData] = useState([])
        const filtrar = (value, inputValue) => value.filter(i => i.label.toLowerCase().includes(inputValue.toLowerCase()))
        const promiseOptions = inputValue => Promise.resolve(Axios.get("http://localhost:3000/combo-cliente")).then(value => filtrar(value.data.map(x => JSON.parse(x.cliente)), inputValue))

        useEffect(() => {
            Axios.get("http://localhost:3000/combo-cliente").then(response => setData(response.data.map(x => JSON.parse(x.cliente))))
        }, [])

        return (
            <>
                <AsyncSelect
                    {...props}
                    tamanho={props.tamanho}
                    label={props.label}
                    name={props.name}
                    placeholder={'Cliente'}
                    loadOptions={promiseOptions}
                    defaultOptions={data}
                    onChange={option => {
                    setValue(props.name, option)
                    setValue('cpf', option.cpf)
                    setValue('data_nascimento', option.data_nascimento)
                    setValue('email', option.email)
                    setValue('endereco', option.endereco)
                    setValue('complemento', option.complemento)
                }}
                />
            </>
        )
    }

    const InputProduto = (props) => {
        const [data, setData] = useState([])
        const filtrar = (value, inputValue) => value.filter(i => i.label.toLowerCase().includes(inputValue.toLowerCase()))
        const promiseOptions = inputValue => Promise.resolve(Axios.get("http://localhost:3000/combo-produto")).then(value => filtrar(value.data.map(x => JSON.parse(x.produto)), inputValue))

        useEffect(() => {
            Axios.get("http://localhost:3000/combo-produto").then(response => setData(response.data.map(x => JSON.parse(x.produto))))
        }, [])
        return (
            <>
                <AsyncSelect
                    {...props}
                    tamanho={props.tamanho}
                    label={props.label}
                    name={props.name}
                    placeholder={'Produto'}
                    loadOptions={promiseOptions}
                    defaultOptions={data}
                />
            </>
        )
    }

    const FieldArrayProduto = () => {

        const [listProdutos, setListProdutos] = useState();

        useEffect(() => {
            ObterDados();
        }, [])

        const ObterDados = () => {
            Axios.get("http://localhost:3000/consulta-produto").then((response) => {
                setListProdutos(response.data);

            })
        }


        const {
            fields,
            append,
            remove,
            update,
        } = useFieldArray({
            control,
            name: "produtos"
        });

        return (
            <div>
                <ul>
                    {fields.map((item, index) => {
                        return (

                            <div key={item.id} className="row">
                                <div className="form-group col-md-4">
                                    <label htmlFor="produto">Produto</label>
                                    <Controller
                                        name={`produtos[${index}].produto`}
                                        control={control}
                                        render={({ field }) => (
                                            <InputProduto id={`produtos[${index}].produto`}
                                                {...field} onChange={option => {
                                                    update(index, { produto: option, valor_produto: option.valor_produto })
                                                }} />
                                        )}
                                    />
                                </div>
                                <div className="form-group col-md-2">
                                    <label htmlFor="valor_produto">Valor Unitário</label>
                                    <input type="text" className="form-control"{...register(`produtos[${index}].valor_produto`)} name={`produtos[${index}].valor_produto`} id={`produtos[${index}].valor_produto`}/>
                                </div>
                                <div className="form-group col-md-2">
                                    <label htmlFor="quantidade">Quantidade</label>
                                    <input type="text" className="form-control"{...register(`produtos[${index}].quantidade`)} name={`produtos[${index}].quantidade`} id={`produtos[${index}].quantidade`} />
                                </div>

                                <button className="btnVenda btn btn-dark" onClick={() => remove(index)}>Excluir</button>
                                <button className=" btnVenda btn btn-dark"
                                    type="button"
                                    onClick={() => {
                                        append({ produto: "", quantidade: "", valor_produto: "" });
                                    }}
                                >Adicionar</button>
                            </div>
                        );
                    })}
                </ul>
                <div className="form-group col-md-2">
                    <label htmlFor="valor_total">Valor Total: R$ {valorTotal}</label>
                </div>

            </div>
        );
    }


    const Salvar = (data) => {
        if (id) {
            Axios.put("http://localhost:3000/alterar-venda", {
                id: id,
                ...data
            }).then((response) => {
                navigate('/consulta-venda')
            })
        } else {
            Axios.post("http://localhost:3000/cadastro-venda", data).then((response) => {
                navigate('/consulta-venda')
                alert("Pedido Feito!")


            })
        }

    }


    return (
        <div className="container p-5 mb-3 bg-light text-dark" style={{ marginTop: 30 }}>
            <h2>{'Dados do Cliente'}</h2>
            <form onSubmit={handleSubmit(Salvar)}>
                <div className="row">
                    <div className="form-group col-md-9">
                        <label htmlFor="nome">Nome / Razão Social:</label>
                        <Controller
                            name={`nome`}
                            control={control}
                            render={({ field }) => (
                                <InputCliente name="nome" id="nome"
                                    {...field} />
                            )}
                        />
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="cpf">CPF / CNPJ:</label>
                        <input type="text" className="form-control"{...register("cpf")} name="cpf" id="cpf" placeholder="CPF / CNPJ" />
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="data_nascimento">Data de Nascimento:</label>
                        <input type="text" className="form-control"{...register("data_nascimento")} name="data_nascimento" id="data_nascimento" placeholder="Data de Nascimento:" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="email">Email:</label>
                        <input type="email" className="form-control"{...register("email")} name="email" id="email" placeholder="Email" />
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="telefone">Telefone:</label>
                        <input type="text" className="form-control" {...register("telefone")} name="telefone" id="telefone" placeholder="Telefone" />
                    </div>

                    <div className="form-group col-md-7">
                        <label htmlFor="endereco">Endereço:</label>
                        <input type="text" className="form-control" {...register("endereco")} name="endereco" id="endereco" placeholder="Endereço" />
                    </div>
                    <div className="form-group col-md-5">
                        <label htmlFor="complemento">Complemento:</label>
                        <input type="text" className="form-control" {...register("complemento")} name="complemento" id="complemento" placeholder="Complemento" />
                    </div>
                </div>

                <h2>{'Produtos'}</h2>
                <div className="row">
                    <FieldArrayProduto />
                </div>
                <input className="btnCadastrar btn btn-dark" type="submit" />




            </form>

        </div>

    )
}


export default CadastroServico;


