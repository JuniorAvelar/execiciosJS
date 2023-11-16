
var numerosDigitados = []

var p = document.createElement('div')

function adicionar(){
    var selec = document.getElementById('sel')
    var item = document.createElement('option')
    var boxNumber = (document.getElementById('box'))
    item.text = `Valor ${boxNumber.value} adicionado `
    selec.appendChild(item)
    numerosDigitados.push(Number(boxNumber.value))
    boxNumber.value = ''
    boxNumber.focus()
    p.innerText=''
}

function finalizar(){
    // validação
    if(numerosDigitados.length == 0){
        alert('erro, adicione Números antes de finalizar')
    }
    else{
    // soma todos os números da array
    var soma = 0
    var meio = document.getElementById('meio')
    for(var i = 0 ; i < numerosDigitados.length ; i++){
    soma += numerosDigitados[i]}
    }   
//média dos números
 var media = soma / numerosDigitados.length

//pecorre pela array, verifica o maior número digitado
var Nmaior = numerosDigitados[0]
for(var i = 1; i < numerosDigitados.length ; i++){
   if (numerosDigitados[i] > Nmaior){
        Nmaior = numerosDigitados[i]
   }
   
}
 // menor número digitado
 var Nmenor = numerosDigitados[0]
 for(var c = 1 ; c < numerosDigitados.length ; c++){
    if(numerosDigitados[c] < Nmenor){
        Nmenor = numerosDigitados[c]
    }
 }
   p.innerHTML = ''
   p.innerHTML += (`soma de todos os número é ${soma} </br>`)
   p.innerHTML += (`Ao todo temos ${numerosDigitados.length} números cadastrados </br>`)
   p.innerHTML += (`o maior número digitado ${Nmaior} </br>`)
   p.innerHTML += (`o menor número digitado ${Nmenor} </br>`)
   p.innerHTML += (`A média desses Números é ${media} </br>`)
    meio.appendChild(p)
}
 

 