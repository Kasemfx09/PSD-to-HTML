//inspect closed
/*
document.onkeydown = function(e) {
    if (event.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
        return false;
    }
};

//inspect closed
$(document).ready(function() {
    $("body").bind("cut copy past", function(e) {
        e.preventDefault();
    });
    $("body").on("contextmenu", function(e) {
        return false;
    });
});
*/
/*hover*/
$(document).ready(function() {
    $('.whatWe-info-best-text-1 a').mouseover(function() {
        $('.whatWe-info-best-rectangle-1').css('background', '#1d507a');
        $('.whatWe-info-best-rectangle-1').css('transition', '.8s');

    }).mouseout(function() {
        $('.whatWe-info-best-rectangle-1').css('background', '');
        $('.whatWe-info-best-rectangle-1').css('transition', '.8s');
    })

})
$(document).ready(function() {
    $('.whatWe-info-best-text-2 a').mouseover(function() {
        $('.whatWe-info-best-rectangle-2').css('background', '#1d507a');
        $('.whatWe-info-best-rectangle-2').css('transition', '.8s');

    }).mouseout(function() {
        $('.whatWe-info-best-rectangle-2').css('background', '');
        $('.whatWe-info-best-rectangle-2').css('transition', '.8s');
    })

})
$(document).ready(function() {
    $('.whatWe-info-best-text-3 a').mouseover(function() {
        $('.whatWe-info-best-rectangle-3').css('background', '#1d507a');
        $('.whatWe-info-best-rectangle-3').css('transition', '.8s');

    }).mouseout(function() {
        $('.whatWe-info-best-rectangle-3').css('background', '');
        $('.whatWe-info-best-rectangle-3').css('transition', '.8s');
    })

})