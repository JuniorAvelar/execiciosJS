var _dia = document.getElementById('dia')
var _mes = document.getElementById('mes')
var _ano = document.getElementById('ano')
var _semana = document.getElementById('semana')
var _hora = document.getElementById('hora')
var _minutos = document.getElementById('minutos')
var _segundos = document.getElementById('segundos')

var bnt = document.getElementById('bnt')
 bnt.addEventListener('click', analisar)//clia um evendo de clicar 

function analisar(){
// obtem a hora data 
var daTa = new Date()
//dia
var Data = daTa.getDate()
// mês
var mes = daTa.getMonth()
// ano
var ano= daTa.getFullYear()
// semana
var semana_ = daTa.getDay()
//hora
var hora = daTa.getHours()
//minutos
var minutos = daTa.getMinutes()
//seugudos
var segundos = daTa.getSeconds()

//vai receber a semano confome o resultado do if
var semana = ''

// recebe o resultado do switch
var MesReal = ''

if (semana_ == 0){
    semana = 'domigo'
}else if (semana_ == 1){
    semana = 'sengunda-feira'
}else if (semana_ == 2){
    semana = 'terça-feira'
 }else if (semana_ == 3){
    semana = 'quarta-feira'
 }else if (semana_ == 4){
    semana = 'quinta-feira' 
 }else if(semana_ == 5){
    semana = 'sexta-feira'
 }else{
    semana = 'sabadou'
 }

 // pega o numero que o sistema mandou e transforma no mes correspondente
 switch(mes) {
    case 0:
        MesReal = 'janeiro'
    break
    case 1:
        MesReal = 'fevereiro'
        break
    case 2:
        MesReal = 'março'
        break
    case 3:
        MesReal = 'abril'
        break
    case 4:
        MesReal = 'maio'
        break
    case 5:
        MesReal = 'junho'
        break
    case 6:
         MesReal = 'julho'
         break
    case 7 :
        MesReal = 'agosto'
        break
    case 8:
        MesReal = 'setembro'
        break
     case 9: 
        MesReal = 'outubro'
        break
    case 10:
        MesReal = 'novembro'
    case 11:
        MesReal = 'dezenbrou'
        break
    }

 //mostra na tela o resultado para o usuário  // Atualiza os elementos HTML com as informações atualizadasp
    _dia.innerHTML = (`dia: ${Data}`)
    _mes.innerHTML = (`mês: ${MesReal}`)
    _ano.innerHTML = (`ano: ${ano}`)
    _semana.innerHTML = (`dia da semana: ${semana}`)
    _hora.innerHTML = (`hora : ${hora}`)
    _minutos.innerHTML =(`minutos: ${minutos}`)
    _segundos.innerHTML = (`seundos: ${segundos}`)
}