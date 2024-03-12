// ----------------------------------------------------------------------
// -- COURSE SPECIFIC JS:
// ----------------------------------------------------------------------
// -- NOTE: This is where you can add anything you need to do specifically to the course, it will load lastly.
// -- ABOUT: THis file will over-ride everything else, if you need to customize
// -- AUTHOR: You - WDS
// ======================================================================


$(function() {
    var loc = window.location.href; // returns the full URL

    $('.menu_links').find('.tool-box, .speech_tool, .link_resources').attr('target', '_blank');
    /* $('a', speech_tool).attr('target', '_blank') */


    // Add lang tags to popover titles
    $(':lang(zh) .pop-over').on('click',function(){
        $(this).siblings('.popover').children('.popover-title').attr('lang','zh');
    });

    if($('#externalContent').length > 0) {
        addExternalContentHolder();
    }

    /* $(".checklist a").each(function () {
      $(this).attr('lang', 'zh');
    });

    if($('.breadcrumbs_module').length && $('.breadcrumbs_module').html().indexOf('Collaboration') < 0) {
      $('.breadcrumbs_module').attr('lang','zh');
      $('.breadcrumbs_lesson').attr('lang','zh');
    }*/

    $('.lesson_checklist a').each(function(){
        if($(this).html().indexOf('Collaboration') >= 0) {
            $(this).removeAttr('lang');
        }
    });
});


// ================================================
// initialize QUIZMO
// ================================================
var ngLibraryLocation = "//cdn.flvs.net/cdn/il/ng_il/";
let ngDisableRemoteCss = false;

$.getScript(ngLibraryLocation + 'launcher.js');



// =======================================================
// list checkbox
// =======================================================
if ($('.list-decorative-checkbox').length) {
    $('.list-decorative-checkbox li').each(function () {
        $(this).attr('tabindex', '0');
    });
}
$('.list-decorative-checkbox li').on('keypress', function (event) {
    if (event.which === 13) {
        event.preventDefault();
        $(this).toggleClass('check');
    }
});
$('.list-decorative-checkbox li').on('click', function () {
    $(this).toggleClass('check');
});


function addExternalContentHolder() {
    var extContent = $('#externalContent').html();
    $('#externalContent').empty().prepend('<div class="extContainer"></div>');
    $('.extContainer').append(extContent);
}


let audiosTv;
setTimeout(() => {
    audiosTv = document.querySelectorAll(" .il_textversion_question .audio")
    audiosTv.forEach((audio)=>{ audio.muted=false}) // set true if audio starts auto playing in tv
    console.log(audiosTv)
}, 4000)
