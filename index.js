var numero = 0
var palpite = 0

function adivinha(){
    var numeroAleatorio = Math.random()* 100
    numero = Math.trunc(numeroAleatorio)
    // var palpite = Number( window.prompt('Qual seu palpite?'))
} 
function jogar(){
    var res = window.document.getElementById('res')
  palpite = prompt('qual seu palpite?')
if ( palpite > numero ){
        res.innerHTML += (`você falou ${palpite}. O meu número e <strong> MENOR </strong> </br>`)
    }
    else if (palpite < numero){
        res.innerHTML += (`você falou <strong> ${palpite} </strong>. O meu número e <strong> MAIOR </strong> </br>`)
  }
  else if (palpite == numero){
        res.innerHTML= ''
        res.innerHTML += (`<strong> PARABÉNS! </strong> voçê acertou, O número era ${palpite}`)
  }
}
