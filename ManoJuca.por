programa {
  funcao inicio() { 
   real salario
   real moradia
   real agua
   real luz 
   real internet 
   real gasolina 
   real streaming
   real telefone

  escreva("Quanto Mano Juca recebe de salário? R$")
  leia(salario)
  escreva("\nQuanto Mano juca gasta com moradia? R$")
  leia(moradia)
  escreva("\nQuanto Mano juca gasta com água? R$")
  leia(agua)
  escreva("\nQuanto Mano juca gasta com luz? R$")
  leia(luz)
  escreva("\nQuanto Mano juca gasta com internet? R$")
  leia(internet)
  escreva("\nQuanto Mano juca gasta com gasolina? R$")
  leia(gasolina)
  escreva("\nQuanto Mano juca gasta com streaming? R$")
  leia(streaming)
  escreva("\nQuanto Mano juca gasta com telefone? R$")
  leia(telefone)
  limpa()
  
  real sobrou = salario - moradia - agua - luz - internet - gasolina - streaming - telefone

  escreva("\nMano Juca ainda tem R$" + sobrou + " restante")
  
    
  }
}
