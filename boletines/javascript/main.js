//obtener elementos de una clase .close
let close = document.querySelectorAll(".close");
//Recorrerlo
close.forEach(function(link){

    //agregar un evento click a cada uno de ellos
    link.addEventListener("click", function(ev){
        ev.preventDefault();
        let content =document.querySelector('.content');

        //quitarle las clases de anumacion a .content
        content.classList.remove("fadeInDown");
        content.classList.remove("animated");
       
        ///agregar clases para anuimar su salida  fadeOutUp
        content.classList.add("fadeOutUp");
        content.classList.add("animated");

        //que al clickear vuelva al archivo raiz y retrase 1seg la animacion
        setTimeout(function(){
            location.href = "/boletines";
        },1000);
        
        return false;
    });
});
