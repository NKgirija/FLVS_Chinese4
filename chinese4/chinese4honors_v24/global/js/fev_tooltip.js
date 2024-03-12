
var checkingMaxcount=5;
var fc_checkingcount = 0;

var fev_tooltip = {
    // HTML CODE TO USE IN ANGULAR ACTIVITY
    //<a href='javascript:void(0);' class='fev_tooltip' data-title='TITLE' data-placement='top' data-html='true' data-toggle='popover' data-content='DISPLAY CONTENT'>TITLE</a>
    beginFocus:"",
    activeID:"",
    checktooltip: function () {
        if ($(".fevng_tips a.fev_tooltip").length) {
            fev_tooltip.init()
        } else {
            setTimeout(fev_tooltip.checktooltip, 200);
        }
    },
    applyTabIndex:function(){
        var par= $(this).hasClass("iInstructions") ? $(this).closest(".fev_flipcardActivity .jFlipCard") : $(fev_tooltip.beginFocus);

        setTimeout(function(){
            if($(par).find(".ui-dialog:visible").length){
                console.log("inside");
                $(par).find(".ui_card,.iInstructions").attr({"tabindex":"-1","aria-hidden":"true"});
                $(par).find(".ui-dialog:visible").addClass("fev_accessibility").attr("tabindex","0").focus();
                fev_tooltip.applyEvent();
                return;
            }

            $(par).find(".ui_card,.ui-dialog,.iInstructions").attr("tabindex","0").removeAttr("aria-hidden").addClass("fev_accessibility");
            $(par).find(".iInstructions").attr("tabindex","0").removeAttr("aria-hidden").addClass("fev_accessibility");
            $(par).find(".iInstructions").focus();

        },500)        
    },
    flipFunction:function(){
         fev_tooltip.activeID =$(this);
         setTimeout(function(){
            fev_tooltip.activeID.focus();
         },1000);
    },
    updateIndex:function(){
       var par =$(this).closest(".ilShell.fev_flipcardActivity");
       fev_tooltip.beginFocus=par;
    },
    applyEvent:function(){
           var par =$(document).find(".fev_flipcardActivity .jFlipCard");

           $(par).each(function(){
                $(this).find(".ui-dialog-buttonset button,.iInstructions").off("click",fev_tooltip.applyTabIndex).on("click",fev_tooltip.applyTabIndex);
                $(this).find(".ui-dialog-buttonset button").off("focus",fev_tooltip.updateIndex).on("focus",fev_tooltip.updateIndex);
                $(this).find(".ui_card").off("click",fev_tooltip.flipFunction).on("click",fev_tooltip.flipFunction);
           })
    },
    fev_CheckFlipCardActivity:function(){
        var par=$(document).find(".fev_flipcardActivity .jFlipCard");
        if ($(par).find(".ui_card").length) {
            $(par).each(function(){
                    $(this).prepend($(this).find(".iInstructions"));
            });
            fev_tooltip.applyEvent();
            $(par).find(".ui-dialog,.ui-dialog-buttonset button").attr("tabindex","0").removeAttr("aria-hidden").addClass("fev_accessibility");
            $(par).find(".ui-dialog-buttonset button").attr("tabindex","0").removeAttr("aria-hidden");
        } else if (fc_checkingcount <= checkingMaxcount) {
            ++fc_checkingcount;
            setTimeout(fev_tooltip.fev_CheckFlipCardActivity, 200);
        }
    },
    thisFn:function(e){
        if(e.which==13){
            $(this).click();
        }
    },
    init: function () {
        $(".fevng_tips .fev_tooltip:not(.addedTooltip)").popover();
        $(".fevng_tips .fev_tooltip:not(.addedTooltip)").addClass("addedTooltip");
    }
}


$(document).ready(function () {
    fev_tooltip.fev_CheckFlipCardActivity();
    fev_tooltip.checktooltip();
});

