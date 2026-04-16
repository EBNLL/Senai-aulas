programa {
  funcao inicio() {
    inteiro placa
    cadeia enter

    escreva("Qual o último número da sua placa? ")
    leia(placa)

    se(placa == 0 ou placa == 1){
      escreva("Não pode rodar na segunda-feira\n")
    }  
     senao{se(placa == 2 ou placa == 3){
      escreva("Não pode rodar na terça-feira\n")
      
      }
      senao{se(placa == 4 ou placa == 5){
      escreva("Não pode rodar na quarta-feira\n")
      
      }
      senao{se(placa == 6 ou placa == 7){
      escreva("Não pode rodar na quinta-feira\n")
      
      }
      senao{se(placa == 8 ou placa == 9){
      escreva("Não pode rodar na sexta-feira\n")
      
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
    }
  }
}