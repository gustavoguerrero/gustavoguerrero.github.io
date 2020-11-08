
var mod = document.getElementById("EfectoModal"); /*modal*/
var txt = document.getElementById("txt"); /*botón*/
var xmd = document.getElementsByClassName("x-mod")[0]; /*cerrar*/

txt.onclick = function() /*mostrar modal*/
{
  mod.style.display = "block";
}

xmd.onclick = function() /*cerrar modal*/
{
  mod.style.display = "none";
}
 
window.onclick = function(event) /*cerrar modal en cualquier parte de la pantalla*/
{
  if (event.target == mod)
  {
    mod.style.display = "none";
  }
}
