
let body = document.body;

//Cambia el color del fondo y añade etiqueta .moon al style de los elementos del body
  function modoDia(){ 
    body.classList.remove("moon");
    body.style.backgroundColor = "white";
  }

//Cambia el color del fondo y añade etiqueta .moon al style de los elementos del body
  function modoNoche(){
    body.classList.add("moon");
    body.style.backgroundColor = "black";
  }

//Muestra el icono de la flecha si el scroll de la pagina se desplaza 150px hacia abajo
  window.onscroll = function(){
    console.log(document.documentElement.scrollTop);
    if(document.documentElement.scrollTop > 150){
      console.log("check add");
      document.querySelector(".go_top_container").classList.add("show");
    } else {
      console.log("check remove");
      document.querySelector(".go_top_container").classList.remove("show");
    }
  }

//Desplaza el scroll hacia el borde superior de la página al clickar en la flecha, suavemente.
  document.querySelector(".go_top_button").addEventListener("click", () =>{
    //Lanza a la ventana hasta el top (margen superior absoluto), nos devuelve arriba.
    window.scrollTo({
      //Posición a la que nos devuelve
      top:0,
      //Desplazamiento suave hacia el top.
      behavior: "smooth",
    });
  });

  //Verificamos si el contenido de la web está totalmente cargado
  document.addEventListener('DOMContentLoaded', () => {
    let formulario = document.getElementById('formulario');
    
    //Al clickar enviar (tipo submit) se ejecuta esta funcion flecha
    formulario.addEventListener('submit', (evento) => {
      evento.preventDefault();
    
      //Pasamos valores de campos a variables
      let nombre = document.querySelector(".nom").value;
      let telefono = document.querySelector(".tel").value;
      let correo = document.querySelector(".correo").value;
      let mensaje = document.querySelector(".textarea").value;
      let reason = document.querySelector(".reason").value;
    
      //Verificamos si las variables y por lo tanto los campos están vacíos
      if (!nombre || !telefono || !correo || !mensaje || !reason) {
        swal("Error", "Completa los campos del formulario", "warning");
        //Detiene la ejecución y evita el envío
        return;
      }
      
      //Si pasamos el bucle if, nos mostrará este mensaje de confirmación
      swal("Perfecto", "Formulario enviado correctamente", "success");
    
    });
  });
    