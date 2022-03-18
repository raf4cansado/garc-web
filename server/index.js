const express = require("express")
const app = express()
const mysql = require("mysql")
const cors = require("cors")

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "dev-garc"
})

app.use(cors());
app.use(express.json());

app.post("/cadastro-usuario", (req, res) => {
    const { usuario } = req.body
    const { nome } = req.body
    const { cpf } = req.body
    const { telefone } = req.body
    const { email } = req.body
    const { ativo } = req.body

    let SQL = `
    insert into usuario (usuario , nome, cpf, telefone, email, ativo)
    values (?, ?, ?, ?, ?, ?)
    `
    db.query(SQL, [usuario, nome, cpf, telefone, email, ativo], (err, result) => {
        console.log(err)
    })
})

app.get("/visualizacao-usuario", (req, res) => {
    let SQL = `SELECT * FROM usuario`
    db.query(SQL, (err, result) => {
        if (err) console.log(err)
        else res.send(result)
    })
})

app.put("/editar-usuario", (req, res) => {
    const { usuario } = req.body
    const { nome } = req.body
    const { cpf } = req.body
    const { telefone } = req.body
    const { email } = req.body
    const { ativo } = req.body

    let SQL = `
        UPDATE usuario SET usuario = ?, nome = ?, cpf = ?, telefone = ?, email = ?, ativo = ?
        where id = ?
    `
    db.query(SQL, [usuario, nome, cpf, telefone, email, ativo], (err, result) => {
        if (err) console.log(err)
        else res.send(result)
    })

    console.log(SQL, "aqui")
})



app.listen(3000, () => {
    console.log("rodando servidor")
})