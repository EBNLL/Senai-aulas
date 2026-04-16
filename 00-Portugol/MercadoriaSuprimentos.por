programa {
  funcao inicio() { real gastoComSuprimento, faturamentoItem, faturamentoIngressos

  escreva("Gastos com suprimento e mercadoria? ")
  leia(gastoComSuprimento)
  escreva("Quanto você faturou com ingressos?  ")
    leia(faturamentoIngressos)
    escreva("Quanto você faturou com itens? ")
    leia(faturamentoItem)
    real lucro = faturamentoIngressos + faturamentoItem - gastoComSuprimento

    escreva("Esse foi seu lucro esse mês: R$" + lucro)
    real porcentagemDeLucro = (lucro / gastoComSuprimento) * 100
    escreva("\nEssa foi a porcentagem de lucro: " + porcentagemDeLucro + "%")
    
  }
}
