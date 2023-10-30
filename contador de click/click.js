var numero = 0
var contador = document.getElementById('res')
function contar(){
    
    
     numero ++
    contador.innerHTML = (`contador está com ${numero} cliques`)
}
function limpar(){
    numero = 0
    contador.innerHTML = ('')
}