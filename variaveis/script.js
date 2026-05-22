let numeroSorteio, valorAposta

function apostar(){
    
    valorAposta = Number(document.getElementById("barraAposta").value)
    numeroSorteio = Number(Math.ceil(Math.random()*10))
    console.log(numeroSorteio)

}

function espinossauro(){

        document.getElementById("dino").innerHTML = "Dinossauro escolhido: Espinossauro"
        if(numeroSorteio == 1){
            valorAposta = valorAposta * 2
            document.getElementById("dinheiro").innerHTML = "R$ " + valorAposta
            dinoSorteado()
        }
        else{
            valorAposta = 0
            document.getElementById("dinheiro").innerHTML = "R$ " + valorAposta
            dinoSorteado()
        } 

    }
    
    function tRex(){
        
        document.getElementById("dino").innerHTML = "Dinossauro escolhido: T-rex"
        if(numeroSorteio == 2){
            valorAposta = valorAposta * 2
            document.getElementById("dinheiro").innerHTML = "R$ " + valorAposta
            dinoSorteado()
        }
        else{
            valorAposta = 0
            document.getElementById("dinheiro").innerHTML = "R$ " + valorAposta
            dinoSorteado()
        }   
    }
    
    function branquiossauro(){
        document.getElementById("dino").innerHTML = "Dinossauro escolhido: Branquiossauro"
        if(numeroSorteio == 3){
            valorAposta = valorAposta * 2
            document.getElementById("dinheiro").innerHTML = "R$ " + valor
            dinoSorteado()
        }
        else{
            valorAposta = 0
            document.getElementById("dinheiro").innerHTML = "R$ " + valorAposta
            dinoSorteado()
        }   
    }
    
    function velocirraptor(){
        document.getElementById("dino").innerHTML = "Dinossauro escolhido: Velocirraptor"
        if(numeroSorteio == 4){
            valorAposta = valorAposta * 2
            document.getElementById("dinheiro").innerHTML = "R$ " + valorAposta
            dinoSorteado()
        }
        else{
            valorAposta = 0
            document.getElementById("dinheiro").innerHTML = "R$ " + valorAposta
            dinoSorteado()
        }   
    }
    
    function estegossauro(){
        document.getElementById("dino").innerHTML = "Dinossauro escolhido: Estegossauro"
        if(numeroSorteio == 5){
            valorAposta = valorAposta * 2
            document.getElementById("dinheiro").innerHTML = "R$ " + valorAposta
            dinoSorteado()
        }
        else{
            valorAposta = 0
            document.getElementById("dinheiro").innerHTML = "R$ " + valorAposta
            dinoSorteado()
        }   
    }
    
    function triceratopo(){
        document.getElementById("dino").innerHTML = "Dinossauro escolhido: Triceratopo"
        if(numeroSorteio == 6){
            valorAposta = valorAposta * 2
            document.getElementById("dinheiro").innerHTML = "R$ " + valorAposta
            dinoSorteado()
        }
        else{
            valorAposta = 0
            document.getElementById("dinheiro").innerHTML = "R$ " + valorAposta
            dinoSorteado()
        }   
    }
    
    function anquilossauro(){
        document.getElementById("dino").innerHTML = "Dinossauro escolhido: Anquilossauro"
        if(numeroSorteio == 7){
            valorAposta = valorAposta * 2
            document.getElementById("dinheiro").innerHTML = "R$ " + valorAposta
            dinoSorteado()
        }
        else{
            valorAposta = 0
            document.getElementById("dinheiro").innerHTML = "R$ " + valorAposta
            dinoSorteado()
        }   
    }
    
    function parassauroloio(){
        document.getElementById("dino").innerHTML = "Dinossauro escolhido: Parassauroloio"
        if(numeroSorteio == 8){
            valorAposta = valorAposta * 2
            document.getElementById("dinheiro").innerHTML = "R$ " + valorAposta
            dinoSorteado()
        }
        else{
            valorAposta = 0
            document.getElementById("dinheiro").innerHTML = "R$ " + valorAposta
            dinoSorteado()
        }     
    }
    
    function alessauro(){
        document.getElementById("dino").innerHTML = "Dinossauro escolhido: Alessauro"
        if(numeroSorteio == 9){
            valorAposta = valorAposta * 2
            document.getElementById("dinheiro").innerHTML = "R$ " + valorAposta
            dinoSorteado()
        }
        else{
            valorAposta = 0
            document.getElementById("dinheiro").innerHTML = "R$ " + valorAposta
            dinoSorteado()
        }   
        
    }
    
    function carnotouro(){
        document.getElementById("dino").innerHTML = "Dinossauro escolhido: Carnotouro"
        if(numeroSorteio == 10){
            valorAposta = valorAposta * 2
       document.getElementById("dinheiro").innerHTML = "R$ " + valorAposta
       dinoSorteado()
    }
    else{
        valorAposta = 0
        document.getElementById("dinheiro").innerHTML = "R$ " + valorAposta
        dinoSorteado()
    }   
}

    function dinoSorteado(){
    if(numeroSorteio == 1){
        
        document.getElementById("dino_sorte").innerHTML = "Dinossauro sorteado: Espinossauro"
    }
    if(numeroSorteio == 2){
        
        document.getElementById("dino_sorte").innerHTML = "Dinossauro sorteado: T-rex"
    }
    if(numeroSorteio == 3){
        
        document.getElementById("dino_sorte").innerHTML = "Dinossauro sorteado: Branquiossauro"
    }
    if(numeroSorteio == 4){
        
        document.getElementById("dino_sorte").innerHTML = "Dinossauro sorteado: Velocirraptor"
    }
    if(numeroSorteio == 5){
        
        document.getElementById("dino_sorte").innerHTML = "Dinossauro sorteado: Estegossauro"
    }
    if(numeroSorteio == 6){
        
        document.getElementById("dino_sorte").innerHTML = "Dinossauro sorteado: Triceratopo"
    }
    if(numeroSorteio == 7){
        
        document.getElementById("dino_sorte").innerHTML = "Dinossauro sorteado: Anquilossauro"
    }
    if(numeroSorteio == 8){
        
        document.getElementById("dino_sorte").innerHTML = "Dinossauro sorteado: Parassauro"
    }
    if(numeroSorteio == 9){
        
        document.getElementById("dino_sorte").innerHTML = "Dinossauro sorteado: Alossauro"
    }
    if(numeroSorteio == 10){
        
        document.getElementById("dino_sorte").innerHTML = "Dinossauro sorteado: Carnotouro"
    }
    
    }









