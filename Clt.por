programa {
  funcao inicio() {
    inteiro id, tempoTrabalhado
    real valorHora

    escreva("Qual o seu id? ")
    leia(id)

    escreva("Qual o valor recebido por horas trabalhadas? ")
    leia(valorHora)

    escreva("Quantas horas você trabalhou esse mês? ")
    leia(tempoTrabalhado)
    limpa()
    
    real salario = valorHora * tempoTrabalhado
    
    escreva("id: " + id)

    escreva("\nValor recebido: R$ " + salario)
    
  }
}
