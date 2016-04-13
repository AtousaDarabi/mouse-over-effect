// Red Butterfly mouse over effect
// Created By Atousa Darabi

$(function(){

	$(".redbutterfly-container").bind({
		mouseenter:function(){
			$(this).children(".redbutterfly-img").addClass("redbutterfly-img-corner");
			$(this).children(".redbutterfly-img").next(".redbutterfly-content").addClass("redbutterfly-content-top");
			$(this).children(".redbutterfly-img").next(".redbutterfly-content").children("p.long-description").show(600);
		},
		mouseleave:function(){
			$(this).children(".redbutterfly-img").removeClass("redbutterfly-img-corner");
			$(this).children(".redbutterfly-img").next(".redbutterfly-content").removeClass("redbutterfly-content-top");
			$(this).children(".redbutterfly-img").next(".redbutterfly-content").children("p.long-description").hide();
		}
	});



});
console.log("\
	            *********\n\
	        *****************\n\
	    *************************\n\
	  *****************************\n\
	*********************************\n\
	This is created by !Atousa Darabi!\n\
	*********************************\n\
	  *****************************\n\
	    *************************\n\
	        *****************\n\
	            *********\n\
	");

