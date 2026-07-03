let idade = []

function maisiIdades(){

    idade.push(Number(prompt("Qual sua idade?")))
    console.log(idade)
todasIdades()
}
function removeridades(){
    let i = Number(prompt("de qual posição vc quer remover? " + idade))
    
    idade.splice(i,1)
    console.log(idade)
    todasIdades()
}
function todasIdades(){
    document.getElementById("suasIdade").innerHTML = ""
    for(let i = 0; i<idade.length; i++){                                           
    document.getElementById("suasIdade").innerHTML += "<br>" + idade[i]
    }
}