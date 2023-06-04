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
        strings: ['<p>¡Saludos ' + localStorage.getItem('nombre').toUpperCase() + ' bienvenid@ a mi CV en línea! Soy un apasionado desarrollador frontend y estoy emocionado de presentarte mi trayectoria profesional y habilidades en diseño y programación. Echa un vistazo a mi portafolio y descubre las tecnologias con las que he trabajado. Si deseas colaborar o tienes alguna consulta, ¡no dudes en contactarme! ¡Espero que disfrutes navegando por mi sitio!</p>'],
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
        footer: '<p><span class="nombre">Coder House - PF</span></p> ',
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
    $(".nombre-usuario").html(localStorage.getItem('nombre'));
});

$("#comenzar").click(function(){
    $(location).attr('href', './pages/librerias.html')
});

 


