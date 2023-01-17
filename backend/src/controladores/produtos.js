const { v4: uuid } = require('uuid')
const api = require('../Banco de dados/api')
let produtos = []

const cadastrar = async (req, res) => {
  const { nome, descricao, valorEmReal } = req.body
  const id = uuid()

  const nomeExistente = produtos.find(produtos => {
    return produtos.nome === nome
  })

  if (nomeExistente) {
    return res.status(400).json({
      mensagem: 'Já existe um produto com o nome informado!'
    })
  }

  if (nome && descricao && valorEmReal) {
    try {
      const url = 'https://economia.awesomeapi.com.br/all'
      const { data } = await api.get(url)

      const cotacaoDolar = data.USD.bid
      const cotacaoEuro = data.EUR.bid

      const valorEmDolar = parseFloat(valorEmReal) / parseFloat(cotacaoDolar)
      const valorEmEuro = parseFloat(valorEmReal) / parseFloat(cotacaoEuro)

      const novoProduto = {
        nome,
        id,
        descricao,
        valor: {
          BRL: valorEmReal,
          USD: valorEmDolar.toFixed(2),
          EUR: valorEmEuro.toFixed(2)
        }
      }

      produtos.push(novoProduto)

      return res.status(200).json(novoProduto)
    } catch (error) {
      res.send({ error: error.message })
    }
  } else {
    return res.status(403).json({
      mensagem: 'Preencha todos os dados corretamente!'
    })
  }
}

const listar = async (req, res) => {
  let produtosAtualizados = []

  try {
    const url = 'https://economia.awesomeapi.com.br/all'
    const { data } = await api.get(url)

    const cotacaoDolar = data.USD.bid
    const cotacaoEuro = data.EUR.bid

    for (let i = 0; i < produtos.length; i++) {
      const valorEmReal = produtos[i].valor.BRL
      const valorEmDolar = valorEmReal / parseFloat(cotacaoDolar)
      const valorEmEuro = valorEmReal / parseFloat(cotacaoEuro)

      const novoProduto = {
        nome: produtos[i].nome,
        id: produtos[i].id,
        descricao: produtos[i].descricao,
        valor: {
          BRL: valorEmReal,
          USD: valorEmDolar.toFixed(2),
          EUR: valorEmEuro.toFixed(2)
        }
      }

      produtosAtualizados.push(novoProduto)
    }

    produtos = produtosAtualizados

    if (!produtos.length) {
      return res.status(404).json({
        mensagem: 'Nenhum produto cadastrado!'
      })
    }

    return res.status(200).json(produtos)
  } catch (error) {
    res.send({ error: error.message })
  }
}

const detalhar = async (req, res) => {
  const { id } = req.params

  let produtoExistente = produtos.find(produtos => {
    return produtos.id === id
  })

  if (produtoExistente) {
    try {
      const url = 'https://economia.awesomeapi.com.br/all'
      const { data } = await api.get(url)

      const cotacaoDolar = data.USD.bid
      const cotacaoEuro = data.EUR.bid

      const valorEmReal = produtoExistente.valor.BRL
      const valorEmDolar = valorEmReal / parseFloat(cotacaoDolar)
      const valorEmEuro = valorEmReal / parseFloat(cotacaoEuro)

      let produtoAtualizado = {
        nome: produtoExistente.nome,
        id: produtoExistente.id,
        descricao: produtoExistente.descricao,
        valor: {
          BRL: valorEmReal,
          USD: valorEmDolar.toFixed(2),
          EUR: valorEmEuro.toFixed(2)
        }
      }

      produtoExistente = produtoAtualizado

      return res.status(200).json(produtoAtualizado)
    } catch (error) {
      res.send({ error: error.message })
    }
  } else {
    return res.status(404).json({
      mensagem: 'Produto não encontrado!'
    })
  }
}

const editar = async (req, res) => {
  const { id } = req.params
  const { nome, descricao, valorEmReal } = req.body

  let produtoExistente = produtos.find(produtos => {
    return produtos.id === id
  })

  if (produtoExistente) {
    if (nome && descricao && valorEmReal) {
      const nomeExistente = produtos.find(produtos => {
        return produtos.nome === nome
      })

      if (nomeExistente) {
        if (nomeExistente.id !== produtoExistente.id) {
          return res.status(400).json({
            mensagem: 'Já existe um produto com o nome informado!'
          })
        }
      }

      try {
        const url = 'https://economia.awesomeapi.com.br/all'
        const { data } = await api.get(url)

        const cotacaoDolar = data.USD.bid
        const cotacaoEuro = data.EUR.bid

        const valorEmDolar = valorEmReal / parseFloat(cotacaoDolar)
        const valorEmEuro = valorEmReal / parseFloat(cotacaoEuro)

        let produtoAtualizado = {
          nome,
          id,
          descricao,
          valor: {
            BRL: valorEmReal,
            USD: valorEmDolar.toFixed(2),
            EUR: valorEmEuro.toFixed(2)
          }
        }

        const i = produtos.indexOf(produtoExistente)

        produtos[i] = produtoAtualizado

        return res.status(200).json({
          mensagem: 'Produto editado com sucesso!'
        })
      } catch (error) {
        res.send({ error: error.message })
      }
    } else {
      return res.status(403).json({
        mensagem: 'Preencha todos os campos!'
      })
    }
  } else {
    return res.status(404).json({
      mensagem: 'Produto não encontrado!'
    })
  }
}

const excluir = async (req, res) => {
  const { id } = req.params

  const produtoExistente = produtos.find(produtos => {
    return produtos.id === id
  })

  if (produtoExistente) {
    produtos = produtos.filter(produtos => {
      return produtos.id !== id
    })

    return res.status(200).json({
      mensagem: 'Produto excluído com sucesso!'
    })
  } else {
    return res.status(404).json({
      mensagem: 'Produto não encontrado, informe um id válido!'
    })
  }
}

module.exports = { cadastrar, listar, detalhar, editar, excluir }
