programa {
  funcao inicio() {
    inteiro cliente
    real denis = 500
    real valor = 350

    escreva("Quantas horas você quer que Junin fique programando? ")
    leia(cliente)
    
    real lucro = cliente * valor 
    real lucroTotal = lucro - denis
    escreva("Esse foi quanto Junin ganhou no free R$" + lucro)
    escreva("\nEsse é o lucro total do Junin R$" + lucroTotal)

    
  }
}
