programa {
  funcao inicio() { real vitorias, empates

  escreva("Quantas vitórias seu time teve? ")
  leia(vitorias)

  escreva("Quantos empates seu time teve? ")
  leia(empates)
  
  real pontos = (vitorias * 3) + empates
  escreva("Esse foi o total de pontos que seu time teve na temporada: " + pontos)

  }
}
