var usuario = localStorage.getItem('nombre')
$(".nombre-usuario").html(usuario);

var typed = new Typed('#typed-ejemplo', {
    strings: ['Typed.js es una libreria javascript para realizar estos efectos de que el texto se vaya escribiendo, muy divertida y sobre todo util'],
    typeSpeed: 30,
    showCursor: false,
    loop: false,

  },);

//eventos click
  $("#swal-ejemplo-top").click(function(){
    Swal.fire({
        title: 'Ejemplo modal top',
        position: 'top'
    })
  });
  $("#swal-ejemplo-bottom").click(function(){
    Swal.fire({
        title: 'Que te parece ' + usuario + '?',
        position: 'bottom'
    })
  });