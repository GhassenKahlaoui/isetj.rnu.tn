
$(document).ready(function() {

       
    $(".card-link").hide();
       
    $(".card").mouseenter(function() {
        $(".card-link",this).show(1000);
    })
    
    $(".card").mouseleave(function() {
        $(".card-link",this).hide(1000);
    })
    

    })