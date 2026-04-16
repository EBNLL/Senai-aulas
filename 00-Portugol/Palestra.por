programa {
  funcao inicio() {
    inteiro palestra
    cadeia enter

    escreva("Palestras disponíveis!\n")
    escreva("1- Animações com scretch\n")
    escreva("2- scretch para games\n")
    escreva("3- JavaScript para leigos\n")
    escreva("4- Tópicos avançados\n")
    escreva("5- Vida e carreira\n")
    escreva("Qual o palestra você quer participar? ")
    leia(palestra)

    se(palestra == 1){
      escreva("Local: Laboratório 305\n")
      escreva("Horário: 19h")
    }  
     senao{se(palestra == 2){
      escreva("Local: Laboratório 512\n")
      escreva("Horário: 20h")
      }
      senao{se(palestra == 3){
      escreva("Local: Laboratório 101\n")
      escreva("Horário: 19h")
      }
      senao{se(palestra == 4){
      escreva("Local: Laboratório 305\n")
      escreva("Horário: 20h")
      }
      senao{se(palestra == 5){
      escreva("Local: Auditório\n")
      escreva("Horário: 21h")
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
