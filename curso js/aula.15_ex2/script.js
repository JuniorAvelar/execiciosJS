
var bnt = window.document.getElementById('bnt')
bnt.addEventListener('click', tabuada)
function tabuada(){
    var res = document.getElementById('res')
    var numero = document.getElementById('numero')
    var numeroReal = (numero.value)
    var tab = document.getElementById('seltab')

     if (numeroReal == 0){
        alert('erro! insira um número')
     }
     else{
        tab.innerHTML = ''
    for(var i = 0;  i <= 10 ; i++){
        let item = document.createElement('option')
        var resultado = numeroReal * i
        item.text = `${numeroReal}x${i} = ${resultado}`
        tab.appendChild(item)
        // var resultado = numeroReal * i
        // res.innerHTML += (`${numeroReal}x${i} = ${resultado}</br>`)
      }
    }
}