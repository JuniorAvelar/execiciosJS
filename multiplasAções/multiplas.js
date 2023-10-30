

function iniciar(){ // 
    
    var  NumeroUm = Number( window.prompt('primeiro valor:')) //numero digitado pelo usuario
    var NumeroDois = Number( window.prompt('segundo valor:'))
    var op = Number( window.prompt (`qual a operação:`))
    var resul = window.document.getElementById('res')
    
    // pega o numero que o usuario digita e faz o calculo confome ele queira: 1 = soma, 2 = subtração
    switch (op){
        case 1:
            var resultado = NumeroUm + NumeroDois 
            resul.innerHTML = (`${NumeroUm} + ${NumeroDois} = ${resultado}`)
         break
         case 2:
            var resultado = NumeroUm - NumeroDois 
            resul.innerHTML = (`${NumeroUm} - ${NumeroDois} = ${resultado}`)
         break
         case 3:
            var resultado = NumeroUm * NumeroDois 
            resul.innerHTML = (`${NumeroUm} x ${NumeroDois} = ${resultado}`)
         break
         case 4:
            var resultado = NumeroUm / NumeroDois 
            resul.innerHTML = (`${NumeroUm} / ${NumeroDois} = ${resultado}`)

    }
    
}