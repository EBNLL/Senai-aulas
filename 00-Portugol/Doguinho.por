programa {
  funcao inicio() {
    inteiro idadCachorro

    escreva("Qual idade do seu cachorro? ")
    leia(idadCachorro)
    
    inteiro idadeHumana = idadCachorro * 7

    se(idadeHumana > 60){
      escreva("Seu doguinho já pode se aposentar")
    }
    senao{
      escreva("Seu doguinho ainda não pode se aposentar")
    }

  }
}
