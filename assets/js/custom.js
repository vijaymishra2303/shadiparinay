
$('.mySlider').owlCarousel({
    loop:true,
    margin:15,
    nav:false,
    autoplay:true,
    autoplayTimeout:1500,
  autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        }

    }
})





$('.happyBirthday').owlCarousel({
    loop:true,
    margin:15,
    nav:false,
    autoplay:true,
    autoplayTimeout:2000,
  autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1200:{
            items:3     }

    }
})

$('.brigeProfileSlider').owlCarousel({
    loop:true,
    margin:15,
    nav:false,
    autoplay:true,
    autoplayTimeout:2500,
  autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4    }

    }
})


$('.groomProfileSlider').owlCarousel({
    loop:true,
    margin:25,
    nav:false,
    autoplay:true,
    autoplayTimeout:3000,
  autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4   }

    }
})


$('.loverProfile').owlCarousel({
    loop:true,
    margin:25,
    nav:false,
    autoplay:true,
    autoplayTimeout:3500,
  autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4   }

    }
})

$('.testimonialText').owlCarousel({
    loop:true,
    margin:25,
    nav:false,
    autoplay:true,
    autoplayTimeout:2000,
  autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3   }

    }
})



$('.registerSlider').owlCarousel({
    loop:true,
    margin:15,
    nav:false,
    autoplay:true,
    autoplayTimeout:2000,
  autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
            1000:{
                items:1
            }
        

    }
})


$('.loginSlider').owlCarousel({
    loop:true,
    margin:15,
    nav:false,
    autoplay:true,
    autoplayTimeout:2000,
  autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
            1000:{
                items:1
            }
        

    }
})


$('.proPic').owlCarousel({
    loop:true,
    margin:15,
    nav:false,
    autoplay:true,
    autoplayTimeout:2000,
  autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
            1000:{
                items:1
            }
        

    }
})



$('.viewSlider').owlCarousel({
    loop:true,
    margin:15,
    autoHeight:true,
    animateOut: 'fadeOut',
    nav:true,
    autoplay:false,
    autoplayTimeout:2000,
  autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
            1000:{
                items:1
            }
        

    }
})







  // Show the first tab and hide the rest
$('#tabs-nav li:first-child').addClass('active');
$('.tab-content').hide();
$('.tab-content:first').show();

// Click function
$('#tabs-nav li').click(function(){
  $('#tabs-nav li').removeClass('active');
  $(this).addClass('active');
  $('.tab-content').hide();
  
  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;
});


// mobile menu

$(document).ready(function(){
    $(".openMenu").click(function(){
      $(".myNav").addClass("active");
    });
    $(".hideMe").click(function(){
        $(".myNav").removeClass("active");
      });

    
  });

  $(document).ready(function(){

      $(".openMenu2").click(function(){
        $(".dashBoard").addClass("active2");
      });
      $(".hideMe2").click(function(){
        $(".dashBoard").removeClass("active2");
      });

  });




  $(document).ready(function(){

    $(".searchB").click(function(){
      $(".searchWindow").addClass("active");
    });
    $(".closse").click(function(){
      $(".searchWindow").removeClass("active");
    });

});







$('#exampleModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) 
    var recipient = button.data('whatever') 
   
    var modal = $(this)
    modal.find('.modal-title').text('New message to ' + recipient)
    modal.find('.modal-body input').val(recipient)
  })








 

   