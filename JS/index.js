$(function(){  // $(document).ready shorthand
    $('.banner').fadeIn('slow');
  });
  
$(document).ready(function() {
      
/* Every time the window is scrolled ... */
$(window).scroll( function(){
      
/* Check the location of each desired element */
$('.Toys').each( function(i){
              
    var bottom_of_object = $(this).position().top + $(this).outerHeight();
    var bottom_of_window = $(window).scrollTop() + $(window).height();
              
/* If the object is completely visible in the window, fade it it */
    if( bottom_of_window > bottom_of_object - 600){
                  
    $(this).animate({'opacity':'1'},3000);
                                            }
            });
      });   
  });



$(function(){  // $(document).ready shorthand
    $('.banner').fadeIn('slow');
  });
  
$(document).ready(function() {
      
/* Every time the window is scrolled ... */
$(window).scroll( function(){
      
/* Check the location of each desired element */
$('.Inhance').each( function(i){
              
    var bottom_of_object = $(this).position().top + $(this).outerHeight();
    var bottom_of_window = $(window).scrollTop() + $(window).height();
              
/* If the object is completely visible in the window, fade it it */
    if( bottom_of_window > bottom_of_object - 600){
                  
    $(this).animate({'opacity':'1'},3000);
                                            } 
            }); 
      }); 
  });




$(function(){  // $(document).ready shorthand
    $('.banner').fadeIn('slow');
  });
  
$(document).ready(function() {
      
/* Every time the window is scrolled ... */
$(window).scroll( function(){
      
/* Check the location of each desired element */
$('.WRI').each( function(i){
              
    var bottom_of_object = $(this).position().top + $(this).outerHeight();
    var bottom_of_window = $(window).scrollTop() + $(window).height();
              
/* If the object is completely visible in the window, fade it it */
    if( bottom_of_window > bottom_of_object - 600){
                  
    $(this).animate({'opacity':'1'},3000);
                                            }
            }); 
      });
  });