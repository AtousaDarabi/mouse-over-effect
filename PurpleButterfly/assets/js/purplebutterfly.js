// Purple Butterfly mouse over effect
// Created By Atousa Darabi

$(function(){

	$(".purplebutterfly-container").bind({
		mouseenter:function(){
			$(this).children(".purplebutterfly-img").addClass("purplebutterfly-img-down");
			$(this).children(".purplebutterfly-img").next(".purplebutterfly-content").addClass("purplebutterfly-content-top");
			$(this).children(".purplebutterfly-img").next(".purplebutterfly-content").children("p.long-description").show(600);
		},
		mouseleave:function(){
			$(this).children(".purplebutterfly-img").removeClass("purplebutterfly-img-down");
			$(this).children(".purplebutterfly-img").next(".purplebutterfly-content").removeClass("purplebutterfly-content-top");
			$(this).children(".purplebutterfly-img").next(".purplebutterfly-content").children("p.long-description").hide();
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

