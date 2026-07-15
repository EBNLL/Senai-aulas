

const dinos = []

function testar() {
    let novoDino = {
        id: Date.now(),
        nome: document.getElementById("input-nome").value,
        altura: Number(document.getElementById("input-altura").value),
        cor: document.getElementById("input-cor").value,
        custo: Number(document.getElementById("input-custo").value)
    }

    dinos.push(novoDino)
    console.log(dinos)
    limparFormulario()
}
function limparFormulario(){
    document.getElementById("input-nome").value = ""
    document.getElementById("input-altura").value = ""
    document.getElementById("input-cor").value = ""
    document.getElementById("input-custo").value = ""
    
    document.getElementById("input-nome").focus()
}
function mostrardinos(){
    dinos
    for(i=0;i<dinos.length;i++){
        document.getElementById("m-d").innerHTML += dinos[i].nome + ", "
        document.getElementById("m-d").innerHTML += dinos[i].altura + ", "
        document.getElementById("m-d").innerHTML += dinos[i].cor + ","
        document.getElementById("m-d").innerHTML += dinos[i].custo + " <br>"
   
    }
}