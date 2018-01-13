$(document).on("click",".tab",function(){
	var vizValue = $(this).children().css("opacity");
	if (vizValue==1){
		console.log("invisible cloak");
		$(this).children().fadeTo(500,0,function(){});
	}
	else {
		console.log("visible cloak");
		$(this).children().fadeTo(500,1,function(){});
	}

})