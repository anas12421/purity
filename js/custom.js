$(function(){
  "use strick"

  $(window).on('scroll' , function(){
    let scrolling = $(this).scrollTop()

    if(scrolling > 50){
      $(".menu_sign").addClass("menu_sign_ex")
    }else{
      $(".menu_sign").removeClass("menu_sign_ex")
    }


    if(scrolling > 50){
      $(".res_menu").addClass("res_menu_ex")
    }else{
      $(".res_menu").removeClass("res_menu_ex")
    }
  })


  // all counter js

  $('.counter').counterUp({
    delay: 10,
    time: 1000
});





















})