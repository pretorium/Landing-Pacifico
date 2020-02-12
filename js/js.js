$(document).ready(function () {

  $('#slider_tarjetas').slick({
    centerMode: true,
    centerPadding: '1px',
    arrows: false,
    slidesToShow: 3,
  });
  $('#primer_slider').slick({
    infinite: true,
    dots: true,
    arrows: false,
  });


  $('.click_terminos').click(function () {

    $('#boxterminos').fadeIn().css('display', 'flex');
    $('.box_terminos').hide()

    if ($(this).hasClass('terminos1')) {

      $('.box_terminos:nth-child(1)').show()

    } else if ($(this).hasClass('terminos2')) {

      $('.box_terminos:nth-child(2)').show()

    } else if ($(this).hasClass('terminos3')) {

      $('.box_terminos:nth-child(3)').show()

    }

  });

  $(window).click(function (e) {
    if (!e.target.matches('.box_terminos') &&
      !e.target.matches('.box_terminos *') &&
      !e.target.matches('.click_terminos ') &&
      !e.target.matches('.click_terminos  *')) {
      $('#boxterminos').fadeOut()
    }
  });




  $('.click_info').click(function () {

    $('#box_info').fadeIn().css('display', 'flex');
    $('.box_black').hide()

    if ($(this).hasClass('terminos1')) {

      $('.box_black:nth-child(1)').show()

    } else if ($(this).hasClass('terminos2')) {

      $('.box_black:nth-child(2)').show()

    } else if ($(this).hasClass('terminos3')) {

      $('.box_black:nth-child(3)').show()

    } else if ($(this).hasClass('terminos4')) {

      $('.box_black:nth-child(4)').show()

    } else if ($(this).hasClass('terminos5')) {

      $('.box_black:nth-child(5)').show()

    } 


  });

  $('.equis').click(function (e) {
    
      $('#box_info').fadeOut()
  
  });

  $('.bt').click(function (e) {
    
    $('#box_info').fadeOut()

});












  $('#plus').click(function () {

    $(this).toggleClass('active');

    $('#desplegada').slideToggle();

  });


  // $('.beneficio').click(function(){
  //   $(this).find('.desplegable_beneficio').slideToggle();

  // });
  $('.beneficio').click(function(){
    $('.beneficio').not(this).find('.desplegable_beneficio').hide();
    $(this).find('.desplegable_beneficio').slideToggle();
 
  });




  $(window).scroll(function(){
    if(window.scrollY > $('#caja_planes').position().top){
      $('.top_btn_top').addClass('active');
    } else {
      $('.top_btn_top').removeClass('active');
    }
  });
    




});