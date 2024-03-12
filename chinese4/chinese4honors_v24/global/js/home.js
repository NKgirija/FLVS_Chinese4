// ----------------------------------------------------------------------
// -- COURSE SPECIFI JS:
// ----------------------------------------------------------------------
// -- NOTE: This is where you can add anything you need to do specifically to the course homepage, it will load lastly.
// -- ABOUT: THis file will over-ride everything else, if you need to customize
// -- AUTHOR: You - WDS
// ======================================================================

var globalImagePath = "global/images/home/";
var resolution = ''

$(document).ready(activate);

function activate() {
    $('body').fadeIn(500);
    runPolyfills();

    //No course title text, only background image
    // $("#course_title").remove();
    //$("#course_title").html('<img src="global/images/home/index_title.png"/>');
    //-------------------need to see if the sitemap is ready, if not lets wait for the ajax to finish---------------------//
    if (FLVS.Sitemap) createMenus(); else {
        $(document).ajaxSuccess(function (event, xhr, settings) {
            if (settings.url == "global/xml/sitemap.xml") createMenus();
        });
    }
}

function createLessonMenu(t, e) {
    let module = '#' + t;
    if ($(module).hasClass('selected')) return; //stop event from body

    if (e) e.stopPropagation(); //hide all sub menus

    $('.nav_menu_lessons').hide();
    $('.moduleLink .lessons').hide();
    $('.moduleLink.selected').removeClass('selected');
    $(module).addClass('selected');

    modID = ".".concat(t, ".lesson");
    showPopup(modID);
}

