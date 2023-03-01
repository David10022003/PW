/*Titulo*/

const maquina3 = document.getElementById('titulo')

const escribir = (text = '',tiempo = 200, etiqueta = '') => {
  let arrayCaracteres = text.split('')
  let i = 0
  let j = text.length
  let escribir = setInterval(function(){
    if (i === arrayCaracteres.length) {
      etiqueta.innerHTML = text.substring(0,j)
      j--
      if (j === 0) {
        etiqueta.innerHTML = ''
        i = 0
        j = text.length
      }
    } else {
      etiqueta.innerHTML += arrayCaracteres[i]
      i++
    }
  }, tiempo)
}

escribir("Implementación de la inteligencia artificial para elaborar código",150, titulo)

/*Tarjetas*/

  function toggle(clase){
    var blur = document.getElementById('blur');
    blur.classList.toggle('active')
    var popup = document.getElementById(clase);
    popup.classList.toggle('active')


}
