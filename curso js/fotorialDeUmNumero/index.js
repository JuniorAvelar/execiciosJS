let item = document.createElement('div')

function fatorial() {
    var numUsuario = Number( document.getElementById('Num').value)
    var f = 1
    var c = numUsuario
    while ( c >=1 ){
        f *= c
        c--
    }
    document.body.appendChild(item)
    item.innerHTML = (`O fatorial de ${numUsuario} é: ${f}`)
     }

     
    // var p = document.createElement('p')
    // document.body.appendChild(p)
    // p.innerHTML = ''