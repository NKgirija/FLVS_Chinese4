


$(document).ready(function () {
	var _this = $(".fev_flipBook");
	var storebtn = "";
	var prev_popoverbtn = ""

	function fev_flipBook() {
		if ($(_this).find(".b-page").length && $(_this).find(".b-controls").length) {
			init();
		} else {
			setTimeout(fev_flipBook, 500)
		}
	}

	function init() {
		appendbtn();
		skipFocusScreenReader()
		//addtabIndexToPrint()
	}

	function appendbtn() {
		$(_this).find(".b-page").eq(0).before($("<div class='fev_blocker'></div><button class='fevflipbookbtn flipbook_back'>previous page</button>"));
		$(_this).find(".b-controls").eq(0).before($("<div class='fev_blocker right'></div><button class='fevflipbookbtn flipbook_next'>next page</button>"));
		$(_this).find(".fevflipbookbtn").off("click", flipboockClick).on("click", flipboockClick);
		$(_this).find(".beginning-btn").off("click", okayFn).on("click", okayFn);
		checkSinglePage()
		copyright_append()
		popovertooltip()
		startbtn_append()
	}
	function hideAllpop_def() {
		if (prev_popoverbtn) {
			prev_popoverbtn.removeClass("fev_overflowShow_def")
		}
		var popover_def = $(_this).find(".b-page .b-wrap p .popover");
		if (!$(popover_def).parents().is('.popover.in')) {
			$('[data-original-title]').popover('hide');
		}
		prev_popoverbtn = ""
	}

	function popovertooltip() {
		var popoverbtn = $(_this).find(".b-page .b-wrap p a.fev_tooltip");
		$(popoverbtn).off("focus", onfocustooltip).on("focus", onfocustooltip);
		$(popoverbtn).off("blur", onblurtooltip).on("blur", onblurtooltip);
		function onfocustooltip() {
			$(this).closest(".b-page").addClass("fev_overflowShow_def")
		}

		function onblurtooltip() {
			prev_popoverbtn = $(this).closest(".b-page")
			//$(this).closest(".b-page").removeClass("fev_overflowShow_def")
			//hideAllpop_def()
		}

	}
	function copyright_append() {
		var par = $(_this).closest(".ilShell");
		var coptspan = $(par).find(".copyright.fev_txt");
		$(_this).append(coptspan)
	}

	function startbtn_append() {
		var newButton = $("<button class='start-btn'>Start</button>");
		$(_this).find(".cover").eq(0).after(newButton);
		newButton.off("click").on("click", function () {
			flipboockClick()
		});
	}

	function okayFn() {
		checkSinglePage()
	}

	function flipboockClick() {
		hideAllpop_def();
		var clickablepage = $(_this).find(".b-page.ui-draggable");
		if ($(this).hasClass("flipbook_next")) {
			if ($(clickablepage).length > 1) {
				$(clickablepage).eq(1).click();
			} else {
				$(clickablepage).eq(0).click();
			}
		} else {
			$(clickablepage).eq(0).click();
		}
		checkSinglePage();
		$(_this).find(".fevflipbookbtn").hide();
		storebtn = $(this);
	}

	function skipFocusScreenReader() {
		var allpage = $(_this).find(".b-page");
		$(allpage).attr("aria-hidden", true);
		$(allpage).find("audio").attr("tabindex", -1);
		$(allpage).find("a").attr("tabindex", -1);
		$(_this).find(".b-p1, .b-p2").each(function () {
			if ($(this).find(".b-page-empty").length == 0) {
				$(this).removeAttr("aria-hidden");
				$(this).find("audio").removeAttr("tabindex");
				$(this).find("a").removeAttr("tabindex");
			}
		})
	}

	function checkSinglePage() {
		$(_this).removeClass("fb_startPage");
		setTimeout(function () {
			//firstpage	
			var clickablepage = $(_this).find(".b-page.ui-draggable");

			if ($(clickablepage).length) {
				console.log("-------- b-page1 - " + ($(clickablepage).hasClass("b-page-2")))
				$(_this).find(".fevflipbookbtn").show();

				if ($(clickablepage).hasClass("b-page-2") && $(clickablepage).length == 1) {
					$(_this).find(".flipbook_back").hide()
					$(_this).find(".flipbook_next").hide()
					$(_this).addClass("fb_startPage");
				}
				var lastpagecls = "b-page-" + ($(_this).find(".b-page").length - 3);
				if ($(clickablepage).hasClass(lastpagecls) && $(clickablepage).length == 1) {
					$(_this).find(".flipbook_next").hide()
				}

				if (storebtn != "" && $(storebtn).hasClass("fevflipbookbtn")) {
					if ($(storebtn).is(":visible")) {
						$(storebtn).focus();
					} else {
						$(_this).find(".fevflipbookbtn:visible").eq(0).focus();
					}
				}
			}
		}, 1200)

		setTimeout(function () {
			skipFocusScreenReader()
		}, 1100)
	}

	fev_flipBook();
});



function applyEvent() {
	$(_this).find('.b-prev,.b-next,.tt').focusin(function () { $(this).mouseenter(); });
	$(_this).find('.b-prev,.b-next,.tt').focusout(function () { $(this).mouseleave(); });
	$(_this).find(".instructions_dialogue a,.beginning-btn").off("click", okayFn).on("click", okayFn);
	$(_this).find('.b-prev,.b-next').off("click", flipBook).on("click", flipBook);
	$(_this).find(".instructions_dialogue a,.b-next,.b-prev,.beginning-btn,input,.title,.ui_edge_buttons a,.ui-dialog button, .answer, .ans_pop span.ok,.sub,.submit,.restart,.hotspot,.ok,.align .txt").off("keypress", anyKeypress).on("keypress", anyKeypress);
	$(".ui_edge_buttons a,.ui-dialog button,.ui-dialog button, .answer, .ans_pop span.ok,.hotspot,.reveal .ok").off("click", dialogFunc).on("click", dialogFunc);
	$(_this).find(".txt_r").on("click input", textAreaFn);
	$(_this).find("input").off("change click", inputFn).on("change click", inputFn);
	$(_this).find('.submit,.restart').off("click", submitFun).on("click", submitFun);
}