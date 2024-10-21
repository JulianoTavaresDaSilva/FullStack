import Express from "express";

const app = Express()
app.use(Express.json())

app.post('/registro', (req, res) => {
    const {nome, sobrenome, email, senha, dataNascimento} = req.body
    if (!nome || !sobrenome || !email || !senha || !dataNascimento){
        res.send('voce deve completar todos os campos')
        return
    }
    res.send('Usuário criado!')
})

app.listen(8000)