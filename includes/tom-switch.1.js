$(document).ready(function(){

  function doSection(link)
  {
    href = $(link).attr('href');

    do {
      href = href.substr(0, href.indexOf('_'));
      $('a[href=' + href + ']').addClass('current');
    } while (href.indexOf('_') > 0)

    $(link).addClass('current');
    $(link).siblings('.choice.current').removeClass('current');
    START = $(link).attr('href').substr(1);

    if ($(link).siblings('div.START.current').size()) {
      switchFrom($(link).siblings('div.START.current'), START);
    }
    else {
      switchTo($('#START' + START));
    }

    history.pushState(null, null, $(link).attr('href'));
  }

  function switchFrom(START, toSection)
  {
    $(START).slideUp(600,function(){
      $(this).removeClass('current');
      $(this).children('a.choice').removeClass('current');
      $(this).children('div.START').each(function(){
        $(this).hide();
      });

      switchTo($('#START' + toSection));
    });
  }

  function switchTo(START)
  {
    $(START).addClass('current');
    $(START).slideDown(600, function(){
      $(START).parentsUntil('.start').each(function(){
        switchTo($(this));
      });
      $(document).scrollTop($(START).offset().top);
    });
  }

  function hashTo()
  {
    $('.step2').hide();
    hash = document.location.href.substr(document.location.href.indexOf('#'));
    doSection($('a[href=' +hash +']'));
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
  }

  $('.step2').hide();

  if (document.location.href.indexOf('#') > 0) {
    hashTo();
  }
  else {
    autoDetect();
  }

  $(window).bind('hashchange', function() {
    if (document.location.href.indexOf('#') > 0) {
      hashTo();
    }
  });

  $('a.choice').click(function(e){
    e.preventDefault();
    doSection(this);
  });

});

