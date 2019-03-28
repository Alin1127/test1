$(function() {
	
	$(".information .newest").hide();
	$(".information .newest").eq(0).show();
	$(".information .page-menu ul> li").click(function() {
		$(".information .newest").hide();
		$(".information .newest").eq($(this).index()).show();
		$(".information .page-menu ul> li").removeClass("active");
		$(this).addClass("active");
	});
	
	
});