

$(document).ready(function(){
    $('.ryu').mouseenter(function(){
        $('.ryustill').hide();
        $('.ryuready').show();
    })
    .mouseleave(function() {
        $('.ryustill').show();
        $('.ryuready').hide();
    })
    .mousedown(function(){
        playHadouken();
        $('.ryuready').hide();
        $('.ryuhad').show();
        $('.hadouken').finish().show().animate(
            {'left': '1020px'},
            500,
            function(){
                $(this).hide();
                $(this).css('left', '520px');
            });
    })
    .mouseup(function(){
        $('.ryuhad').hide();
        $('.ryuready').show();
    });

});

function playHadouken() {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}