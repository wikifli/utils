// Código para ocultar las flechas del carrusel en el primer y ultimo elemento.
// La primera línea va siempre y cuando en el carrusel el primer elemento sea el activo por defecto.
$('#myCarousel').children('.left.carousel-control').hide();
$('#myCarousel').on('slid.bs.carousel', '', function() {
  var $this = $(this);

  $this.children('.carousel-control').show();

  if($('.carousel-inner .item:first').hasClass('active')) {
    $this.children('.left.carousel-control').hide();
  } else if($('.carousel-inner .item:last').hasClass('active')) {
    $this.children('.right.carousel-control').hide();
  }

});

//Código para que el carrusel no haga slide automatico y no haga loop
$('#myCarousel').carousel({
  interval:false,
  wrap:false
});
