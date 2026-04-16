programa {
  funcao inicio() { real preco, qntTrocados
  
    
    
    escreva("Preço dos sapatos: ")
    leia(preco)
    limpa()
    
    escreva("quantidade de sapatos trocados: ")
    leia(qntTrocados)
    limpa()
    
    real valeTrocas = preco * qntTrocados

    escreva("Este é o valor que a empresa vai receber de vale troca: R$" + valeTrocas)
  }
}