function createMenus() {
    //console.log(FLVS.Sitemap);
    var module, link, modTitle, lesson, minutes, points, submenu, menuItem, totaltime, totalpoints, popupmenu; //Top Menu button

    var menu = $('<ul class="nav_menu_modules" />'); // Submenu area

    var moduleSubs = $('<div class="subMenu" />');
    var moduleSubsSegOne = $('<div class="segOne" />');
    var segOneGraphic = $('<img src="global/images/home/seg1.png" alt="Segment one" /><br>');
    var moduleSubsSegTwo = $('<div class="segTwo" />');
    var segTwoGraphic = $('<img src="global/images/home/seg2.png" alt="Segment two" /><br>');
    var modules = FLVS.Sitemap.module;

    // moduleSubsSegOne.append(segOneGraphic);
    // moduleSubsSegTwo.append(segTwoGraphic);

    for (var i = 0; i < modules.length; i++) {
        module = modules[i]; //Assign module title

        let num = module.num ? Number(module.num) : 0
        var realNum = parseInt(num);

        modTitle = module.title;
        modNumber = module.num; // Lesson Menus

        submenu = $("<ul class=\"nav_menu_lessons mod".concat(i + 1, "\" />"));
        link = ""; //used for lesson menu columns

        popupmenu = '<div class="module'.concat(num, ' lesson">');
        /*popupmenu += '<h3 class="moduleTitle">'.concat(modTitle, "</h3>");*/
        var subsLessons = $('<div class="lessons"/>');
        var numTotalLessons = module.lesson.length - 1;
        var numLessons = Math.round(numTotalLessons / 2); // Run through each lesson

        for (var j = 0; j < module.lesson.length; j++) {
            lesson = module.lesson[j];
            minutes = lesson.time === 1 ? 'min' : 'mins';
            points = lesson.points === 1 ? "pt" : 'pts';
            link = lesson.page[0].href.replace("../../", ""); //use for 2 column

            link2 = link;
            link = $('<a />').attr('href', link);
            subsLessons.append(link.clone().html([$('<span class="linkColor lesson_num" />').html(lesson.num)[0], $('<span />').html(lesson.title)[0]])[0]);
            if (j == 0) popupmenu += '<div class="col-sm-3 modcase"><div class="flexme-popmenu"><div class="text-right"><h3 class="moduleTitle"><nobr>Module <span class="unlock mnumber">' + realNum + '</span></nobr></h3><p>' + modTitle + '</p></div></div> </div><div class="col-sm-3">';
            popupmenu += "<a href=\"".concat(link2, "\"><span class=\"linkColor lesson_num\">").concat(lesson.num, "&nbsp;&ndash;&nbsp;</span><span class=\"lesson_name\">").concat(lesson.title, "</span><br></a>");
            if (j == numTotalLessons) subsLessons = popupmenu + '</div></div>'; else if (j == numLessons) popupmenu += '</div><div class="col-sm-3">';
            link.html([$('<span class="lesson_num" />').html('<p>' + lesson.num + '</p>')[0], $('<span class="lesson_title" />').html(lesson.title)[0], $('<span class="lesson_nfo" />').html("".concat(lesson.time, " ").concat(minutes, " | ").concat(lesson.points, " ").concat(points))[0]]);
            submenu.append($('<li />').html(link));
        }

        var hidden = ['Getting Started', 'Collaboration', 'POC Template Designs', 'Style Guide', 'Welcome'];
        var temp = $('<a href="javascript:void(0)" class="modlink" />');

        if (hidden.indexOf(module.title) !== -1) {
            menuItem = temp.html(module.title).addClass('top-mod')
            if (module.title === 'Collaboration') temp.addClass('collab')
        } else menuItem = temp.html([
            $('<span class="num" />').html(module.num),
            $('<span class="title" />').html(module.title)
        ])

        menuItem = $('<li />').append(menuItem).append(submenu);

        if (module.visible === 'true') menu.append(menuItem);

        if (num > 0 && num < 4) {
            // var normal = $('<span />').html('0' + num);
            var normal = $('<span class="mnumber" />').html(num);
            var _temp = $("<a href=\"javascript:void(0);\" id=\"mod_over_".concat(num, "\" />")).html(normal)[0];

            moduleSubsSegOne.append($("<div class=\"moduleLink invisible\" id=\"module".concat(num, "\"/>")).html(_temp));
        } else if (num > 3 && num < 7) {
            // var normal = $('<span />').html('0' + num);
            var normal = $('<span class="mnumber" />').html(num);
            var _temp = $("<a href=\"javascript:void(0);\" id=\"mod_over_".concat(num, "\" />")).html(normal)[0];

            moduleSubsSegTwo.append($("<div class=\"moduleLink invisible\" id=\"module".concat(num, "\"/>")).html(_temp));
        }

        unlockPage.init("index refresh");

        moduleSubs.append(moduleSubsSegOne);
        moduleSubs.append(moduleSubsSegTwo);

        $('#lessons').append(subsLessons);

    } //add menu to Menu Top button

    console.log(moduleSubs);

    $('#nav_menu').append(menu);
    $('.modules').append('<div class="segmentIndicators"></div>');
    $('.modules').append(moduleSubs);
    $('#modules').append('<div class="clear">&nbsp;</div>');
    setupEvents();

    setTimeout(function () {
        var increment = 100;
        $('.invisible').each(function () {
            var link = $(this)
            setTimeout(function () {
                link.removeClass('invisible');
            }, increment);
            increment += 50;
        });
    }, 800);
}

function hidePopup() {
    $('#content').removeClass('open');
    $('.moduleLink.selected').removeClass('selected');

    // nudge background back down
    $('#title').animate({'margin-top': '0'});
}

function hideAllLessons() {
    $('#lessons .lesson').removeClass('active');
}

function runPolyfills() {
    // Production steps of ECMA-262, Edition 5, 15.4.4.18
// Reference: http://es5.github.io/#x15.4.4.18
//   console.log('array foreach', !!Array.prototype.forEach)
    if (!Array.prototype.forEach) {

        Array.prototype.forEach = function (callback/*, thisArg*/) {

            var T, k;

            if (this == null) {
                throw new TypeError('this is null or not defined');
            }

            // 1. Let O be the result of calling toObject() passing the
            // |this| value as the argument.
            var O = Object(this);

            // 2. Let lenValue be the result of calling the Get() internal
            // method of O with the argument "length".
            // 3. Let len be toUint32(lenValue).
            var len = O.length >>> 0;

            // 4. If isCallable(callback) is false, throw a TypeError exception.
            // See: http://es5.github.com/#x9.11
            if (typeof callback !== 'function') {
                throw new TypeError(callback + ' is not a function');
            }

            // 5. If thisArg was supplied, let T be thisArg; else let
            // T be undefined.
            if (arguments.length > 1) {
                T = arguments[1];
            }

            // 6. Let k be 0.
            k = 0;

            // 7. Repeat while k < len.
            while (k < len) {

                var kValue;

                // a. Let Pk be ToString(k).
                //    This is implicit for LHS operands of the in operator.
                // b. Let kPresent be the result of calling the HasProperty
                //    internal method of O with argument Pk.
                //    This step can be combined with c.
                // c. If kPresent is true, then
                if (k in O) {

                    // i. Let kValue be the result of calling the Get internal
                    // method of O with argument Pk.
                    kValue = O[k];

                    // ii. Call the Call internal method of callback with T as
                    // the this value and argument list containing kValue, k, and O.
                    callback.call(T, kValue, k, O);
                }
                // d. Increase k by 1.
                k++;
            }
            // 8. return undefined.
        };
    }
}

