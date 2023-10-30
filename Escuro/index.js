var cor = document.getElementById('cor')
var corB = 'white'
 
function ModoEscuro(){
    document.body.style.background = 'black'
    document.body.style.color = 'white'
}
function ModoClaro(){
    document.body.style.background = 'white'
    document.body.style.color = 'black'
}
function Cor(){
    if (cor.value == 'white'){
    document.body.style.color = 'black'
    document.body.style.background = cor.value
}
    else{
    document.body.style.color = 'white'
    document.body.style.background = cor.value
}
}