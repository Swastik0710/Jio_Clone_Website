var swiper = new Swiper(".mySwiper", {

    centeredSlides: true,
    autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
         effect: "fade",
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
  });

function icons() {
 
   $('#icon').toggleClass("fa-bars fa-xmark");
  $('.res').toggle();
}

function iconsyo1(x){

$(x).toggleClass("fa-plus fa-minus");
$('.w').slideToggle(1000);
$('.r,.y,.i').slideUp(1000);
$('#i2,#i3,#i4').addClass('fa-plus');

}


function iconsyo2(x){

$(x).toggleClass("fa-plus fa-minus");
$('.r').slideToggle(1000);
$('.w,.y,.i').slideUp(1000);
$('#i1,#i3,#i4').addClass('fa-plus');


}


function iconsyo3(x){

$(x).toggleClass("fa-plus fa-minus");
$('.y').slideToggle(1000);
$('.r,.i,.w').slideUp(1000);
$('#i2,#i1,#i4').addClass('fa-plus');


}

function iconsyo4(x){

$(x).toggleClass("fa-plus fa-minus");
$('.i').slideToggle(1000);
$('.r,.y,.w').slideUp(1000);
$('#i2,#i3,#i1').addClass('fa-plus');


}

function iconsyo5(x){

$(x).toggleClass("fa-plus fa-minus");
$('.s').slideToggle(1000);
$('.f,.h,.k').slideUp(1000);
$('#i6,#i7,#i8').addClass('fa-plus');

}

function iconsyo6(x){

$(x).toggleClass("fa-plus fa-minus");
$('.f').slideToggle(1000);
$('.s,.h,.k').slideUp(1000);
$('#i5,#i7,#i8').addClass('fa-plus');

}


function iconsyo7(x){

$(x).toggleClass("fa-plus fa-minus");
$('.h').slideToggle(1000);
$('.f,.s,.k').slideUp(1000);
$('#i6,#i5,#i8').addClass('fa-plus');

}


function iconsyo8(x){

$(x).toggleClass("fa-plus fa-minus");
$('.k').slideToggle(1000);
$('.f,.h,.s').slideUp(1000);
$('#i6,#i7,#i5').addClass('fa-plus');

}



var darkMode;

if (localStorage.getItem('dark-mode')) {  
  darkMode = localStorage.getItem('dark-mode');  
} else {  
  darkMode = 'light';  
}
localStorage.setItem('dark-mode', darkMode);


if (localStorage.getItem('dark-mode') == 'dark') {
  $('body').addClass('dark');  
  $('.dark-button').hide();
  $('.light-button').show();
}
$('.dark-button').on('click', function() {  
  $('.dark-button').hide();
  $('.light-button').show();
  $('body').addClass('dark');  
  localStorage.setItem('dark-mode', 'dark');
});

$('.light-button').on('click', function() {  
  $('.light-button').hide();
  $('.dark-button').show();
  $('body').removeClass('dark');
  localStorage.setItem('dark-mode', 'light');   
});

$(document).ready(function(){
  $(window).scroll(function(){
    var a = $(window).scrollTop();
    if(a>300){
    $('.up').fadeIn();
  }else{

    $('.up').fadeOut();
  }


  })
  $('.up').click(function(){
   $(window).scrollTop(0);
});
});

$('.loop').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
     center: true,
     autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    items:2,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:true
        }
    }
})
