var usuario = localStorage.getItem('nombre');

$("#usuario").html(usuario).css('text-transform', 'capitalize');

$(".menu-derecha").click(function(){
    var typed = new Typed('#typed-menu-der', {
      strings: [ usuario+ ' este fue el orden en el que decidi estudiar estas tecnologias, entre medio aprendi varias herramientas para optimizar la velocidad de carga del sitio, como <a href="https://pagespeed.web.dev">PageSpeed insights de Google.</a>'],
      typeSpeed: 30,
      showCursor: false,
      loop: false,
  
    },);
  });