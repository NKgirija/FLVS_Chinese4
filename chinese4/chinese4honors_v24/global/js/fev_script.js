var fevcode_chinese = {
    instr_opened: false,

    "dialogHead": function () {
        // Module 1 - icon
        $(document).find(".icon_local.proverb").html("<img src='../../global/images/icons/proverb_icon.png' alt=''><span class='copyright'>©Shutterstock</span>");
        $(document).find(".icon_local.proverb").attr("data-alt", "");
        $(document).find(".icon_local.culture").html("<img src='../../global/images/icons/culture_icon.png' alt=''><span class='copyright'>©Shutterstock</span>");
        $(document).find(".icon_local.culture").attr("data-alt", "");
        $(document).find(".icon_local.culture_female").html("<img src='../../global/images/icons/culture_female_icon.png' alt=''><span class='copyright'>©Shutterstock</span>");
        $(document).find(".icon_local.culture_female").attr("data-alt", "");

        // Module 2 - icon

        $(document).find(".icon_local.proverb_m2").html("<img src='../../global/images/icons/proverb_icon_m2.png' alt=''><span class='copyright'>©Shutterstock</span>");
        $(document).find(".icon_local.proverb_m2").attr("data-alt", "");

        // Module 3 - icon

        $(document).find(".icon_local.proverb_m3").html("<img src='../../global/images/icons/proverb_icon_m3.png' alt=''><span class='copyright'>©Shutterstock</span>");
        $(document).find(".icon_local.proverb_m3").attr("data-alt", "");

        // Module 4 - icon

        $(document).find(".icon_local.proverb_m4").html("<img src='../../global/images/icons/proverb_icon_m4.png' alt=''><span class='copyright'>©Shutterstock</span>");
        $(document).find(".icon_local.proverb_m4").attr("data-alt", "");

    },

    "glossaryWrap": function () {
        $(document).find(".pop-over").each(function () {
            $(this).wrap("<span class='noWrap glossary-deco'></span>");

            //$(this).closest(".pop-over").addClass("fev_overflowShow")

        })
    },

    "checkModalTitle": function () {
        // $(".wp-caption, .image-container").on("click", function () {
        //     setTimeout(findCaption, 500);
        // })
        $("#cboxNext, #cboxPrevious").on("click", function () {
            setTimeout(findCaption, 50);
        })
    },

    lightboxOnComplete: function () {
        fevcode_chinese.imageAlt = "";
        var zoombtn = $(".image-container a.lightbox.cboxElement");
        if ($(zoombtn).length && $(".enlangeimgfn").length) {
            $(zoombtn).off("click", checkaltText).on("click", checkaltText);

            function checkaltText() {
                fevcode_chinese.imageAlt = $(this).closest(".image-container").find("a:eq(0) img").attr("alt");
            }
        }

        $(document).bind('cbox_complete', function (e) {
            $("#colorbox #cboxLoadedContent img.cboxPhoto").attr("alt", fevcode_chinese.imageAlt);
            // $("#colorbox #cboxTitle")
            findCaption();
        });
    },
    fev_onpageCheckbox: function () {

        function init() {
            if ($(".fev_onpage-checkbox.table-decorative-checkbox p, .fev_onpage-checkbox.list-decorative-checkbox li").length) {
                $(document).find(".table-decorative-checkbox:not(.fev_checkboxdisable) p").off("click", togglecheckboxclass).on('click', togglecheckboxclass);
                $(".fev_onpage-checkbox.table-decorative-checkbox:not(.fev_checkboxdisable) p,.fev_onpage-checkbox.list-decorative-checkbox:not(.fev_checkboxdisable) li").attr("tabindex", "0");
                $(".fev_onpage-checkbox.table-decorative-checkbox:not(.fev_checkboxdisable) p ").off("keypress", keypressfn).on("keypress", keypressfn)
            }


        }

        function togglecheckboxclass() {
            $(this).toggleClass('check');
        }

        function keypressfn(e) {
            if (e.which == 13) {
                $(this).click();
            }
        }

        init();
    },

    main_init: function () {
        fevcode_chinese.fev_onpageCheckbox()
        // fevcode_chinese.fev_imgcardsholder()
    },

    "ctr_enter": function () {
        $(document).find(".panel .panel-heading").attr("tabindex", "0");
        $(".panel .panel-heading").on("keyup", function (e) {
            if (e.keyCode == 13) { //key symbol [enter]
                $(this).click();
            }
        })
    },
    toggleCollapse: function () {
        var par = $(document).find(".fev_card");
        var content = $(par).find(".fev_content");
        var buttonsPar = $(par).find(".fev_button_row");
        $(content).find("div[id]").hide();
        $(buttonsPar).find("button[data-target]").addClass("closed");
        $(buttonsPar).find("button.closed,button.opened").off("click", checkPrev).on("click", checkPrev);

        function checkPrev() {
            var _this = $(this);
            var _id = $(_this).attr("data-target");
            if ($(_this).hasClass("opened")) {
                $(_this).addClass("closed").removeClass("opened");
                $(content).find("#" + _id + "").slideUp("slow");
                return;
            }

            $(buttonsPar).find("button[data-target]").removeClass("opened").addClass("closed")
            $(content).find("div[id]").hide();

            setTimeout(function () {
                $(content).find("#" + _id + "").slideDown("slow");
                $(_this).addClass("opened").removeClass("closed");
            }, 100)
        }

    },

    addTabIndex: function () {
        $(document).find("figure.effect-sarah").each(function () {
            $(this).attr("tabindex", "0")
        })
        $(document).find(".htmltext_version .textVersion a.printText").each(function () {
            $(this).attr("tabindex", "0")
            $(this).on("keyup", function (e) {
                if (e.keyCode == 13) { //key symbol [enter]
                    $(this).click();
                }
            })
        })
        $(document).find(".htmltext_version .video_textVersion a.printText").each(function () {
            $(this).attr("tabindex", "0")
            $(this).on("keyup", function (e) {
                if (e.keyCode == 13) { //key symbol [enter]
                    $(this).click();
                }
            })
        })
        $(document).find(".ilTextVersion a.printText").each(function () {
            $(this).attr("tabindex", "0")
            $(this).on("keyup", function (e) {
                if (e.keyCode == 13) { //key symbol [enter]
                    $(this).click();
                }
            })
        })
        $('.fev_accessibility').focus(function () {
            $(this).mouseenter();
        });
        $('.fev_accessibility').blur(function () {
            $(this).mouseout();
        })
        $('.fev_accessibility').each(function (i) {
            var n = "0";
            var thistab = $(this).attr('tabindex') == undefined ? "0" : $(this).attr('tabindex');
            $(this).attr('tabindex', thistab);
            $(this).data('tabno', thistab);
        })

        $(document).keypress(function (e) {
            if (e.which == 13 && $(e.target).is(":focus") && $(e.target).hasClass("fev_accessibility")) {
                $(e.target).click();
            }
        });
    },


    audioPopover: function () {
        $(document).find('.glossary-deco a').each(function () {
            if (!$(this).hasClass("fev_accessibility")) {
                $(this).addClass("fev_accessibility");
            }
        });
        $(document).find(".glossary-deco a.pop-over.fev_accessibility").each(function () {
            $(this).off("click", cancelChildClick).on("click", cancelChildClick)
        })

        function cancelChildClick(e) {
            e.stopPropagation();
        }
    },


    figure_popOver: function () {
        $(document).find("figure.effect-sarah").each(function () {
            var popoverbtn = $(this).find("figcaption .glossary-deco a.pop-over");

            $(popoverbtn).off("focus", onfocustooltip).on("focus", onfocustooltip);
            $(popoverbtn).off("blur", onblurtooltip).on("blur", onblurtooltip);

            function onfocustooltip() {
                $(this).closest(".effect-sarah").addClass("fev_overflowShow")
                //console.log("focus1")
            }

            function onblurtooltip() {
                $(this).closest(".effect-sarah").removeClass("fev_overflowShow")
                //console.log("focus1")
            }

            //console.log("popover")

        })
    },
    createDialog: function (title, directions, btnname, container, firstCheck) {
        //	Default button name
        btnname = btnname || "Begin"
        container = container || $('#content')
        let index = $('.dialog').length
        fevcode_chinese.instr_opened = true
        $(".carousel .il_question_mark").attr("disabled", true);
        let new_dialog = $('<div />').attr({
            class: "dialog",
            id: 'dialog_' + index,
            title: title
        }).html(directions)

        $(container).append(new_dialog)

        new_dialog.dialog({
            buttons: [{
                text: btnname,
                click: function () {
                    $(this).dialog("close")

                    if (container.attr('id') === "overlay") {
                        container.fadeOut()
                    }
                },
                keydown: function (e) {
                    let elem = $(this)
                    console.log(elem, elem.attr('tabindex'))
                    if (e.keyCode !== 9) return

                    if (container.hasClass('instructions-container')) setTimeout(() => {
                        if (e.shiftKey) container.focus()
                        else container.siblings('.il_question_mark').focus()
                    }, 80)
                }
            }],

            draggable: false,
            resizable: false,
            close: function () {
                $(this).dialog('destroy').remove()
                $(this).trigger('NEW-BUTTON-CLOSED')
                fevcode_chinese.instr_opened = false
                $(".carousel .il_question_mark").attr("disabled", false);
            },

            focus: function () {
                if (typeof firstCheck !== 'undefined' && firstCheck) {
                    $("#menu_outer").focus()
                    //$('body > .wrapper').scrollTop(0)
                    $(window).scrollTop(0)
                }
            },

            open: function () {
                $(this).trigger('NEW-BUTTON')
            },
            hide: {
                effect: 'fade',
                duration: 200
            },
            show: {
                effect: "fade",
                duration: 200
            }
        }).parent().appendTo(container)

        new_dialog.parent().addClass('dialog-css-position')

        return new_dialog
    },
    showInstructions: function () {
        console.log("show text version")
        let parent = $(document).find('.carousel')
        let instructions = $('.instructions.hidden', parent).html()

        let firstCheck = parent.data('initialized') === undefined
        if (firstCheck) parent.data('initialized', true)
        $(".carousel .il_question_mark").attr("disabled", false);
        if (fevcode_chinese.instr_opened == true) {
            return;
        }
        fevcode_chinese.createDialog("Instructions", instructions, "OK", parent.find('.instructions-container'), firstCheck)
    },
    textRevel: function () {
        fevcode_chinese.initializeFlipcards();
        fevcode_chinese.initializeTextReveal();
        $('.carousel .il_question_mark').before('<div class="instructions-container" tabindex="0" />').click(fevcode_chinese.showInstructions).click()
        //fevcode_chinese.showInstructions();
    },
    initializeFlipcards: function () {
        let container = $('.flip-container')

        if (!container.length) return

        container
            .keypress(function (e) {
                if (e.keyCode === 13 && $(this).hasClass('active')) $(this).toggleClass('hover')
            })
            .find('.front').click(function () {
                console.log("front click")
                $(this).parents('.flip-container').addClass('hover').focus()
            }).end()
            .find('.back').click(function () {
                console.log("end click")
                $(this).parents('.flip-container').removeClass('hover').focus()
            })
    },
    initializeTextReveal: function () {
        let carousel = $('.carousel.text-reveal')

        carousel
            .on('slid.bs.carousel', function () {
                $(this).find('.item.active').removeAttr('tabindex')
            })
            .find('.flip-container').click(showWarning).end()
            .find('.flipper').click(function (e) { e.stopPropagation() }).end()
            .find('textarea').val('').keyup(monitorGlossing).end()
            .find('.reset').click(resetTextReveal)


        function monitorGlossing() {
            let val = $(this).val()
            let flip = $(this).parents('.item').find('.flip-container')

            if (!val) flip.removeClass('active')
            else flip.addClass('active')
        }

        function resetTextReveal() {
            carousel.carousel(0)
            carousel.find('textarea').val('').end()
        }

        function showWarning() {
            setTimeout(() => {
                $(this).parents('.item').find('textarea').focus()
            }, 200)
        }
    },
    vocabElement: function () {
        $(document).find(".vocabElement[data-lightboxtext]").each(function () {
            var lil_text = $(this).attr("data-lightboxtext");
            var par = $(this).closest(".wp-caption");
            if (lil_text != undefined && $(par).length) {
                lil_text = lil_text.trim();
                var caption = $(par).find(".wp-caption-text");
                if ($(caption).length) {
                    if (caption.text().trim() == lil_text) {
                        $(caption).attr("lang", "zh-Hans");
                    }
                }

            }

        })
    },
    fev_vocab_text: function () {
        $(".fev_vocab").find("figure.wp-caption figcaption.wp-caption-text").each(function () {
            $(this).off("click").on("click", function () {
                $(this).closest("figure.wp-caption").find("a.vocabElement").click()
                //console.log("vocab active")
            })
        })
    },

    fev_tooltip_pos: function () {
        $(document).find("figure.effect-sarah").each(function () {

            var popoverbtn = $(this).find("figcaption .glossary-deco a.pop-over");

            // $(popoverbtn).off("click", onpopoverpos).on("click", onpopoverpos);
            $(popoverbtn).off("focus", onfocuspos).on("focus", onfocuspos);
            $(popoverbtn).off("blur", onblurpos).on("blur", onblurpos);

            function onfocuspos() {
                $(this).closest("figure.effect-sarah").addClass("fev_overflowShow");
                console.log("vocab active")
            }


            function onblurpos() {
                $(this).closest("figure.effect-sarah").removeClass("fev_overflowShow");
                console.log("vocab blur")
            }

        })
    },
    vocabulary_activity: function () {
        $('.ng_il').on('quizmoReady', function () {
            var _this = $(this);
            setTimeout(function () {
                if ($(_this).hasClass("fev_vocab_activity")) {
                    fev_vocabulary_activity(_this, 1);
                }
                if ($(_this).hasClass("fev_image_marker")) {
                    fev_image_marker_fun(_this, 1);
                }

            }, 100)

        });
    },



    carousel_Nav: function () {
        // $('.carousel .carousel-control.left').children().last().remove()
        // $('.carousel .carousel-control.right').children().last().remove();
        $(".carousel a.carousel-control").each(function () {
            var sronly = $(this).find("span.sr-only");
            if ($(sronly).length > 1) {
                var clone = $(sronly).eq(0).clone();
                $(sronly).remove()
                $(this).append($(clone))
            }
        })


        $('.carousel .carousel-control.left').hide();

        $('.carousel').on('slid.bs.carousel', function (e) {
            var firstChild = $(e.target).find(".carousel-inner").children().first()
            var lastChild = $(e.target).find(".carousel-inner").children().last()

            var prev = $(e.target).find('.carousel-control.left')
            var next = $(e.target).find('.carousel-control.right')
            $(prev).show();
            $(next).show();
            if ($(firstChild).hasClass('active')) {
                $(prev).hide();
            } else if ($(lastChild).hasClass('active')) {
                $(next).hide();
            }
        })
    },
    imageAlt: ""
}

