programa {
  funcao inicio() {
    inteiro pontos

    escreva("Qual sua pontuação no jogo? ")
    leia(pontos)

    se(pontos <= 10){
    
    escreva("Deu ruim...")

    }
    senao{se(pontos > 10 e pontos <=100){

      escreva("Tá...")
    }
    senao{se(pontos > 100 e pontos <= 200)
      escreva("Supimpa!")
    
    senao{
    escreva("MITOU!!!!")
     }
     }
    }
    
  }
}
