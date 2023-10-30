
var resposta = document.getElementById('res')

function contar(){
    var Num = Number( document.getElementById( 'num').value)
    
    for(var i = 0 ; i <= Num ; i++){
        var restoDivisao =  i % 2
        if(restoDivisao == 0){
        resposta.innerHTML += '👉' + (i)
    }
  } resposta.innerHTML += '🏁 </br>'
} // limpar tudo
function limpar(){
    resposta.innerHTML = ''
}