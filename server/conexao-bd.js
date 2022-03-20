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

app.listen(3000, () => {
    console.log("up!")
})
app.use(cors());
app.use(express.json());

export {db, app, mysql};