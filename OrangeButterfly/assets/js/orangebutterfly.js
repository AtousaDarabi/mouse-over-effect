// Orange Butterfly mouse over effect
// Created By Atousa Darabi

$(function(){

	$(".orangebutterfly-container").bind({
		mouseenter:function(){
			$(this).children(".orangebutterfly-img").addClass("orangebutterfly-img-down");
			$(this).children(".orangebutterfly-img").next(".orangebutterfly-content").addClass("orangebutterfly-content-top");
			$(this).children(".orangebutterfly-img").next(".orangebutterfly-content").children("p.long-description").show(600);
		},
		mouseleave:function(){
			$(this).children(".orangebutterfly-img").removeClass("orangebutterfly-img-down");
			$(this).children(".orangebutterfly-img").next(".orangebutterfly-content").removeClass("orangebutterfly-content-top");
			$(this).children(".orangebutterfly-img").next(".orangebutterfly-content").children("p.long-description").hide();
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

