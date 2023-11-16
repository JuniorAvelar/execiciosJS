
function parImpar(numero){
    
     if(numero%2 == 0){
        return 'par'
     }
     else{
        return 'impar'
     }
}
var Resposta = parImpar(4)
console.log(Resposta)

///////////
function somar(n1=0,n2=0){
    return n1 + n2
}
console.log (somar(2))


// fatorial 
function fatorial(Numero){
    var res = 1
     for(var i = Numero ; i > 1 ; i--)
    res = res * i
    console.log(res)
}
fatorial(5)

// RECURSIVIDADE
