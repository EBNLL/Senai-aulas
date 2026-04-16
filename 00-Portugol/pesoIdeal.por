programa {
  inclua biblioteca Matematica --> mat
  funcao inicio() {
    caracter genero
    real altura, peso
    cadeia enter
    
    escreva("Qual sua altura? ")
    leia(altura)
    escreva("Você é homem ou mulher? H/M: ")
    leia(genero)

    se(genero == 'm' ou 'M'){
    
    peso = (62.1 * altura) - 44.7
    peso = mat.arredondar(peso, 2)
    escreva("Seu peso ideal é: " + peso)

    }
    
    senao{se(genero == 'h' ou 'H'){
    peso = (72.7 * altura) - 58
    peso = mat.arredondar(peso, 2)
    
    escreva("Seu peso ideal é: " + peso)
      
      }
    senao{
    escreva("Erro! aperte enter para retornar ")
    leia(enter)
    limpa()
    inicio()
      }
    }
  }
}