// function enterbarra(e){

// if(e.key == "Enter"){
//     registrarVenda()
// }
// }





















// let numeroAleatorio
// let total = 0

// function rolagemd4(){
//     numeroAleatorio = Number(Math.ceil(Math.random()*4))
//     total = total + numeroAleatorio
//     document.getElementById("valordados").innerHTML = "Total: " + total
//     document.getElementById("listadados").innerHTML += numeroAleatorio + "<br>"
// }
// function rolagemd6(){
//     numeroAleatorio = Number(Math.ceil(Math.random()*6))
//     total = total + numeroAleatorio
//     document.getElementById("valordados").innerHTML = "Total: " + total
//     document.getElementById("listadados").innerHTML += numeroAleatorio + "<br>"
    
// }
// function rolagemd10(){
//     numeroAleatorio = Number(Math.ceil(Math.random()*10))
//     total = total + numeroAleatorio
//     document.getElementById("valordados").innerHTML = "Total: " + total
//     document.getElementById("listadados").innerHTML += numeroAleatorio + "<br>"
    
// }
// function rolagemd12(){
//     numeroAleatorio = Number(Math.ceil(Math.random()*12))
//     total = total + numeroAleatorio
//     document.getElementById("valordados").innerHTML = "Total: " + total
//     document.getElementById("listadados").innerHTML += numeroAleatorio + "<br>"
// }









// let cont = 0
// let totalVendido = 0
// function incrementarContagem(){
    
//     cont++
//     document.getElementById("p-contagem").innerHTML = cont  
// }

// function subtrairContagem(){
    
//     cont--
//     document.getElementById("p-contagem").innerHTML = cont
// }
// function zerar(){
    
//     cont = cont - cont
//     document.getElementById("p-contagem").innerHTML = cont
// }

// function registrarVenda(){
    
//     let valor = Number(document.getElementById("valorVenda").value)
//     totalVendido = totalVendido + valor
   
//     document.getElementById("totalVendas").innerHTML = "Valor: R$" + totalVendido.toFixed(2).replace('.',',') + "<br>"
//     document.getElementById("listaValor").innerHTML += "R$" + valor.toFixed(2).replace('.',',') + "<br>"
//     document.getElementById("valorVenda").value = ""
//     document.getElementById("valorVenda").focus()
// }
//     document.getElementById("valorVenda").addEventListener("keyup", enterbarra)




// let global = "Sou uma variável global"
// function funcao1(){
//     let local = "Sou uma variável local :D"    
    
//     console.log(local);
//     console.log(global);
// }
// function funcao2(){
//     console.log(global);
//     // console.log(local);
// }
// // funcao1()
// // funcao2()

