jQuery(document).ready(function(){

  i=0;

  nowPlaying = document.getElementsByClassName('playsong');
  nowPlaying[i].load();

  $('.play').on('click', function(){
    nowPlaying[i].play();
    callMeta();
  });
  $('.stop').on('click', function(){
    nowPlaying[i].pause();
    callMeta();
  });
  $('.next').on('click', function(){
    $.each($('audio.playsong'), function(){
      this.pause();
    });
    ++i;
    nowPlaying[i].load();
    nowPlaying[i].play();
    callMeta();
  })
  $('.previous').on('click', function(){
    $.each($('audio.playsong'), function(){
      this.pause();
    });
    --i;
    nowPlaying[i].load();
    nowPlaying[i].play();
    callMeta();
  })
  function callMeta(){
    var trackTitle = $(nowPlaying[i]).attr('data-songtitle');
    $('.songtitle').html(trackTitle);
    var trackArtist = $(nowPlaying[i]).attr('data-songartist');
    $('.songartist').html(trackArtist);
    var albumArt = $(nowPlaying[i]).attr('data-albumart');
    $('img.albumart').attr('src', albumArt);
  }
})
