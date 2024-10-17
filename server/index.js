import { createServer } from 'node:http'


const servidor = createServer((req, res) => {
    res.write('ta funcionando')

    return res.end()
})

servidor.listen(8000)