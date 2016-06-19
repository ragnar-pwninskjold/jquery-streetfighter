

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

    $(document).keydown(function(event) {
    	var keycode=(event.keyCode ? event.keyCode : event.which);
    	if (keycode == 88) {
    		$(".ryuready").hide();
    		$(".ryucool").show();
    		lookingCool();
    		
    		
    	}

    		$(".ryuready").hide();
    		$(".ryucool").show();

    })
    .keyup(function(event) {
    	$(".ryucool").hide();
    	$(".ryustill").show();
    });

    playTheme();

});

function playHadouken() {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}

function playTheme(){
	$('#theme-song')[0].volume = 0.5;
	$('#theme-song')[0].load();
	$('#theme-song')[0].play();
}

function lookingCool (){
	$('#looking-cool')[0].volume = 0.5;
	$('#looking-cool')[0].load();
	$('#looking-cool')[0].play();
	$('#theme-song').each(function(){
		this.pause();
		this.currentTime=0;
	});
}
