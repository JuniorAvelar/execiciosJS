

// var botao = document.createElement('button')
// botao.innerText = 'enviar'
// document.body.appendChild(botao)
// botao.addEventListener('click' , clicar)

// function clicar(){
//     alert('funcionado')
// }

// var numerosDigitados = [ '1' , '2' , '4' ]
// console.log (numerosDigitados.length)
// var soma = 0
// for(var i = 0 ; i < numerosDigitados.length ; i++){
//     soma += numerosDigitados[i] 
// }
//     console.log (soma) 


// let minhaArray = [4, 2, 8, 1, 5];

// function encontrarMaiorNumero(arr) {
//     let maiorNumero = arr[0];
                 
//     for (let i = 1; i < arr.length; i++) {

//         if (arr[i] > maiorNumero) {
//             maiorNumero = arr[i];
//         }
//     }

//     return maiorNumero;
// }

// // Exemplo de uso

// let maiorNumero = encontrarMaiorNumero(minhaArray);
// console.log(`O maior número na array é: ${maiorNumero}`);


 var num = [1 , 2 , 4,8,15]
 var maior = num[0]
for(var y = 1 ; y < num.length ; y++){

    if (num[y] > maior){
        maior = num[y]
    } 
}
console.log(maior)
var Nmenor = num[0]
for(var m = 1 ; m < num.length ; m++){

    if (num[m] < Nmenor){
        Nmenor = num[m]
    }
}
console.log(Nmenor) 