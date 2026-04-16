programa {
  funcao inicio() {
      inteiro valortotal, notas

    escreva("Quanto você tem? R$")
    leia(valortotal)

       notas = valortotal / 100
    escreva(notas, " Notas de R$100\n")
    valortotal = valortotal % 100
     
       notas = valortotal / 50
    escreva(notas, " Notas de R$50\n")
    valortotal = valortotal % 50
     
       notas = valortotal / 20
    escreva(notas, " Notas de R$20\n")
    valortotal = valortotal % 20
     
       notas = valortotal / 10
    escreva(notas, " Notas de R$10\n")
    valortotal = valortotal % 10
     
       notas = valortotal / 5
    escreva(notas, " Notas de R$5\n")
    valortotal = valortotal % 5
     
       notas = valortotal / 2
    escreva(notas, " Notas de R$2\n")
    valortotal = valortotal % 2
     
       notas = valortotal / 1
    escreva(notas, " Notas de R$1\n")
    valortotal = valortotal % 1
    
    
  }
}
