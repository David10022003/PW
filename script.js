/*Titulo*/
const tabs = document.querySelectorAll('.tabs input');
const content = document.querySelector('.content');
const container = document.querySelectorAll('.container slider');
let currentIndex = 0;
let prevIndex = 0;

function changeSlide(index) {
  // Cambiar el índice actual y anterior
  prevIndex = currentIndex;
  currentIndex = index;

  // Actualizar la selección de pestañas y botones
  tabs[prevIndex].checked = false;
  tabs[currentIndex].checked = true;

  // Animar el desplazamiento del carrusel
  container.changeSlide;
}

setInterval(() => {
  // Cambiar al siguiente índice
  changeSlide((currentIndex + 1) % tabs.length);
}, 5000);
/*Tarjetas*/

  function toggle(clase){
    var blur = document.getElementById('tarjetas');
    blur.classList.toggle('active')
    var popup = document.getElementById(clase);
    popup.classList.toggle('active')


}
