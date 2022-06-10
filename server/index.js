const express = require("express")
const app = express()
const mysql = require("mysql")
const cors = require("cors")
const { result } = require("lodash")
const { AppBar } = require("@material-ui/core")

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
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
    db.query(SQL, [obj.usuario, obj.nome, obj.cpf, obj.telefone, obj.email, obj.ativo, obj.senha, obj.id_usuario], (err, result) => {
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
    
    const { nome_produto, marca, tipo_produto, codigo_barras,valor_produto, descricao } = req.body

    let SQL = `
        INSERT INTO produto (nome_produto, marca, tipo_produto, codigo_barras, valor_produto, descricao)
        values (?,?,?,?,?,?)
    `

    db.query(SQL, [nome_produto, marca, tipo_produto, codigo_barras, valor_produto, descricao], (err, result) => {
        if (err) console.log(err)
        else res.send(result)
    })
})

app.get("/consulta-produto", (req, res) => {
    let SQL = `select a.id_produto, a.nome_produto, a.marca, a.tipo_produto, a.codigo_barras, a.descricao, b.quantidade
    from produto a, estoque b
    where a.id_produto = b.id_produto`
    db.query(SQL, (err, result) => {
        if (err) console.log(err)
        else res.send(result)
    })

})

app.get("/obter-produto/:id", (req, res) => {
    const id = req.params.id
    let SQL = `SELECT * FROM produto WHERE id_produto = ${id}; `
    db.query(SQL, (err, result) => {
        if (err) console.log(err)
        else res.send(result)
    }) 
})

app.put('/alterar-produto', (req, res) => {
    const obj = req.body
    let SQL = `
        UPDATE produto SET nome_produto = ?, marca =?, tipo_produto = ?, codigo_barras = ?, valor_produto = ?, descricao = ? 
            where id_produto = ? 
    `

    db.query(SQL,[obj.nome_produto, obj.marca, obj.tipo_produto, obj.codigo_barras, obj.valor_produto, obj.descricao, obj.id_produto],
        (err, result) =>{
            if(err) console.log(err)
            else res.send(result)
        })


})

app.delete('/deletar-produto/:id', (req, res) =>{
    const id = req.params.id
    let SQL = `
        DELETE FROM produto WHERE id_produto = ${id}
    `
    db.query(SQL, (err, result) =>{
        if(err) console.log(err)
        else res.send(result)
    })
})

app.listen(3000, () => {
    console.log("up!")
})

// ================================================================= CRUD Cliente ===================================================================
app.post('/cadastro-cliente', (req, res) =>{
    const {nome, cpf, data_nascimento, endereco, complemento, telefone, email} = req.body

    let SQL = `
    INSERT INTO cliente (nome, cpf, data_nascimento, endereco, complemento, telefone, email, data_registro) 
    values (?, ?, ?, ?, ?, ?, ?, now()) 
    `
    db.query(SQL, [nome, cpf, data_nascimento, endereco, complemento, telefone, email], (err, result) =>{
        if(err) console.log(err)
        else res.send(result)
    } )
})

app.get("/consulta-cliente", (req, res) =>{
    let SQL = `
            SELECT * FROM cliente;
    `
    db.query(SQL, (err, result) =>{
        if(err) console.log(err)
        else res.send(result)
    })
})

app.get("/obter-cliente/:id", (req, res) =>{
    let id = req.params.id
    let SQL = `
    SELECT * FROM cliente WHERE  id_cliente = ${id}; 
    `
    db.query(SQL,(err, result) =>{
        if(err) console.log(err)
        else res.send(result)
    })
})

app.put("/alterar-cliente", (req, res) =>{
    const obj = req.body
    let SQL = `
     UPDATE cliente SET  nome = ?, cpf = ?, data_nascimento = ?, endereco = ?, complemento = ?, telefone = ?, email = ? 
     WHERE id_cliente = ?
    `

    db.query(SQL,[obj.nome, obj.cpf, obj.data_nascimento, obj.endereco, obj.complemento, obj.telefone, obj.email, obj.id_cliente], (err, result) =>{
        if(err) console.log(err)
        else res.send(result)
    })
})

app.delete("/deletar-cliente/:id", (req, res) =>{
    const id = req.params.id

    let SQL  =`
    DELETE FROM cliente WHERE id_cliente = ${id}
    `

    db.query(SQL, (err, result) =>{
        if(err) console.log(err)
        else res.send(result)
    })
})

// ================================================================= CRUD Vendas ===================================================================
app.post("/cadastro-venda", (req, res) => {
    const {id_cliente, nome_cliente_final, id_usuario,  descri} = req.body

    let SQL = `
    INSERT INTO venda (nome_cliente_final, descricao, id_cliente, id_usuario, data_venda)
    values (?, ?, ?, ?, sysdate())
    `
    db.query(SQL, [nome_cliente_final,  descri, id_cliente, id_usuario], (err, result) => {
        if (err) console.log(err)
        else res.send(result)

    })
})  

app.post("/cadastro-itens-produtos", (req, res) => {
    const {valor, quantidade,  id_produto} = req.body

    let SQL = `
    INSERT INTO itens_produtos (valor, quantidade,  id_produto, id_venda)
    values (?, ?, ?, (select max(id_venda) from venda))
    `
    db.query(SQL, [valor,  quantidade, id_produto], (err, result) => {
        if (err) console.log(err)
        else res.send(result)

    })
})

app.get("/consulta-venda", (req, res) => {
    let SQL = `SELECT v.id_venda, v.nome_cliente_final, v.descricao, v.id_cliente,
    v.id_usuario, DATE_FORMAT(v.data_venda,'%d/%m/%Y %Hh%im') as data_venda FROM venda v`
    db.query(SQL, (err, result) => {
        if (err) console.log(err)
        else res.send(result)
    })
})

app.get("/obter-venda/:id", (req, res) => {
    const id = req.params.id
    let SQL = `
        SELECT v.id_venda, v.nome_cliente_final, v.descricao, v.id_cliente,
        v.id_usuario, DATE_FORMAT(v.data_venda,'%d/%m/%Y') FROM venda v WHERE v.id_venda = ${id};
    `
    db.query(SQL, (err, result) => {
        if (err) console.log(err)
        else res.send(result)
    })

})// ================================================================= ENTRADA PRODUTO ===================================================================

app.post("/entrada-produtos", (req, res) => {
    const {id_produto, quantidade, descricao} = req.body

    let SQL = `
    INSERT INTO produto_entrada (data_registro, id_produto, quantidade)
    values (sysdate(), ?, ?)
    `

    db.query(SQL, [id_produto,  quantidade], (err, result) => {
        if (err) console.log(err)
        else res.send(result)

    })
})

app.get("/entrada-produtos/:id", (req, res) => {
    const id = req.params.id
    let SQL = `SELECT id_produto,nome_produto, marca FROM produto WHERE id_produto = ${id}; `
    db.query(SQL, (err, result) => {
        if (err) console.log(err)
        else res.send(result)
    }) 
})


// ===========================================COMBO CLIENTE =====================================================

app.get("/combo-cliente", (req, res) => {
    let SQL = `
    SELECT
    json_object (
        'value', id_cliente,
        'label', UPPER(concat(id_cliente , ' - ' , nome))
    ) as cliente 
    FROM cliente  
    `

    db.query(SQL, (err, result) => {
        if (err) console.log(err)
        else res.send(result)
    }) 
})