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