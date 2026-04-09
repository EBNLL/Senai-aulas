programa {
  funcao inicio() {
    inteiro c
    
    escreva("Quantos graus celsius está? °C ")
    leia(c)

    inteiro f = (c * (9 / 5)) + 32

    se(f > 68){
      escreva("°F " + f)
      escreva("\nAlerta de super calor!")
    }

    senao{
      escreva("°F" + f)
    }

  }
}
