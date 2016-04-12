// Blue Butterfly mouse over effect
// Created By Atousa Darabi

$(function(){

	$(".butterfly-container").bind({
		mouseenter:function(){
			$(this).children(".butterfly-img").addClass("butterfly-img-down");
			$(this).children(".butterfly-img").next(".butterfly-content").addClass("butterfly-content-top");
			$(this).children(".butterfly-img").next(".butterfly-content").children("p.short-description").hide();
			$(this).children(".butterfly-img").next(".butterfly-content").children("p.long-description").show();
		},
		mouseleave:function(){
			$(this).children(".butterfly-img").removeClass("butterfly-img-down");
			$(this).children(".butterfly-img").next(".butterfly-content").removeClass("butterfly-content-top");
			$(this).children(".butterfly-img").next(".butterfly-content").children("p.short-description").show();
			$(this).children(".butterfly-img").next(".butterfly-content").children("p.long-description").hide();
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

