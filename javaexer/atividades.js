function capitaoganso(){
    let marujos, comida, comidaPorMarujo

    marujos = Number(prompt("Quantidade de marujos:"))
    comida = Number(prompt("Quilos de comida:"))
    
    comidaPorMarujo = comida / marujos

    if(marujos >= 10 && comidaPorMarujo >= 1.5){
        document.getElementById("resultado").innerHTML = "Vai viajar"
    }
    else{
        document.getElementById("resultado").innerHTML = "Não vai viajar"
    }
}

function capitaoganso2(){
    let sabeNadar, idade, temRecomendacao
    
    sabeNadar = confirm("Você sabe nadar? (ok: sim, cancelar: não)")
    idade = Number(prompt("Quantos anos você tem?"))
    temRecomendacao = confirm("Você tem recomendação? (ok: sim, cancelar: não)")
    
    if(sabeNadar == true && idade >= 16){
        document.getElementById("resultado").innerHTML = "Aprovado para o navio!"
    }
    else{if(idade >= 14 && temRecomendacao == true && sabeNadar == false){
        document.getElementById("resultado").innerHTML = "Aprovado sob recomendação. Monitorar nas primeiras viagens."
    }
    else{
            document.getElementById("resultado").innerHTML = "Reprovado. Volte quando estiver mais preparado para o mar."
            
        }
    }
}

function surumano(){
    let criancaPequenas, velocidadeDoVento
    
    criancaPequenas = Number(prompt("Quantas crianças pequenas tem?"))
    velocidadeDoVento = Number(prompt("Qual a velocidade do vento? m/s"))
    
    if(criancaPequenas <= 0 && velocidadeDoVento >= 0.5){
        document.getElementById("resultado").innerHTML = "Fumaça liberada. Que comecem os mistérios!"
    }
    else{
        document.getElementById("resultado").innerHTML = "Fumaça bloqueada. Aguardar condições ideais."
    }
}

function surumano2(){
    let estaGripado, tempoViagem
    
    estaGripado = confirm("Você está gripado? (ok: sim, cancelar: não)")
    tempoViagem = Number(prompt("Quanto tempo de viagem? (tempo em minutos)"))
    
    if(estaGripado == true || tempoViagem > 45){
        document.getElementById("resultado").innerHTML = "Deslocamento inviável. Melhor recusar este evento."
    }
    else{
        document.getElementById("resultado").innerHTML = "Viagem autorizada. Rumo ao show!"
    }
}

function surumano3(){
    let somFuncionando, figurinoCompleto
    
    somFuncionando = confirm("O som está funcionando? (ok: sim, cancelar: não)")
    somFuncionando = confirm("O figurino está completo? (ok: sim, cancelar: não)")
    
    if(somFuncionando == true && figurinoCompleto == true){
        document.getElementById("resultado").innerHTML = "Palco liberado para Sarumano! Luzes, câmera, ilusão!"
    }
    else{if(somFuncionando == false && figurinoCompleto == true){
        document.getElementById("resultado").innerHTML = "Sem som. Realizar apresentação alternativa no salão."
    }
    else{if(somFuncionando == true && figurinoCompleto == false){
        document.getElementById("resultado").innerHTML = "Faltando parte do figurino. Te vira no improviso!"
        }
        else{
                 document.getElementById("resultado").innerHTML = "Apresentação cancelada. Hora da mágica de desaparecer…"
                }
            }
        }
    }
    
    function dennysJuninIa(){
        let emManutencao, emergenciaAtiva
        
        emManutencao = confirm("O parque está em manutenção? (ok: sim, cancelar: não)")
        emergenciaAtiva = confirm("O parque está com alerta de emergência? (ok: sim, cancelar: não)")
        
        if(emManutencao == true || emergenciaAtiva == true){
            document.getElementById("resultado").innerHTML = "Transporte indisponível por motivo de segurança."
        }
        else{
            document.getElementById("resultado").innerHTML = "Transporte liberado para uso."
        }
    }
    
    function denis(){
        let cracha, digital
        
        cracha = Number(prompt("Qual o número do seu crachá?"))
        
        if(cracha > 0){
            cracha = confirm(cracha + ", Crachá válido?")
            digital = confirm("Digital valida?")
        }
        if(cracha == true && digital == true){
            document.getElementById("resultado").innerHTML = "Acesso permitido."
        }
        else{
            document.getElementById("resultado").innerHTML = "Acesso negado."
            document.getElementById("resultado").innerHTML = "Acesso negado."
        }
    }  
    
    function junin(){
        let visitantes, hora
        
        visitantes = confirm("Tem algum visitante no local? Ok: sim, cancelar: não")
        hora = confirm("Horário fora do expediente? Ok: sim, cancelar: não")
        
        if(visitantes == false && hora == true){
            document.getElementById("resultado").innerHTML = "Liberação autorizada. Abrindo jaula."
        }
        else{
            document.getElementById("resultado").innerHTML = "Liberação negada. Área em uso ou fora do horário permitido."
        }
    }
    
    function telles(){
        let peso, distancia, volume, frete
        
        peso = Number(prompt("Qual o peso em kg?"))
        distancia = Number(prompt("Qual a distância em km?"))
        volume = Number(prompt("Quantos volumes são?"))
        
        frete = Number(15 + (2 * peso) + (0.05 * distancia) + (10 * volume))
        
        document.getElementById("resultado").innerHTML = "Frete: " + frete
    }
    
    function donabete(){
        let bruto, presentes, premiacao, comissao, total
        
        bruto = Number(prompt("Quanto Dona Bete recebeu?"))
        premiacao = Number(prompt("Quanto Dona Bete pagou em premiações?"))
        presentes = Number(prompt("Quanto Dona Bete pagou em presentes?"))
        comissao = Number(prompt("Quanto Dona Bete pagou em comissão?"))
        
        total = Number(bruto - premiacao - presentes - comissao)
        document.getElementById("resultado").innerHTML = "Sobrou: R$" + total
    }

    function adivinha(){
        let numero = Math.ceil(Math.random() * 10)
        let chute

        chute = Number(prompt("Chute um número:"))

        if(chute == numero){
            resultado.innerHTML = "Acertou! " + numero
        }
        else{
            resultado.innerHTML = "ERROU! " + numero
        }
    }

    function mostrarDiaDaSemana(){
        let numero, dia

        numero = Number(prompt("Digita o número:"))

        if(numero == 1){
            dia = "Domingo"
        }
        else if(numero == 2){
            dia = "Segunda"
        }
        else if(numero == 3){
            dia = "Terça"
        }
        else if(numero == 4){
            dia = "Quarta"
        }
        else if(numero == 5){
            dia = "Quinta"
        }
        else if(numero == 6){
            dia = "Sexta"
        }
        else if(numero == 7){
            dia = "Sábado"
        }
        else{
            dia = "Erro 404#, dia não encontrado!"
        }
        document.getElementById("resultado").innerHTML = dia
    }
    