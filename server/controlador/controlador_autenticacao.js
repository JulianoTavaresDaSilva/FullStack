import bcryptjs from "bcryptjs"
import { User } from "../db.js";
import jsonwebtoken from "jsonwebtoken"

const registro = async (req, res) => {
    const {nome, sobrenome, email, senha, dataNascimento} = req.body
    console.log(req.body)
    if (!nome || !sobrenome || !email || !senha || !dataNascimento){
        res.send('Você deve completar todos os campos.')
        return
    }
    const userExiste = await User.findOne({where: {email: email}})
    if (userExiste){
        res.send('Usuario ja existe!')
        return
    }
    const senhaCriptografada = bcryptjs.hashSync(senha, 10)

    const teste = await User.create({nome, sobrenome, email, senha: senhaCriptografada, dataNascimento})



    res.send('Usuário criado!')
}

const login = async (req, res) => {
    const {email, senha} = req.body
    console.log(req.body)
    if (!email || !senha){
        res.send('Preencha todos os campos.')
        return
    }
    const userExiste = await User.findOne({where: {email: email}})
    if (!userExiste){
        res.send('Usuario não existe!')
        return
    }
    const senhaValida = bcryptjs.compareSync(senha, userExiste.senha)
    if (!senhaValida){
        res.send('email ou senha invalido!')
        return
    }

    const token = jsonwebtoken.sign(
        {
             "nome_completo": `${userExiste.nome} ${userExiste.sobrenome}`,
            "email": userExiste.email,
            "status": userExiste.status,
        },
        'chavecriptografiajwt',
        {expiresIn: 1000*60*5}
)
console.log(token)


    res.send({
        msg: "Login efetuado com sucesso!",
        tokenJWT: token
    })
}

export { registro, login }