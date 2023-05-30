var usuario = localStorage.getItem('nombre');

$(".progress").click(function(){

    var barra = $(this).children();
    var hab = barra.children('h5').html()
   
    switch (hab) {
      case 'HTML 5':
        barra.css('width', '98%')
        break;
      case 'Javascript':
        barra.css('width', '75%')
        break;
      case 'CSS':
        barra.css('width', '95%')
        break;
      case 'Bootstrap':
        barra.css('width', '90%')
        break;
      case 'Jquery':
        barra.css('width', '70%')
        break;
      case 'Git':
        barra.css('width', '60%')
        break;
      case 'Github':
        barra.css('width', '80%')
        break;
      case 'Linux':
        barra.css('width', '45%')
        break;
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