function setupEvents() {
    let modName
    let modID // Event for Menu Button
    let modules = $('.modlink')
    let lessons = $('.nav_menu_lessons')

    $('.menubtn, .menubtn_mobile').click(function () {
        //Get rid of lesson backdrop/lesson menus/nav menus
        let menu = $('#nav_menu')
        let button = $(this)

        $('.lesson_backdrop').remove();
        $('.moduleLink .lessons').hide();
        modules.removeClass('selected')

        lessons.hide();

        if (!menu.is(':visible')) {
            $('body').append('<div class="menu_backdrop">&nbsp;</div>');

            $('.menu_backdrop').click(function () {
                menu.fadeToggle('fast');
                $(this).remove();
                button.removeClass('selected')
            });

            button.addClass('selected')
        } else {
            $('.menu_backdrop').remove();
            button.removeClass('selected')
        }

        menu.fadeToggle('fast');
    })

    // Event for Showing Top Menu Lessons
    modules.click(function () {
        lessons.hide()

        let isModuleSelected = $(this).hasClass('selected')
        modules.removeClass('selected')

        if (isModuleSelected) return

        $(this)
            .addClass('selected')
            .next().stop().fadeIn('fast');
    })

    $('.moduleLink').click(function (e) {
        createLessonMenu($(this).attr("id"), e);
    });

    showPage();
}

function showPage() {
    // FADE IN CONTENT and position the nav_menu
    $('body').css('visibility', 'visible').hide();
    $('body').fadeIn(800, function () {
        // Navigation Position
        var pos = $('#menu_inner').offset();
        $('#nav_menu').css('left', pos.left + 'px'); // Position Popup Menu

        $(window).on('resize', function () {
            var pos = $('#menu_inner').offset();
            $('#nav_menu').css('left', pos.left + 'px');
        });
    }); // For unlock to work

    if (typeof gsVars !== 'undefined') {
        if (typeof gsVars.custom_tpl !== 'undefined' && gsVars.custom_tpl.indexOf('maln_false') >= 0 || gsVars.custom_sln) {
            $.getScript("global/js/unlock.js").done(function (script, textStatus) {
                $('<link>', {
                    rel: 'stylesheet',
                    type: 'text/css',
                    'href': "global/css/unlock.css"
                }).appendTo('head');
                console.log(textStatus);
            });
            $(".nav_menu_lessons li a .lesson_title").css({
                "font-size": "18px",
                "font-weight": "bold"
            });
            $(".modules p").css({
                "margin-top": "15px"
            });
        }
    }

    adjustLessonPopup();

    document.getElementById("module1").click();
}

function adjustLessonPopup() {
    if ($('.subMenu').height() === 0) {
        setTimeout(function () {
            adjustLessonPopup()
        }, 1000);
    } else {
        console.log($('.subMenu .moduleLink').height());
        console.log($('.segOne img').height());

        let subAdj = Math.ceil($('.subMenu .moduleLink').height() / 2 + $('.segOne img').height());
        $('.subMenu').css('top', '-' + subAdj + 'px');
    }
}

function showPopup(modID) {
    hideAllLessons();
    $(modID).addClass('active');
    $('#content').addClass('open');
}

$(window).resize(function () {
    adjustLessonPopup();
})



