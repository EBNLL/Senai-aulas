let numeroAleatorio
let total = 0

function rolagemd4(){
    numeroAleatorio = Number(Math.ceil(Math.random()*4))
    total = total + numeroAleatorio
    document.getElementById("valordados").innerHTML = "Total: " + total
    document.getElementById("listadados").innerHTML += numeroAleatorio + "<br>"
}
function rolagemd6(){
    numeroAleatorio = Number(Math.ceil(Math.random()*6))
    total = total + numeroAleatorio
    document.getElementById("valordados").innerHTML = "Total: " + total
    document.getElementById("listadados").innerHTML += numeroAleatorio + "<br>"
    
}
function rolagemd10(){
    numeroAleatorio = Number(Math.ceil(Math.random()*10))
    total = total + numeroAleatorio
    document.getElementById("valordados").innerHTML = "Total: " + total
    document.getElementById("listadados").innerHTML += numeroAleatorio + "<br>"
    
}
function rolagemd12(){
    numeroAleatorio = Number(Math.ceil(Math.random()*12))
    total = total + numeroAleatorio
    document.getElementById("valordados").innerHTML = "Total: " + total
    document.getElementById("listadados").innerHTML += numeroAleatorio + "<br>"
}








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

