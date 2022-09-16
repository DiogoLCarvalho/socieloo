document.querySelector(".erro").hidden = true;
function avançar() {
    document.querySelector(".horarios").hidden = false;
    document.querySelector(".form").hidden = true;
}
function confirmar() {
    document.querySelector(".erro").hidden = false;
    document.querySelector(".horarios").hidden = true;
}
if(document.querySelector(".form").hidden == false){
    document.querySelector(".erro").hidden = true;
}