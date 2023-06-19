
let body = document.body;
//Cambia el color del fondo y elementos del body 
  function modoDia(){ 
    body.style.backgroundColor = "white";
    body.style.color = "black";
  }

//Cambia el color del fondo y elementos del body
  function modoNoche(){
    body.style.backgroundColor = "black";
    body.style.color = "white";
  }

//Muestra el icono de la flecha si el scroll de la pagina se desplaza 150px hacia abajo
  window.onscroll = function(){
    console.log(document.documentElement.scrollTop);
    if(document.documentElement.scrollTop > 150){
      console.log("check add");
      document.querySelector(".go_top_container").classList.add("show");
    } else {
      console.log("check REMOVE");
      document.querySelector(".go_top_container").classList.remove("show");
    }
  }

//Desplaza el scroll hacia arriba al clickar en la flecha, suavemente.
  document.querySelector(".go_top_button")
  .addEventListener("click", () =>{
    window.scrollTo({
      top:0,
      behavior: "smooth",
    });
  });

