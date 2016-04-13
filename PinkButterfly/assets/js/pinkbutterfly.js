// Pink Butterfly mouse over effect
// Created By Atousa Darabi

$(function(){

	$(".pinkbutterfly-container").bind({
		mouseenter:function(){
			$(this).children(".pinkbutterfly-img").addClass("pinkbutterfly-img-corner");
			$(this).children(".pinkbutterfly-img").next(".pinkbutterfly-content").addClass("pinkbutterfly-content-top");
			$(this).children(".pinkbutterfly-img").next(".pinkbutterfly-content").children("p.long-description").show(600);
		},
		mouseleave:function(){
			$(this).children(".pinkbutterfly-img").removeClass("pinkbutterfly-img-corner");
			$(this).children(".pinkbutterfly-img").next(".pinkbutterfly-content").removeClass("pinkbutterfly-content-top");
			$(this).children(".pinkbutterfly-img").next(".pinkbutterfly-content").children("p.long-description").hide();
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

