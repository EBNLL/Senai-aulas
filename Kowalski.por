programa {
  funcao inicio() { real relatoriosParaPF = 40, relatoriosParaPJ = 33, tempoParaElaborarRelatorioPF = 12, tempoParaElaborarRelatorioPJ = 42, valorRecebidoPF = 2350.00, valorRecebidoPJ = 8900.00
    real totalDeRelatorios = relatoriosParaPF + relatoriosParaPJ, totalDeTempoTrabalhado = tempoParaElaborarRelatorioPF + tempoParaElaborarRelatorioPJ, valorTotalRecebido = valorRecebidoPF + valorRecebidoPJ
    escreva("Essa é a quantidade total de relatórios feito por Kowalski: " +  totalDeRelatorios)
    
    escreva("\nEsse foi o tempo que Kowalski trablhou em seus relatórios: " + totalDeTempoTrabalhado)

    escreva("\nEsse foi o valor recebido pelos PF e PJ: R$" + valorTotalRecebido)
    real mediaDeValorRecebido =  valorTotalRecebido / 2, mediaDeTempoTrabalhado =  totalDeTempoTrabalhado / 2
    escreva("\nEssa foi a média de valor recebido dos PF e PJ: R$" + mediaDeValorRecebido)

    escreva("\nEssa foi a media de tempo que kowalski trabalhou em seus relatórios: " +  mediaDeTempoTrabalhado)

  }
}
