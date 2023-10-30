

function contar(){
    var resposta = document.getElementById('contar')
   
    for(var i = 1; i <= 10 ; i++){
        var div = i % 2
        if(div == 0){
        resposta.innerHTML += (`<mark>${i}</mark>👉`)
        }
        else if (div != 0){
            resposta.innerHTML += (i) + '👉'
        }   
    }
        resposta.innerHTML += '🏁 </br>'
}