var usuario = localStorage.getItem('nombre');

$(".usuario").html(usuario);

$(".menu-derecha").click(function(){
    var typed = new Typed('#typed-menu-der', {
      strings: [ usuario+ ' te cuento un poco sobre mi, estudie programacion de forma autodidacta por siemple curiosidad, me encanta dibujar y me encanta crear cosas, la programacion web me brindaba lo mejor de los dos mundos... Asi que aca estoy, intentando aprender para poder dedicarme a lo que me apasiona.'],
      typeSpeed: 30,
      showCursor: false,
      loop: false,
  
    },);
  });