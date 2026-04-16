programa {
  funcao inicio() {
    real horasTrabalhadas
    real salarioPorHora
    inteiro id

    escreva("Qual seu id? ")
    leia(id)
    
    escreva("Quantas horas você trabalhou esse mês? ")
    leia(horasTrabalhadas)

    escreva("Quanto você recebe por hora? ")
    leia(salarioPorHora)
    limpa()
    real salario = horasTrabalhadas * salarioPorHora

    escreva("id: " + id)
    escreva("\nSeu salário é R$" + salario)
  }

}
