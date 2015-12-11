$(document).ready(
	function(){

	$(".lightbox_link").on("click",function(e){
		e.preventDefault();
	
	
		$(".outer_lightbox").show();
		$(".outer_lightbox").on("click",function(){
			$(".outer_lightbox").hide();


			// $(".inner_lightbox").show();
			// $(".inner_lightbox").on("click",function(){
			// $(".outer_lightbox").hide();

		});
	});

});

// (e).preventDefault dummy variable preventing the default of the anchor tag the hastag is gone. Holding off overriding the default. 

// (this) means click on one event on the anchor tags. This refers to the thing you click on. it knows what you are click on. 