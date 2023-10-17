import express from 'express'
import {
  servicoBuscarfatoPorAno,
  servicoValidaAno
} from './servicos/servicos.js'

const app = express()

app.get('/', (req, res) => {
  let anoFato = req.query.ano
  if (servicoValidaAno(anoFato)) {
    let fato = servicoBuscarfatoPorAno(anoFato)
    res.json({ fato: fato })
  } else {
    res.status(400).json({ erro: 'Parâmetro ano ivalido' })
  }
})

app.listen(8080, () => {
  let data = new Date()
  console.log('Servidor iniciado em ' + data)
})
