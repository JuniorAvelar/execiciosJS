// perguntas e respostas 
var respostas = ['2' , '9' , '10'] 
var perguntas = ['quanto é 1 + 1? ' , 'quanto é 3 x 3 ?' , 'quanto é 7 + 3 ?' , '']
var passarPerguta = 0
var proximaResposta = 0
var acertos = 0

// h1
var h1 = document.createElement('h1')
h1.textContent = 'QUIZ'
document.body.appendChild(h1)

// div onde vai aparecer as perguntas 
var div = document.createElement('div')
div.innerText = (perguntas[0])
document.body.appendChild(div)

//Recerber resposta
var input = document.createElement('input')
input.type = 'number'
input.id = 'resposta'
document.body.appendChild(input)

//Button
function button(NomeBotao, envento){
var button = document.createElement('button')
document.body.appendChild(button)
button.innerText = NomeBotao
button.addEventListener('click' , envento)
}
button('enviar', enviarResposta )

// recebe a resposta digitada 
respostasUsuario = document.getElementById('resposta')

// // passa a pergunta
// button('próxima', proxima)

function enviarResposta(){

if( perguntas[passarPerguta] == ''){
      div.innerHTML = `acertos ${acertos}`
}
else{
   if(respostasUsuario.value == respostas[proximaResposta]) {
    alert('correto')
    passarPerguta++
    proximaResposta++
    div.innerHTML = perguntas[passarPerguta]
    acertos++
   } 
   else if(respostasUsuario.value != respostas[proximaResposta]) {
    alert ('errado')
    passarPerguta++
    proximaResposta++
    div.innerHTML = perguntas[passarPerguta]
   }
  }
 }
