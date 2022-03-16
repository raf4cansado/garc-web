const express = require("express")
const app = express()
const mysql = require("mysql")
const cors = require("cors")

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "cadastro"
})

app.use(cors());
app.use(express.json());

app.post("/cadastro-usuario", (req,res) => {
    const {nome } = req.body
    const {descricao } = req.body
    const {carga } = req.body
    const {totaulas } = req.body
    const {ano } = req.body

    let SQL = `
    insert into cursos (nome, descricao, carga, totaulas, ano)
    values (?, ?, ?, ?, ?)
    `
    db.query(SQL,[nome, descricao, carga, totaulas, ano], (err, result) => {
        console.log(err)
    })
})

app.get("/visualizacao-usuario", (req,res) =>{
    let SQL = `SELECT * FROM cursos`
    db.query(SQL, (err, result) =>{
        if (err) console.log(err)
        else res.send(result)
    })
})

app.listen(3000, () => {
    console.log("rodando servidor")
})