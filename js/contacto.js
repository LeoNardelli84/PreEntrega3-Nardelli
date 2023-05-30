$("#btn-enviar").click(function(e){
    e.preventDefault();
    var nombre = $("#nombre").val();
    var comentarios = $("#comentarios").val()
    var whatsapp = "https://api.whatsapp.com/send?phone=5491123925853&text=";
 
    
    if (nombre == "") {
        alert("por favor escribe tu nombre")
    } else if (comentarios == ""){
        alert(" Por favor escribe un comentario")
    } else{
      
        whatsapp += "Hola!%20mi%20nombre%20es%20" + nombre + ",%20" + comentarios 
        $(location).attr('href', whatsapp)
        
    }
});