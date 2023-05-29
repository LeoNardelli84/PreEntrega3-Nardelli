/*
Utilice una libreria llamada SweetatAlert2 para las ventanas modal
Tuve varios inconvenientes para poder capturar la variable nombre al
comienzo de la carga del sitio (crei que podia ser interesante
llamar a la persona por su nombre para que quede mas personal).
Encontre una solucion a ese problema con async.
Lo que hago es guardar el nombre en localStorage para utilizarlo 
cuando sea necesario. 
*/

localStorage.clear();
//funciones

function descripcion(){
    var typed = new Typed('#descripcion-typed', {
        strings: ['<p class="descripcion">Hola ' + localStorage.getItem('nombre').toUpperCase() +  ', espero estes muy bien, mi nombre es Leonel, soy programador web en proceso de formación constante, espero poder sorprenderte con algunos conocimientos que fui adquiriendo con el tiempo, espero te guste.</p>'],
        typeSpeed: 30,
        showCursor: false,
        loop: false,

      },);

}


(async() => {
    const {value: nombre} = await Swal.fire({
        title: "Bienvenid@!",
        text: 'Como te llamas?',
        confirmButtonColor: '#2C8FB6',
        confirmButtonText: 'Entrar',
        footer: '<p><span class="nombre">Leonel Nardelli Design</span></p> ',
        grow: 'false', 
        input: 'text',
        inputPlaceholder: 'Pon tu nombre aqui',
        allowEscapeKey: false,
        allowOutsideClick: false
    });
    if (nombre == null){
        localStorage.setItem('nombre', 'visitante');
        } else{
            localStorage.setItem('nombre', nombre);
            Swal.fire({
                showConfirmButton: false,
                title: 'Mucho gusto ' + localStorage.getItem('nombre') + '...',
                timer: '1800',
                timerProgressBar: true
                
            }, descripcion())
        }
    }
)();

//fin modal presentacion

// -- eventos click --
$(".menu-izquierda").click(function(){
    $(".nombre-usuario").html(localStorage.getItem('nombre').toUpperCase());
});

$(".ul-nav-menu>li").click(function(){
});


$("#comenzar").click(function(){
    $(location).attr('href', '../pages/librerias.html')
});

 


