const api = require('../Banco de dados/api')

const listar = async (req, res) => {
  try {
    const url = 'https://economia.awesomeapi.com.br/all'
    const { data } = await api.get(url)

    let currency = []

    for (let item in data) {
      let novaCotacao = {
        codigo: item,
        nome: data[item]['name'],
        maxima: data[item]['high'],
        minima: data[item]['low'],
        compra: data[item]['bid'],
        venda: data[item]['ask'],
        dataEhora: data[item]['create_date']
      }

      currency.push(novaCotacao)
    }

    return res.status(200).json(currency)
  } catch (error) {
    res.send({ error: error.message })
  }
}

const detalhar = async (req, res) => {
  const { symbol } = req.params

  try {
    const url = 'https://economia.awesomeapi.com.br/all'
    const { data } = await api.get(url)

    let currency = {}

    for (let item in data) {
      if (item === symbol) {
        currency = {
          codigo: item,
          nome: data[item]['name'],
          maxima: data[item]['high'],
          minima: data[item]['low'],
          compra: data[item]['bid'],
          venda: data[item]['ask'],
          dataEhora: data[item]['create_date']
        }

        return res.status(200).json(currency)
      }
    }

    if (!currency.length) {
      return res.status(404).json({
        mensagem: 'Moeda não encontrada!'
      })
    }
  } catch (error) {
    res.send({ error: error.message })
  }
}

module.exports = { listar, detalhar }