function fev_vocabulary_activity(_this, count) {
    setTimeout(function () {
        if ($(_this).hasClass("fev_vocab_activity")) {
            //console.log("coming here")            
            $(_this).find(".vocabApp .term").each(function () {
                var _this_term = $(this)
                _this_term.on("click", function () {
                    $(_this).find(".vocabApp #list").css("display", "none")
                });
                //console.log("open ", _this_term.html())

            })
            $(_this).find(".vocabApp .details").each(function () {
                var _this_term = $(this)
                _this_term.on("click", function () {
                    $(_this).find(".vocabApp #list").css("display", "flex")
                });

            })

        } else {
            if (count < 4) {
                fev_vocabulary_activity(_this, ++count);
            }
        }
    }, 300)

}
function fev_image_marker_fun(_this, count) {
    setTimeout(function () {
        if ($(_this).hasClass("fev_image_marker")) {
            var displayVal = ""
            $(_this).find(".point").each(function () {
                var _this_term = $(this)
                _this_term.on("click", function () {
                    $(_this).find(".il_copyright").css("display", "none")
                    displayVal = $(_this).find(".il_copyrightDisplay").css("display")
                    $(_this).find(".il_copyrightDisplay").css("display", "none")
                    $(_this).find("button.il_question_mark").css("display", "none")

                    $(_this).find(".markerPopup .markerPopupClose").each(function () {
                        var _close_btn = $(this)
                        _close_btn.attr("tabindex", "0");
                        _close_btn.on("click", function () {
                            $(_this).find(".il_copyright").css("display", "block")
                            $(_this).find(".il_copyrightDisplay").css("display", displayVal)
                            $(_this).find("button.il_question_mark").css("display", "block")
                        });
                    })
                });

                _this_term.off("keypress", keypressfn).on("keypress", keypressfn)
            })
            function keypressfn(e) {
                if (e.which == 13) {
                    console.log("enterrrrrrrrrrrr")
                    $(this).click();
                }
            }


        } else {
            if (count < 4) {
                fev_image_marker_fun(_this, ++count);
            }
        }
    }, 300)

}
function onfev_hotspotcliked() {

}

