 // RECURSIVADADE
 function fatorial(n){
    if (n == 1){
        return 1
    }
    else{
        return n * fatorial(n -1)
    }
 }
 console.log (fatorial(4))


 // ADICIONANDO NÚMEROS NUMA ARRAY
var nomes = ['kohay' , 'santos']
 function adicionar(c){
    nomes.push(c)
 }
 adicionar('GENIVALDO')
 console.log(nomes)
 adicionar('JJ')
 console.log(nomes)
