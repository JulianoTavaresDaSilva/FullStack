import Express from "express";
// import { criarTabelas } from "./db.js";
import cors from "cors"
import { rotas } from "./roteamento/rotas_autenticacao.js"

const app = Express()
app.use(Express.json())
app.use(cors())
app.use('/autenticacao', rotas)
// criarTabelas()

app.listen(8000)