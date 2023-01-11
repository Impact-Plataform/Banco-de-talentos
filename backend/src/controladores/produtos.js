const { v4: uuid } = require('uuid')
let { produtos } = require('../Banco de dados/dados')

const cadastrar = (req, res) => {
  const { nome, descricao, valorEmReal } = req.body
  const id = uuid()

  const nomeExistente = produtos.find(produtos => {
    return produtos.nome === nome
  })

  if (nomeExistente) {
    return res.status(403).json({
      mensagem: 'Já existe um produto com o nome informado!'
    })
  }

  if (nome && descricao && valorEmReal) {
    const novoProduto = {
      nome,
      id,
      descricao,
      valor: {
        BRL: `R$${valorEmReal}` /*,
        "USD": `$${valorEmDolar}`,
        "EUR": `€${valorEmEuro}`*/
      }
    }

    produtos.push(novoProduto)

    return res.status(200).json(novoProduto)
  } else {
    return res.status(403).json({
      mensagem: 'Preencha todos os dados corretamente!'
    })
  }
}

const listar = (req, res) => {
  return res.status(200).json(produtos)
}

const detalhar = (req, res) => {
  const { id } = req.params

  const produtoExistente = produtos.find(produtos => {
    return produtos.id === id
  })

  if (produtoExistente) {
    return res.status(200).json(produtoExistente)
  } else {
    return res.status(404).json({
      mensagem: 'Produto não encontrado!'
    })
  }
}

const editar = (req, res) => {
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
          return res.status(403).json({
            mensagem: 'Já existe um produto com o nome informado!'
          })
        }
      }

      const produtoEditado = {
        nome,
        id,
        descricao,
        valor: {
          BRL: `R$${valorEmReal}` /*,
    "USD": `$${valorEmDolar}`,
    "EUR": `€${valorEmEuro}`*/
        }
      }

      produtoExistente = produtoEditado

      return res.status(200).json({
        mensagem: 'Produto editado com sucesso!'
      })
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

const excluir = (req, res) => {
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
