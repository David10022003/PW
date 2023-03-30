/*Tarjetas*/

  function toggle(clase){
    var blur = document.getElementById('tarjetas');
    blur.classList.toggle('active')
    var popup = document.getElementById(clase);
    popup.classList.toggle('active')
}
