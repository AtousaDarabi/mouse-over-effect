// Blue Butterfly mouse over effect
// Created By Atousa Darabi

$(function(){

	$(".bluebutterfly-container").bind({
		mouseenter:function(){
			$(this).children(".bluebutterfly-img").addClass("bluebutterfly-img-down");
			$(this).children(".bluebutterfly-img").next(".bluebutterfly-content").addClass("bluebutterfly-content-top");
			$(this).children(".bluebutterfly-img").next(".bluebutterfly-content").children("p.short-description").hide();
			$(this).children(".bluebutterfly-img").next(".bluebutterfly-content").children("p.long-description").show();
		},
		mouseleave:function(){
			$(this).children(".bluebutterfly-img").removeClass("bluebutterfly-img-down");
			$(this).children(".bluebutterfly-img").next(".bluebutterfly-content").removeClass("bluebutterfly-content-top");
			$(this).children(".bluebutterfly-img").next(".bluebutterfly-content").children("p.short-description").show();
			$(this).children(".bluebutterfly-img").next(".bluebutterfly-content").children("p.long-description").hide();
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

