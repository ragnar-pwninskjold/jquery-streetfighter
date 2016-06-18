$(document).ready(function(){

	$(".ryu").mouseenter(function() {

		$(".ryustill").hide();
		$(".ryuready").show();
	})
	.mouseleave(function(){

		$(".ryuready").hide();
		$(".ryustill").show();

	})
	.mousedown(function() {
		console.log("mousedown");
		//play hadokuen sound
		$(".ryuready").hide();
		$(".ryuhad").show();
		$(".hadouken").show();
		//animate to right
	})
	.mouseup(function() {
		console.log("mouseup");
		$(".ryuhad").hide();
		$(".ryuready").show();
	});

});