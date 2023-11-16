
function carregar() {

var msg = window.document.getElementById('msg')
var img = document.getElementById('imagem')

var data = new Date()
var hora = 22//data.getHours()
var min = data.getMinutes()

msg.innerHTML = `Agora são ${hora}:${min} horas`

if(hora >= 0 && hora < 12){
    img.src = 'manha.png'
    document.body.style.background = '#e2cd9f'

}else if (hora >= 12 && hora < 18){
    document.body.style.background = '#b9846f'
    img.src = 'tarde.png'
}else{
    img.src = 'noite.png'
    document.body.style.background = '#515154'

}
}
