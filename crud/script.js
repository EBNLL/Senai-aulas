

const dinos = []

function adicionardinos() {
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
    mostrardinos()
}
function limparFormulario() {
    document.getElementById("input-nome").value = ""
    document.getElementById("input-altura").value = ""
    document.getElementById("input-cor").value = ""
    document.getElementById("input-custo").value = ""
    document.getElementById("input-id").value = ""

    document.getElementById("input-nome").focus()
}
function mostrardinos() {
    document.getElementById("m-d").innerHTML = ""

    for (i = 0; i < dinos.length; i++) {

        document.getElementById("m-d").innerHTML += "id: " + dinos[i].id + "<br>"
        document.getElementById("m-d").innerHTML += "Nome: " + dinos[i].nome + "<br>"
        document.getElementById("m-d").innerHTML += "Altura: " + dinos[i].altura + "<br>"
        document.getElementById("m-d").innerHTML += "Cor" + dinos[i].cor + "<br>"
        document.getElementById("m-d").innerHTML += "Custo" + dinos[i].custo + "<br>"

    }
}
function removerdino() {
    let remove = document.getElementById("input-nome").value
    for (i = 0; i < dinos.length; i++) {
        if (remove == dinos[i].nome) {
            dinos.splice(i, 1)
        }
    }
    limparFormulario()
    mostrardinos()
}

function altdino() {
    let troca = document.getElementById("input-id").value
    let alterar = document.getElementById("input-nome").value
    let alterar2 = Number(document.getElementById("input-altura").value)
    let alterar3 = document.getElementById("input-cor").value
    let alterar4 = Number(document.getElementById("input-custo").value)
    for (i = 0; i < dinos.length; i++) {
        if (troca == dinos[i].id) {
            if (alterar != "") {
                dinos[i].nome = alterar
            }
            if (alterar2 != "") {
                dinos[i].altura = alterar2
            }
            if (alterar3 != "") {
                dinos[i].cor = alterar3
            }
            if (alterar4 != "")
                dinos[i].custo = alterar4
        }
          
    }
    limparFormulario()
    mostrardinos()
}
function procurarDino(){
    
    let procuraDino = document.getElementById("input-nome").value
   
    for (i = 0; i < dinos.length; i++) {
        if (procuraDino == dinos[i].nome) {
        document.getElementById("input-nome").value = dinos.nome
        document.getElementById("input-altura").value = dinos.altura
        document.getElementById("input-cor").value = dinos.cor
        document.getElementById("input-custo").value = dinos.custo
    }
    mostrardinos()
}
}