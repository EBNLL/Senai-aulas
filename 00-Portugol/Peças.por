programa {
  funcao inicio() {
    inteiro codigoProduto
    inteiro codigoProduto2
    inteiro quantidade
    inteiro quantidade2
    real preco = 5.30
    real preco2 = 5.10

    escreva("Qual o código da peça? ")
    leia(codigoProduto)

    escreva("Quantas peças você quer? ")
    leia(quantidade)

    escreva("Qual o código da segunda peça? ")
    leia(codigoProduto2)

    escreva("Quantas peças você quer? ")
    leia(quantidade2)

    real precoTotal = (preco * quantidade) + (quantidade2 * preco2)

    escreva("Valor: R$" + precoTotal)
    

  }
}