function findCaption() {
    $(document).find("#cboxTitle").each(function () {
        var _cTitlePart = $(this).html().split("|");
        if (_cTitlePart[0].length == 0 && _cTitlePart.length <= 1) {
            return;
        }
        var popcaption = _cTitlePart.filter(function (el) {
            return el.trim() != "";
        });
        $(this).html(popcaption.join("|"));

        // if (_cTitlePart[1] == "" || _cTitlePart[1] == " " || _cTitlePart[1] == "  ") {
        //     $(this).html(_cTitlePart[0]);
        // }
    })
}

function checkLangTag() {
    $(document).keyup(function (e) {
        if (e.keyCode == 192) { //key syblom [`]
            if ($("body").hasClass("checklangspan")) {
                $("body").removeClass("checklangspan");
                $(".fev_imgaltText").remove();
            } else {
                $("body").removeClass("checklangspan")
                $("body").addClass("checklangspan");
                forimageAlt();
            }
        }
    })
}

function forimageAlt() {
    $(document).find('img').each(function () {
        var alt = $(this).attr("alt");
        if (alt != undefined) {
            $(this).after($("<span class='fev_imgaltText'>" + alt + "</span>"))
        }
    })

}


function fev_carousel_controls() {
    var btnloader = "";
    $(document).find(".fev_carousel_controls").each(function (i) {
        checkloading($(this), i)
    })

    function checkloading(_this, indx) {
        var that = $(_this).eq(indx)
        var insbox = $(that).find(".instructions-container button")
        var items = $(that).find("div.carousel-inner>.item")

        if ($(insbox).length && $(items).length) {
            callAction(that)
        } else {
            setTimeout(function () {
                checkloading(_this, indx)
            }, 500)
        }
    }

    function callAction(_that) {
        var questionbtn = $(_that).find("button.il_question_mark");
        btnloader = $(questionbtn)
        $(questionbtn).off("click", onClick_questionbtn).on("click", onClick_questionbtn)
        onClick_questionbtn()
    }



    function onClick_questionbtn() {
        var _this = $(this)
        if (!_this.hasClass("il_question_mark")) { _this = btnloader }
        var par = $(_this).closest(".fev_carousel_controls")
        var insbox = $(par).find(".instructions-container")

        $(insbox).show()
        setTimeout(function () {
            applyAssisibility(_this)
        }, 200)
    }

    function applyAssisibility(_this) {
        var par = $(_this).closest(".fev_carousel_controls")
        var activeitem = $(par).find(".item.active")
        var insbox = $(par).find(".instructions-container")
        var thisdialogbtn = $(insbox).find("button")
        var tnf = $(insbox).is(":visible");
        var textarea = $(activeitem).find("textarea.form-control")
        var flipbtn = $(activeitem).find("div.flip-container")
        var lightboxbtn = $(activeitem).find(".image-container a");
        var sliderbutton = $(par).find("a.carousel-control");
        var carousel_indicators = $(par).find("ol.carousel-indicators li")
        //--- 
        var innerpar = $(par).find(".carousel-inner");
        $(innerpar).removeAttr("aria-hidden")
        $(_this).removeAttr("tabindex").removeAttr("aria-hidden")
        $(textarea).removeAttr("readonly")
        $(flipbtn).attr("tabindex", 0)
        $(lightboxbtn).removeAttr("tabindex");
        $(sliderbutton).removeAttr("tabindex").removeAttr("aria-hidden");
        $(carousel_indicators).removeAttr("tabindex").removeAttr("aria-hidden");

        if (tnf) {
            $(innerpar).attr("aria-hidden", tnf);
            $(_this).attr({ "tabindex": "-1", "aria-hidden": tnf })
            $(textarea).attr("readonly", true)
            $(flipbtn).attr("tabindex", -1)
            $(lightboxbtn).attr("tabindex", -1)
            $(sliderbutton).attr({ "tabindex": "-1", "aria-hidden": tnf })
            $(carousel_indicators).attr({ "tabindex": "-1", "aria-hidden": tnf })
        }

        setTimeout(function () {
            if ($(thisdialogbtn).length) {
                $(thisdialogbtn).off("click", fev_onClick_dialogbtn).on("click", fev_onClick_dialogbtn)
            }
        }, 500)

    }

    function fev_onClick_dialogbtn() {
        var par = $(this).closest(".fev_carousel_controls")
        var qustionbtn = $(par).find("button.il_question_mark");
        var insbox = $(par).find(".instructions-container")
        $(insbox).hide()
        applyAssisibility(qustionbtn)
    }


}


