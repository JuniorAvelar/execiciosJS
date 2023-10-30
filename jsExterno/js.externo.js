
//da fucionalidade para o botão
bnt1.addEventListener('click', acao1)
bnt2.addEventListener('click', acao2)
bnt3.addEventListener('click', acao3)
bnt4.addEventListener('click', acao4)

//
var res = window.document.getElementById('res')

function acao1() {
  
    res.innerHTML += ('<p>clicou no primeiro botao </p>')
  
} 
function acao2(){
    
        res.innerHTML += ('<p>clicou no segundo botao </p>')
      
}
function acao3(){
    
        res.innerHTML += ('<p>clicou no terceiro botao </p>')
      
}
function acao4(){
    
        res.innerHTML += ('<p>clicou no quarto botao </p>')
    
}