

function clicar(){
    var res = window.document.getElementById('res')
    var numeroAleatorio = Math.random() * 100
    var num = Math.trunc(numeroAleatorio)
    res.style.color = ''
     res.innerHTML += `<p>Acabei de pensar no número <mark>${num}</mark>!</p>`
     
}
function limpar(){
    res.innerHTML = ''
}