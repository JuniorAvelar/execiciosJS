
function gerarTabuada(){
  var caixaN = Number(document.getElementById('CaixaNUm').value)
  var tabuada = document.getElementById('res')
  var selec = document.getElementById('tab')

  if (caixaN == 0){
    alert('ERRO! INSIRA UM NÚMERO')
  }
  else{
    // let item = document.createElement('option') 
    // item.text = `${i}x${caixaN}=${resultado}`
    selec.innerHTML = ''
    for(var i = 0; i <= 10; i++){
      let item = document.createElement('option') 

      var resultado = i * caixaN
      item.text = `${i}x${caixaN}= ${resultado}`

      selec.appendChild(item)
      
      // tabuada.innerHTML +=(`${i}x${caixaN}=${resultado}`)
    }
  }
  // tabuada.innerHTML = 'valor' 
}