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