var usuario = localStorage.getItem('nombre');

$("#btn-enviar").click(function(e){
    e.preventDefault();
    var nombre = $("#nombre").val();
    var comentarios = $("#comentarios").val()
    var whatsapp = "https://api.whatsapp.com/send?phone=5491123925853&text=";
 
    
    if (nombre == "") {
        Swal.fire({
            title: "Escribe tu nombre",
            confirmButtonColor: '#2C8FB6',
            confirmButtonText: 'Ok'
        })
    } else if (comentarios == ""){
        Swal.fire({
            title: "No te olvides de los comentarios",
            confirmButtonColor: '#2C8FB6',
            confirmButtonText: 'Ok'
        })
    } else{
      
        whatsapp += "Hola!%20mi%20nombre%20es%20" + nombre + ",%20" + comentarios 
        $(location).attr('href', whatsapp)
        
    }
});

$(".menu-derecha").click(function(){
    var typed = new Typed('#typed-menu-der', {
      strings: [ usuario+ ' te cuento un poco sobre mi, estudie programacion de forma autodidacta por siemple curiosidad, me encanta dibujar y me encanta crear cosas, la programacion web me brindaba lo mejor de los dos mundos... Asi que aca estoy, intentando aprender para poder dedicarme a lo que me apasiona.'],
      typeSpeed: 30,
      showCursor: false,
      loop: false,
  
    },);
  });