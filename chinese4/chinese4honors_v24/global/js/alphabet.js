$(document).ready(function () {
  $.getJSON('../../global/js/alphabet.json', getVocabInfo);

  function getVocabInfo(data) {
    $('.vocabElement').each(function (i, value) {
      var group = $(this).data('group');
      var width = $(this).data('maxwidth');
      var height = $(this).data('maxheight');
      var lightboxtext = $(this).data('lightboxtext');
      var page = $(this).data('page');

      var word = data.words.filter(function (word) {
        return word.vocab == lightboxtext && word.page == page;
      });

      word = word[0];

      if (word != undefined) {
        $(this).colorbox({
          rel: group,
          width: width,
          height: height,
          html: buildHTML(word)
        });

      } else {
        console.log('!! Error with word: ' + lightboxtext);
      }
    });
  }

  function buildHTML(word) {
    var html = '<img src="' + word.image.source + '" alt="' + word.image.alt + '" class="' + word.image.class + '" data-width="' + word.image.width + '"data-copyright="' + word.image.copyright + '"data-caption="' + word.image.caption + '" />';

    html += '<div class="vocab_content"><div class="sptFrame pull-right" data-phrase="' + word.simplyspeak + '"></div><p class="vocab_word" lang="he">' + word.vocab + '</p><p class="vocabExample">' + word.written + '</p><p class="engTrans">' + word.pronunciation + '</p>';
    html += '<audio class="audioPlayer pull-left" style="width: 260px;" controls src="' + word.audio + '"></audio>';
    //html += '<br class="clear"><div class="audio_container pull-right"><div id="mep_1" class="mejs-container svg audio mejs-cf20 mejs-audio" style="width: 250px; height: 30px;"><div class="mejs-inner"><div class="mejs-mediaelement"><audio class="audioPlayer mejs-cf20" src="' + word.audio + '" preload="none" style="width: 100%; height: 100%;"></audio></div><div class="mejs-layers"><div class="mejs-poster mejs-layer" style="display: none; width: 100%; height: 100%;"></div></div><div class="mejs-controls"><div class="mejs-button mejs-playpause-button mejs-play"><button type="button" aria-controls="mep_1" title="Play/Pause" aria-label="Play/Pause"></button></div><div class="mejs-time-rail" style="width: 100px;"><span class="mejs-time-total" style="width: 90px;"><span class="mejs-time-buffering" style="display: none;"></span><span class="mejs-time-loaded"></span><span class="mejs-time-current"></span><span class="mejs-time-handle"></span><span class="mejs-time-float"><span class="mejs-time-float-current">00:00</span><span class="mejs-time-float-corner"></span></span></span></div><div class="mejs-time mejs-duration-container"><span class="mejs-duration">00:00</span></div><div class="mejs-button mejs-volume-button mejs-mute"><button type="button" aria-controls="mep_1" title="Mute Toggle" aria-label="Mute Toggle"></button></div><div class="mejs-horizontal-volume-slider mejs-mute"><div class="mejs-horizontal-volume-total"></div><div class="mejs-horizontal-volume-current" style="width: 40px;"></div><div class="mejs-horizontal-volume-handle" style="left: 27px;"></div></div></div><div class="mejs-clear"></div></div></div></div>';
    html += '</div>';

    return html;
  }

});
