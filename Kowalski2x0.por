programa {
  funcao inicio() { 
    
    real relatoriosParaPF  
    real relatoriosParaPJ  
    real tempoParaElaborarRelatorioPF 
    real tempoParaElaborarRelatorioPJ 
    real valorRecebidoPF 
    real valorRecebidoPJ 
    

    escreva("Quantos relatórios PF kowalski fez? ")
    leia(relatoriosParaPF)
    
    escreva("\nQuanto tempo levou para fazer os relatórios PF? ")
    leia(tempoParaElaborarRelatorioPF)
    
    escreva("\nQual o valor recebeu PF? ")
    leia(valorRecebidoPF)
    
    escreva("\nQuantos relatórios PJ kowalski fez? ")
    leia(relatoriosParaPJ)
    
    escreva("\nQuanto tempo levou para fazer os relatórios PJ? ")
    leia(tempoParaElaborarRelatorioPJ)
    
    escreva("\nQual o valor recebeu PJ? ")
    leia(valorRecebidoPJ)
    limpa()

    real totalDeRelatorios = relatoriosParaPF + relatoriosParaPJ
    real totalDeTempoTrabalhado = tempoParaElaborarRelatorioPF + tempoParaElaborarRelatorioPJ
    real valorTotalRecebido = valorRecebidoPF + valorRecebidoPJ 

    escreva("Essa é a quantidade total de relatórios feito por Kowalski: " +  totalDeRelatorios)
    
    escreva("\n\nEsse foi o tempo que Kowalski trablhou em seus relatórios: " + totalDeTempoTrabalhado + "H")

    escreva("\n\nEsse foi o valor recebido pelos PF e PJ: R$" + valorTotalRecebido)
    
    real mediaDeValorRecebido =  valorTotalRecebido / 2
    real mediaDeTempoTrabalhado =  totalDeTempoTrabalhado / 2
    real valorPorRelatorioPF = valorRecebidoPF / relatoriosParaPF
    real valorPorRelatorioPJ = valorRecebidoPJ / relatoriosParaPJ


    
    escreva("\n\nEssa foi a média de valor recebido dos PF e PJ: R$" + mediaDeValorRecebido)

    escreva("\n\nEssa foi a média de tempo que kowalski trabalhou em seus relatórios: " +  mediaDeTempoTrabalhado + "H")

    escreva("\n\nEssa foi a média de quanto recebeu cada PF por relatório: R$" + valorPorRelatorioPF)
    
    escreva("\n\nEssa foi a média de quanto recebeu cada PJ por relatório: R$" + valorPorRelatorioPJ)

  }
}
