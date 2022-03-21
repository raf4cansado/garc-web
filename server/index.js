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

// ================================================================= CRUD USUARIO ===================================================================
app.post("/cadastro-usuario", (req, res) => {
    const { usuario } = req.body
    const { nome } = req.body
    const { cpf } = req.body
    const { telefone } = req.body
    const { email } = req.body
    const { ativo } = req.body
    const { senha } = req.body

    let SQL = `
    INSERT INTO usuario (usuario, nome, cpf, telefone, email, ativo, senha)
    values (?, ?, ?, ?, ?, ?, ?)
    `
    db.query(SQL, [usuario, nome, cpf, telefone, email, ativo, senha], (err, result) => {
        if (err) console.log(err)
        else res.send(result)

    })
})

app.get("/consulta-usuario", (req, res) => {
    let SQL = `SELECT * FROM usuario`
    db.query(SQL, (err, result) => {
        if (err) console.log(err)
        else res.send(result)
    })
})

app.get("/obter-usuario/:id", (req, res) => {
    const id = req.params.id
    let SQL = `
        SELECT * FROM usuario WHERE id_usuario= ${id};
    `
    db.query(SQL, (err, result) => {
        if (err) console.log(err)
        else res.send(result)
    })

})

app.put("/alterar-usuario", (req, res) => {
    const obj = req.body
    let SQL = `
        UPDATE usuario SET usuario = ?, nome = ?, cpf = ?, telefone = ?, email = ?, ativo = ?, senha = ?
        where id_usuario = ?
    `
    db.query(SQL, [obj.usuario, obj.nome, obj.cpf, obj.telefone, obj.email, obj.ativo, obj.senha, obj.id], (err, result) => {
        if (err) console.log(err)
        else res.send(result)
    })
})

app.delete("/deletar-usuario/:id", (req, res) => {
    const id = req.params.id
    let SQL = `
        DELETE FROM usuario WHERE id_usuario= ${id};
    `
    db.query(SQL, (err, result) => {
        if (err) console.log(err)
        else res.send(result)
    })

})

// ================================================================= CRUD Produto ===================================================================

app.post("/cadastro-produto", (req, res) => {
    const { nome_produto, marca, tipo_produto, codigo_barras, quantidade, valor_produto, descricao } = req.body

    let SQL = `
        INSERT INTO produto (nome_produto, marca, tipo_produto, codigo_barras, quantidade, valor_produto, descricao)
        values (?,?,?,?,?,?,?)
    `
    
    db.query(SQL, [nome_produto, marca, tipo_produto, codigo_barras, quantidade, valor_produto, descricao], (err, result) => {
        if (err) console.log(err)
        else res.send(result)
    })
})

app.get("/consulta-produto", (req, res) => {
    let SQL = `SELECT * FROM produto`
    db.query(SQL, (err, result) => {
        if (err) console.log(err)
        else res.send(result)
    })
})



app.listen(3000, () => {
    console.log("up!")
})