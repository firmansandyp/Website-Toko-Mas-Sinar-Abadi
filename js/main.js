function mobileCheck(){
	var winWidth=$(window).width();
	if (winWidth<=768) {
		$("#sidebar").after($("#body .pagination:first"))
	} else {
		$(".products-wrap").before($("#body .pagination:first"))
	}
}

var x=document.getElementById("cincin");
var y=document.getElementById("gelang");
var z=document.getElementById("anting");


function showCincin(){
	y.style.display = "none";
	z.style.display = "none";
	x.style.display = "block";
}

function showGelang(){
	x.style.display = "none";
	z.style.display = "none";
	y.style.display = "block";
}

function showAnting(){
	x.style.display = "none";
	y.style.display = "none";
	z.style.display = "block";
}

$(document).ready(function() {
	$("input[type=checkbox]").crfi();
	$("select").crfs();
	$("#slider ul").bxSlider({
		controls: false,
		auto: true,
		mode: 'fade',
		preventDefaultSwipeX: false
	});
	$(".last-products .products").bxSlider({
		pager: false,
		minSlides: 1,
		maxSlides: 5,
		slideWidth: 235,
		slideMargin: 0
	});
	$(".tabs .nav a").click(function() {
		var container = $(this).parentsUntil(".tabs").parent();
		if (!$(this).parent().hasClass("active")) {
			container.find(".nav .active").removeClass("active")
			$(this).parent().addClass("active")
			container.find(".tab-content").hide()
			$($(this).attr("href")).show();
		};
		return false;
	});
	$("#price-range").slider({
		range: true,
		min: 0,
		max: 5000,
		values: [ 500, 3500 ],
		slide: function( event, ui ) {
			$(".ui-slider-handle:first").html("<span>$" + ui.values[ 0 ] + "</span>");
			$(".ui-slider-handle:last").html("<span>$" + ui.values[ 1 ] + "</span>");
		}
	});
	$(".ui-slider-handle:first").html("<span>$" + $( "#price-range" ).slider( "values", 0 ) + "</span>");
	$(".ui-slider-handle:last").html("<span>$" + $( "#price-range" ).slider( "values", 1 ) + "</span>");
	$("#menu .trigger").click(function() {
		$(this).toggleClass("active").next().toggleClass("active")
	});

	mobileCheck();
	$(window).resize(function() {
		mobileCheck();
	});
});