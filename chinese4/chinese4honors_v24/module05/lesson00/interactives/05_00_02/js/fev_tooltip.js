var fev_tooltip = {
    // HTML CODE TO USE IN ANGULAR ACTIVITY
    //<a href='javascript:void(0);' class='fev_tooltip' data-title='TITLE' data-placement='top' data-html='true' data-toggle='popover' data-content='DISPLAY CONTENT'>TITLE</a>

    checktooltip: function () {
        if ($(".fevng_tips a.fev_tooltip").length) {
            fev_tooltip.init()
        } else {
            setTimeout(fev_tooltip.checktooltip, 200);
        }
    },
    init: function () {
        $(".fevng_tips .fev_tooltip:not(.addedTooltip)").popover();
        $(".fevng_tips .fev_tooltip:not(.addedTooltip)").addClass("addedTooltip");
    }
}


$(document).ready(function () {
    fev_tooltip.checktooltip();
})