// Yellow Butterfly mouse over effect
// Created By Atousa Darabi

$(function(){

	$(".yellowbutterfly-container").bind({
		mouseenter:function(){
			$(this).children(".yellowbutterfly-img").addClass("yellowbutterfly-img-down");
			$(this).children(".yellowbutterfly-img").next(".yellowbutterfly-content").addClass("yellowbutterfly-content-top");
			$(this).children(".yellowbutterfly-img").next(".yellowbutterfly-content").children("p.long-description").show(600);
		},
		mouseleave:function(){
			$(this).children(".yellowbutterfly-img").removeClass("yellowbutterfly-img-down");
			$(this).children(".yellowbutterfly-img").next(".yellowbutterfly-content").removeClass("yellowbutterfly-content-top");
			$(this).children(".yellowbutterfly-img").next(".yellowbutterfly-content").children("p.long-description").hide();
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

