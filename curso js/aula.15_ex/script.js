   
function contar(){
    
    var inicio = ( document.getElementById('inicio'))
    var fim = ( document.getElementById('fim'))
    var passo = ( document.getElementById('passo'))
    var res = document.getElementById('res')

    var inicioValor = Number(inicio.value)
    var fimValor = Number(fim.value)
    var passoValor = Number(passo.value)
  // verifica se os números são falidos 
if (inicioValor == 0  || fimValor == 0){
    res.innerHTML = 'erro falta dados'
}
 else{
  //limpa se tiver algo
    res.innerHTML = ''
    // verificar se passo é igual a zero e inicia como passo 1
    if(passoValor == 0){
      alert('erro')
      passoValor = 1
    }
      // crescente
    if(inicioValor < fimValor){
     for (var i = inicioValor ; i <= fimValor ;i = i+ passoValor){
     res.innerHTML += ( i + '👉')
     } 
  }// decrescente
    else if(inicioValor > fimValor){
    for(var c = inicioValor; c >= fimValor; c = c - passoValor){
     res.innerHTML += ( c + '👉')
    }
  }
}
  res.innerHTML += ('🏁')
  
 }

