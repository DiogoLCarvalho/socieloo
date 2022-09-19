function add(){
    let tipo = document.getElementById("tipo")
    let titulo = document.getElementById("title")
    let form = document.getElementById("formpadrao")
    if(tipo.value == "Parágrafo"){
        let l1 = document.createElement("label")
        l1.innerHTML = titulo
        form = form + l1
    }else if(tipo.value == "Múltipla seleção"){
        document.createElement("label").innerHTML = titulo
    }else if(tipo.value == "Caixas de seleção"){
        document.createElement("label").innerHTML = titulo
    }
}