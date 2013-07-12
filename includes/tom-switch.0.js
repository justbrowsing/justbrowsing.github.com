$(document).ready(function(){




  $('a.choice').click(function(e){
    e.preventDefault();

    doSection(this);
  });

  function doSection(link)
  {
    $(link).siblings('.choice.current').removeClass('current');
    START = $(link).attr('href').substr(1);

    if($(link).siblings('div.START.current').size())
    {
      switchFrom($(link).siblings('div.START.current'), START);
    }
    else
    {
      switchTo($('#START' + START));
    }

    history.pushState(null, null, $(link).attr('href'));
  }
///////////////////////////////////
/* 
  $('a.choice').click(function(e){

    $(this).siblings('.choice.current').removeClass('current');
    $(this).addClass('current');

    START = $(this).attr('href').substr(1);

    if($(this).siblings('div.START.current').size())
    {
      switchFrom($(this).siblings('div.START.current'), START);
    }
    else
    {
      switchTo($('#START' + START));
    }

    history.pushState(null, null, $(this).attr('href'));
  });
*/
  function switchFrom(START, toSTART)
  {
    $(START).slideUp(600,function(){
      $(this).removeClass('current');
      $(this).children('a.choice').removeClass('current');
      $(this).children('div.START').each(function(){
        $(this).hide();
      });

      switchTo($('#START' + toSTART));
    });
  }

  function switchTo(START)
  {
    $(START).addClass('current');
    $(START).slideDown(600);
  }

  function autoDetect()
  {
    $('#chooseCD').addClass('current');
    switchTo($('#STARTcd'));
    var detectOS = navigator.platform;
    if (detectOS == "Win32") {
      $('#chooseCD_WIN6').addClass('current');
      switchTo($('#STARTcd_win6'));
    }
    else if (detectOS == "Win64") {
      $('#chooseCD_WIN7').addClass('current');
      switchTo($('#STARTcd_win7'));
    }
    else if (detectOS == "Linux i686" || detectOS == "Linux x86_64") {
      $('#chooseCD_GNOME').addClass('current');
      switchTo($('#STARTcd_gnome'));
    }
    else if (detectOS == "MacIntel") {
      $('#chooseCD_OSX').addClass('current');
      switchTo($('#STARTcd_osx'));
    }
    else {
      $('#chooseCD_KDE').addClass('current');
      switchTo($('#STARTcd_kde'));
    }
  }

  $('.step2').hide();

  if(document.location.href.indexOf('#') > 0)
  {
    hash = document.location.href.substr(document.location.href.indexOf('#'));
    doSection($('a[href=' +hash +']'));
  }

  /*if(!window.location.hash) {
    autoDetect();
  }*/

});

