
function _thisinit_fun() {
    var this_ref = ''
    var ref_this =""
    $(".row.show-grid.fev_dropcard").each(function () {
        var _this = $(this)
        ref_this = _this
        var firstChild = $(_this).children().first()
        var lastChild = $(_this).children().last()
        var ht1 = $(firstChild).find(".col-sm-10 .panel-title").css("min-height", "auto").height()
        var ht2 = $(lastChild).find(".col-sm-10 .panel-title").css("min-height", "auto").height()
        //console.log(ht1,"-------",ht2)
        if (ht1 > ht2) {
            $(lastChild).find(".col-sm-10 .panel-title").css("min-height", ht1)
        }
        else {
            $(firstChild).find(".col-sm-10 .panel-title").css("min-height", ht2)
        }
        //getHeight()
        /* assignHt(ref_this,0)    
        var fev_arrow_btn1 = $(firstChild).find(".col-sm-2 button")
        var fev_arrow_btn2 = $(lastChild).find(".col-sm-2 button")
        $(fev_arrow_btn1).off("click", getHeight).on("click", getHeight);
        $(fev_arrow_btn2).off("click", getHeight).on("click", getHeight);    

        function getHeight() {   
            /* setTimeout(function () {              
                assignHt(ref_this,0) 
            }, 350);  
            assignHt(ref_this,0)             
        } 
        function assignHt(val,ht_num){
            _this = $(val)
            _this = _this.closest(".fev_dropcard")
            var temp1 = $(_this).children().first()
            temp1 = $(temp1).find(".cwhite")
           
            var temp2 = $(_this).children().last()
            temp2 =  $(temp2).find(".cwhite")
           // console.log($(temp1).html()+"XXXXXXXXXXXXX"+$(temp2).html())
            if(ht_num==20){
                $(temp1).css("min-height", "100")
                $(temp2).css("min-height", "100")     
            }    
            $(temp1).css("min-height", "100px")
            $(temp2).css("min-height", "100px")             
            var p_ht1 = $(temp1).parent().height()//+ht_num
            var p_ht2 = $(temp2).parent().height()//+ht_num
            console.log(p_ht1+"XXXXXXXXXXXXX"+p_ht2)
            console.log($(temp1).css("min-height")+"##############"+$(temp2).css("min-height")) 
            if(p_ht1<=0){
                //p_ht1 = 100
            }
             if (p_ht1 <= p_ht2) {
                p_ht1 = p_ht2
            }
           
            console.log(p_ht1) 
            if(p_ht1!=0){
                $(temp1).css("min-height", p_ht1)
                $(temp2).css("min-height", p_ht1)  
            }
            else{
                assignHt(ref_this,0) 
            }
            console.log($(temp1).css("min-height")+"XXXXXXXXXXXXX"+$(temp2).css("min-height"))                   

        } */
    })   

}

$(document).ready(function () {
    setTimeout(_thisinit_fun, 200);
    $(window).resize(function () {
        _thisinit_fun();
    });
})
