programa {
  funcao inicio() {
    real salarioFixo
    real vendas
    real comissao = 0.15
    cadeia nome

    escreva("Qual seu nome? ")
    leia(nome)
    
    escreva("Quanto você recebe de salário fixo? ")
    leia(salarioFixo)

    escreva("Quanto você vendeu esse mês? ")
    leia(vendas)
    limpa()
    
    real salario =  (vendas * comissao) + salarioFixo

    escreva("Nome: " + nome)
    escreva("\nSeu salário é R$" + salario)
  }

}
