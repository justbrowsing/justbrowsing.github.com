/* http://webdesign.tutsplus.com/tutorials/htmlcss-tutorials/super-simple-lightbox-with-css-and-jquery/ */
jQuery(document).ready(function($) {
  $('.lightbox_trigger').click(function(e) {
    
    //prevent default action (hyperlink)
    e.preventDefault();
    
    //Get clicked link href
    var image_href = $(this).attr("href");
    var full_href = $(this).attr("href").replace(".png", "_fullsize.png");
    
    /*   
    If the lightbox window HTML already exists in document, 
    change the img src to to match the href of whatever link was clicked
    
    If the lightbox window HTML doesn't exists, create it and insert it.
    (This will only happen the first time around)
    */
    
    if ($('#lightbox').length > 0) { // #lightbox exists
      
      //place href as img src value
      $('.maximize').html('<a class="maximize" href="' + full_href + '"><img src="/images/expand.png" alt="Full-size" title="Full-size" /></a>');
      $('#content').html('<img class="simplebox" src="' + image_href + '" />');
         
      //show lightbox window - you could use .show('fast') for a transition
      $('#lightbox').show();
    }
    
    else { //#lightbox does not exist - create and insert (runs 1st time only)
      
      //create HTML markup for lightbox window
      var lightbox = 
      '<div id="lightbox">' +
          '<a class="maximize" href="' + full_href + '"><img src="/images/expand.png" alt="Full-size" title="Full-size" /></a>' +
        '<div id="content">' + //insert clicked link's href into img src
          '<img class="simplebox" src="' + image_href + '" />' +
        '</div>' +  
      '</div>';
        
      //insert lightbox HTML into page
      $('body').append(lightbox);
    }
    
  });
  
  //Click anywhere on the page to get rid of lightbox window
  $('#lightbox').live('click', function() { //must use live, as the lightbox element is inserted into the DOM
    $('#lightbox').hide();
  });

});
