programa {
  funcao inicio() { real cobrancaDeToken = 5, cobrancaporCaracter = 1, prompt, caracters

  escreva("Quantos prompt você quer enviar? ")
  leia(prompt)
  real totalPrompt = cobrancaDeToken * prompt
  escreva("Quantos caracter vai ter em cada prompt? ")
  leia(caracters)
  real totalCaracter = cobrancaporCaracter * caracters 
  real totalToken = (totalCaracter*prompt) + totalPrompt
  real custoEmDinheiro = totalToken * 0.150
  escreva("Esse é o total de tokens que vai custar: " + totalToken)
  escreva("\nEsse é o valor que você vai gastar em dinheiro: R$" + custoEmDinheiro)

  
    
  }
}
