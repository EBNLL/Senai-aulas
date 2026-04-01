programa {
  funcao inicio() { real clt, pj, estag
    
    escreva("Quantos CLTs tem na sua empresa? ")
    leia(clt)
    limpa()

    escreva("Quantos PJ tem na sua empresa? ")
    leia(pj)
    limpa()

    escreva("Quantos estagiários tem na sua empresa? ")
    leia(estag)
    limpa()

    real total = clt + pj + estag

    escreva("Esse é o total de pessoas na sua empresa: " + total)

  }
}
