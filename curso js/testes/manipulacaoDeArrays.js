let Numeros = [1 , 4 , 9 , 0]

function somaDnumros(n){
    var soma = 0
  for( var i = 0 ; i < n.length ; i++){
        soma += n[i]
  }
  return soma
}

function maiorNumero(c){
    let n1 = c[0]
    let maiorN
    for(let i = 0 ; i < c.length; i++){
        if(n1 < c[i]){
           maiorN = c[i]
        }
    }
    return maiorN
}

 let resul = somaDnumros(Numeros)
 let MaiorNumero = maiorNumero(Numeros)

console.log(resul)
console.log(MaiorNumero)