function showimagebtn() {

    function onclick_show_image() {
        $(this).toggleClass("fev_clciked");
        var _this = $(this);
        var text = "Show Text Version";
        if ($(this).hasClass("fev_clciked")) {
            text = "Show Image";
        }

        setTimeout(function () {
            $(_this).text(text);
        }, 10)
    }

    function checkImageActivityBtn() {
        var par = $(".htmltext_version.fev_imagebtn");
        var txtversionbtn = $(par).find("button.toggleSwitch");
        if ($(par).length) {
            if ($(txtversionbtn).length) {
                $(txtversionbtn).off("click", onclick_show_image).on("click", onclick_show_image);
            } else {
                setTimeout(checkImageActivityBtn, 500)
            }
        }
    }

    checkImageActivityBtn()
}




$(document).ready(function () {
    // $(document).keyup(function (e) {
    //     if (e.keyCode == 192) {//key symbol [`]
    //         if ($("body").hasClass("checklangspan")) {
    //             $("body").removeClass("checklangspan")
    //         } else {
    //             $("body").removeClass("checklangspan")
    //             $("body").addClass("checklangspan")
    //         }
    //     }
    // })

    fevcode_chinese.dialogHead();
    fevcode_chinese.figure_popOver();
    setTimeout(fevcode_chinese.addTabIndex, 300);
    fevcode_chinese.glossaryWrap();
    fevcode_chinese.checkModalTitle();
    fevcode_chinese.ctr_enter();
    fevcode_chinese.lightboxOnComplete();
    fevcode_chinese.vocabElement()
    fevcode_chinese.toggleCollapse();
    fevcode_chinese.textRevel();
    fevcode_chinese.fev_vocab_text();
    fevcode_chinese.carousel_Nav();
    fevcode_chinese.fev_tooltip_pos();
    checkLangTag();
    fev_carousel_controls()
    setTimeout(fevcode_chinese.main_init, 300);
    setTimeout(fevcode_chinese.audioPopover, 300);
    showimagebtn()
    fevcode_chinese.vocabulary_activity();
})
