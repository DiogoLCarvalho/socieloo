function add(){
    let tipo = document.getElementById("tipo")
    let titulo = document.getElementById("title").value
    let form = document.getElementById("formpadrao")
    let lab = document.createElement('label');
    lab.appendChild(document.createTextNode(titulo + ":"));
    
    form.appendChild(lab);
    form.appendChild(document.createElement('br'));
    if(tipo.value == "Parágrafo"){
        let input = document.createElement('textarea');
        input.disabled = true;
        form.appendChild(input);
        form.appendChild(document.createElement('br'));
    }else if(tipo.value == "Múltipla seleção"){
        document.getElementById("multi_exemplo").hidden = false;
    }else if(tipo.value == "Caixas de seleção"){
        document.getElementById("caixas_exemplo").hidden = false;
    }
}
function addradio(){
    let legenda = document.getElementById("legend").value;
    let form = document.getElementById("formpadrao");
    let div = document.createElement('div');
    let legend = document.createElement('p');
    let radio = document.createElement('input');
    div.className = "radio"
    radio.type= "radio";
    radio.disabled = true;
    legend.appendChild(document.createTextNode(legenda));
    div.appendChild(radio);
    div.appendChild(legend);
    form.appendChild(div);
}
function saveradio(){
    let form = document.getElementById("formpadrao");
    form.appendChild(document.createElement('br'));
    document.getElementById("multi_exemplo").hidden = true;
}
function addbox(){
    let legenda = document.getElementById("legendd").value;
    let form = document.getElementById("formpadrao");
    let div = document.createElement('div');
    let legend = document.createElement('p');
    let check = document.createElement('input');
    div.className = "radio"
    check.type= "checkbox";
    check.disabled = true;
    legend.appendChild(document.createTextNode(legenda));
    div.appendChild(check);
    div.appendChild(legend);
    form.appendChild(div);
}
function savebox(){
    let form = document.getElementById("formpadrao");
    form.appendChild(document.createElement('br'));
    document.getElementById("caixas_exemplo").hidden = true;
}