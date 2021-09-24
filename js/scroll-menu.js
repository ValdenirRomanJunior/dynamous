$(function(){
    $(window).on("scroll", function(){
        if($(window).scrollTop()> 100){
            $(".sidebar").addClass("mudacor");
        }
        else{
            $(".sidebar").removeClass("mudacor")
        }
    })
})