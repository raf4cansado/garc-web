const express = require("express")
const app = express()
const mysql = require("mysql")
const cors = require("cors")
const { result } = require("lodash")
const { AppBar } = require("@material-ui/core")
const moment = require("moment")

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "dev-garc"
})

app.use(cors());
app.use(express.json());

app.listen(3000, () => {
    console.log("up!")
})

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

    const { nome_produto, marca, tipo_produto, codigo_barras, valor_produto, descricao } = req.body

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
    let SQL = `select a.id_produto, a.nome_produto, a.marca, a.tipo_produto, a.codigo_barras, a.valor_produto, a.descricao, b.quantidade
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

    db.query(SQL, [obj.nome_produto, obj.marca, obj.tipo_produto, obj.codigo_barras, obj.valor_produto, obj.descricao, obj.id_produto],
        (err, result) => {
            if (err) console.log(err)
            else res.send(result)
        })


})

app.delete('/deletar-produto/:id', (req, res) => {
    const id = req.params.id
    let SQL = `
        DELETE FROM produto WHERE id_produto = ${id}
    `
    db.query(SQL, (err, result) => {
        if (err) console.log(err)
        else res.send(result)
    })
})



// ================================================================= CRUD Cliente ===================================================================
app.post('/cadastro-cliente', (req, res) => {
    const { nome, cpf, data_nascimento, endereco, complemento, telefone, email } = req.body

    let SQL = `
    INSERT INTO cliente (nome, cpf, data_nascimento, endereco, complemento, telefone, email, data_registro) 
    values (?, ?, ?, ?, ?, ?, ?, now()) 
    `
    db.query(SQL, [nome, cpf, data_nascimento, endereco, complemento, telefone, email], (err, result) => {
        if (err) console.log(err)
        else res.send(result)
    })
})

app.get("/consulta-cliente", (req, res) => {
    let SQL = `
            SELECT * FROM cliente;
    `
    db.query(SQL, (err, result) => {
        if (err) console.log(err)
        else res.send(result)
    })
})

app.get("/obter-cliente/:id", (req, res) => {
    let id = req.params.id
    let SQL = `
    SELECT * FROM cliente WHERE  id_cliente = ${id}; 
    `
    db.query(SQL, (err, result) => {
        if (err) console.log(err)
        else res.send(result)
    })
})

app.put("/alterar-cliente", (req, res) => {
    const obj = req.body
    let SQL = `
     UPDATE cliente SET  nome = ?, cpf = ?, data_nascimento = ?, endereco = ?, complemento = ?, telefone = ?, email = ? 
     WHERE id_cliente = ?
    `

    db.query(SQL, [obj.nome, obj.cpf, obj.data_nascimento, obj.endereco, obj.complemento, obj.telefone, obj.email, obj.id_cliente], (err, result) => {
        if (err) console.log(err)
        else res.send(result)
    })
})

app.delete("/deletar-cliente/:id", (req, res) => {
    const id = req.params.id

    let SQL = `
    DELETE FROM cliente WHERE id_cliente = ${id}
    `

    db.query(SQL, (err, result) => {
        if (err) console.log(err)
        else res.send(result)
    })
})

// ================================================================= CRUD Vendas ===================================================================
app.post("/cadastro-venda", async (req, res) => {
    let retorno = {}
    const { nome, produtos } = req.body
    const objVenda = {
        id_cliente: nome.value
    }

    let idVenda = 0

    let SQL = `
    INSERT INTO venda (id_cliente)
    values (?)
    `
    await db.query(SQL, [objVenda.id_cliente], (err, result) => {
        if (err) console.log(err)
        else {
            retorno = result
            idVenda = result.insertId
            for (let index = 0; index < produtos.length; index++) {
                if (produtos[index].produto && produtos[index].produto.value) {
                    const objProduto = {
                        VALOR: produtos[index].valor_produto,
                        QUANTIDADE: produtos[index].quantidade,
                        ID_PRODUTO: produtos[index].produto.value,
                        ID_VENDA: idVenda
                    }

                    let sqlProduto = `INSERT into itens_produtos (VALOR, QUANTIDADE, ID_PRODUTO, ID_VENDA)
                    VALUES (?, ?, ?, ?)`

                     db.query(sqlProduto, [objProduto.VALOR, objProduto.QUANTIDADE, objProduto.ID_PRODUTO, objProduto.ID_VENDA], (err, result) => {
                        if (err) console.log(err)
                    })

                }
            }
        }

    })

    res.send(retorno)
})

app.post("/cadastro-itens-produtos", (req, res) => {
    const { valor, quantidade, id_produto } = req.body

    let SQL = `
    INSERT INTO itens_produtos (valor, quantidade,  id_produto, id_venda)
    values (?, ?, ?, (select max(id_venda) from venda))
    `
    db.query(SQL, [valor, quantidade, id_produto], (err, result) => {
        if (err) console.log(err)
        else res.send(result)

    })
})

app.get("/consulta-venda", (req, res) => {
    let SQL = `    SELECT v.id_venda, v.nome_cliente_final, v.descricao, v.id_cliente, cliente.nome,
    v.id_usuario, DATE_FORMAT(v.data_venda,'%d/%m/%Y %Hh%im') as data_venda, (itens_produtos.valor * itens_produtos.quantidade)  , sum(itens_produtos.valor * itens_produtos.quantidade) as valor_total
    FROM venda v

    inner join cliente on ( cliente.id_cliente = v.id_cliente)
    inner join itens_produtos on (itens_produtos.ID_VENDA = v.id_venda)
    
    group by
    itens_produtos.id_venda 
    order by
    itens_produtos.id_venda
    `
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
    const { id_produto, quantidade, descricao } = req.body

    let SQL = `
    INSERT INTO produto_entrada (data_registro, id_produto, quantidade)
    values (sysdate(), ?, ?)
    `

    db.query(SQL, [id_produto, quantidade], (err, result) => {
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
        'label', UPPER(concat(id_cliente , ' - ' , nome)),
        'cpf', cpf,
        'data_nascimento', data_nascimento,
        'email', email,
        'endereco', endereco,
        'complemento', complemento

    ) as cliente 
    FROM cliente  
    `

    db.query(SQL, (err, result) => {
        if (err) console.log(err)
        else res.send(result)
    })
})

// ===========================================COMBO Produto =====================================================

app.get("/combo-produto", (req, res) => {
    let SQL = `
    SELECT
    json_object (
        'value', id_produto,
        'label', UPPER(concat(id_produto , ' - ' , nome_produto)),
        'valor_produto', valor_produto
    ) as produto 
    FROM produto
    `

    db.query(SQL, (err, result) => {
        if (err) console.log(err)
        else res.send(result)
    })
})