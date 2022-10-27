$(document).ready(function(){
	$(".btn").click(function (){
		$("body").css('background-color', "#" + Math.floor(Math.random()*16777215).toString(16))
	})
});