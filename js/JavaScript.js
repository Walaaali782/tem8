$(document).ready(function(){
    $('.accordion-header').click(function(){
      $(this).next('.accordion-content').slideToggle();
      $('.accordion-content').not($(this).next()).slideUp();
    });
  });