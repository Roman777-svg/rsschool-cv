$(function() {



	$('input,textarea').focus(function(){
		$(this).data('placeholder',$(this).attr('placeholder'))
		$(this).attr('placeholder','');
	});
	$('input,textarea').blur(function(){
		$(this).attr('placeholder',$(this).data('placeholder'));
	});

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	// 
   $(".mail-btn").on("click touchstart", function () {
    $(this).addClass("fly");
    that = this
    setTimeout(function() {
        $(that).removeClass("fly");
    }, 5400)
});

	// 

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("#footerform").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "rest.php", //Change
			data: th.serialize()
		}).done(function() {
			window.location = "/thanks.html";
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
		$("#footerform1").submit(function() { //Change
			var th = $(this);
			$.ajax({
				type: "POST",
			url: "rest.php", //Change
			data: th.serialize()
		}).done(function() {
			window.location = "/thanks.html";
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
