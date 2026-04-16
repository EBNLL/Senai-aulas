programa {
  funcao inicio() {
    inteiro dias
    real valor 
    real valorDiaria
    real valorTotal
    real desconto 
    real desconto2 
    real multa = 150
    
    escreva("Quantos dias você gostaria de ficar? ")
    leia(dias)

    se(dias <= 5){
    
    valor = 100
    valorDiaria = dias * valor
    desconto = valorDiaria * 0.1
    desconto2 = valorDiaria * 0.15
    valorTotal = valorDiaria - desconto - desconto2 + multa
    
    escreva("\nDesconto1: R$" + desconto)
    escreva("\ndesconto2: R$" + desconto2)
    escreva("\nValor: R$" + valorTotal)

    }
    senao{se(dias >= 6 e dias  <= 10){
    
    valor = 90
    valorDiaria = dias * valor
    desconto = valorDiaria * 0.1
    desconto2 = valorDiaria * 0.15
    valorTotal = valorDiaria - desconto - desconto2 + multa
   
    escreva("\nDesconto1: R$" + desconto)
    escreva("\ndesconto2: R$" + desconto2)
    escreva("\nValor: R$" + valorTotal)
    
    }
    senao{
    
    valor = 80
    valorDiaria = dias * valor
    desconto = valorDiaria * 0.1
    desconto2 = valorDiaria * 0.15
    valorTotal = valorDiaria - desconto - desconto2 + multa
   
    escreva("\nDesconto1: R$" + desconto)
    escreva("\ndesconto2: R$" + desconto2)
    escreva("\nValor: R$" + valorTotal)

    }
    }
  }
}
