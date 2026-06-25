const { jsx } = require("react/jsx-runtime")

function exercicio1(){
let soma = 0
for(let i = 1; i<=10; i++){
    soma += i
    console.log(soma)
}
}

function exercicio2(){
    let tabuada = 5, soma = 0
    for(let i = 1; i<=10; i++){
        soma = tabuada * i
        console.log(soma)
    }
}

function exercicio3(){
    let soma = 0
    for(let i = 1; i<=10; i++){
        soma = i * i
        console.log(soma)
    }
}

function exercicio4(){
    let tabuada3 = 3, soma
    for(let i = 1; i<=30; i++){
    soma = tabuada3 * i
    console.log(soma)
    }
}

function exercicio5(){
    let asteristico = "*"
    for(i = 1; i<=10; i++){
        console.log(asteristico)
    }
}

function exercicio6(){
    let js = "JavaScript"
    for(let i = 0; i<js.length; i++){
        console.log(js[i])
    }
}

function exercicio7(){
    let soma = 0
    for(let i = 0; i<=20; i+=2){
        soma = soma + i
        console.log(soma)
    }
}

function exercicio8(){
    for(i = 5; i<= 50; i+=5){
        console.log(i)
    }

}

function exercicio9(){
    for(let i = 1; i<=8; i++){
        console.log("Olá")
    }
}

function exercicio10(){
    let soma = 0
    for(i = 1; i<=15; i++){
        if(i%2 != 0){
            soma = soma + i
            console.log(soma)
        }
    }
}

function exercicio11(){
    let js = ["1","12","123","1234","12345"]
    for(let i = 0; i<5; i++){
        console.log(js[i])
    }
}

function exercicio12(){
    let o = "ovo", contador = 0
    for(i = 0; i<o.length; i++){
        if(o[i] == "o"){
            contador++
            console.log(contador)
        }
    }
}

function exercicio13(){
    let resposta = 1
    for(i = 1; i<=5; i++){
        resposta *= i
        console.log(resposta)
    }
}