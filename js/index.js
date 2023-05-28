localStorage.clear();
//funciones
function descripcion(){
    var typed = new Typed('#descripcion-typed', {
        strings: ['<p class="descripcion">Hola ' + localStorage.getItem('nombre') +  ', espero estes muy bien, mi nombre es Leonel, soy programador web en proceso de formación constante, espero poder sorprenderte con algunos conocimientos que fui adquiriendo con el tiempo, espero te guste.</p>'],
        typeSpeed: 30,
        showCursor: false,
       loop: false
      });
}


(async() => {
    const {value: nombre} = await Swal.fire({
        title: "Bienvenid@!",
        text: 'Como te llamas?',
        confirmButtonColor: '#2C8FB6',
        confirmButtonText: 'Comenzar',
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


 


