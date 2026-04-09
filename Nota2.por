programa {
  funcao inicio() {
    real notaA
    real notaB
    real notaC

    escreva("Nota A: ")
    leia(notaA)
    escreva("Nota B: ")
    leia(notaB)
    escreva("Nota C: ")
    leia(notaC)

    real notaTotal = ((notaA * 2) + (notaB * 3) + (notaC * 5)) / 10

    escreva("Nota: " + notaTotal)
  }
}
