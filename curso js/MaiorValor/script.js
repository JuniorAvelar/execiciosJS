
  // Criando <h1>
  var h1 = document.createElement('h1')
  h1.innerText = 'Maior Valor'
  document.body.appendChild(h1)


// criando botao pelo js
function createButtom(n,acao){
var buttom = document.createElement('button')
buttom.innerText = n
document.body.appendChild(buttom)
buttom.addEventListener('click', acao )
}
var bnt = createButtom('clique para começar',enviar)

// criando <p>
var p = document.createElement('p')
p.innerText = 'Analisando os valores 0 e 0, ambos são IGUAIS'
document.body.appendChild(p)

 function enviar(){
    var n1 = Number(prompt('digite um número:'))
    var n2 = Number(prompt('digite um número:'))
    var n3 = Number(prompt('digite um número:'))
    
    if (n1 > n2 && n1 > n3){
        p.innerHTML = (`${n1} é maior que ${n2} e ${n3}`)
    }
    else if (n2 > n1 && n2 > n3){
        p.innerHTML = (`${n2} é maior que ${n1} e ${n3}`)
    }
    else if(n3 > n1 && n3 > n2) {
        p.innerHTML = (`${n3} é maior que ${n1} e ${n2}`)
    }
 }
    

 