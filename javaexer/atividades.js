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