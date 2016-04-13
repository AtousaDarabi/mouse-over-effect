// Green Butterfly mouse over effect
// Created By Atousa Darabi

$(function(){

	$(".greenbutterfly-container").bind({
		mouseenter:function(){
			$(this).children(".greenbutterfly-img").addClass("greenbutterfly-img-down");
			$(this).children(".greenbutterfly-img").next(".greenbutterfly-content").addClass("greenbutterfly-content-top");
			$(this).children(".greenbutterfly-img").next(".greenbutterfly-content").children("p.short-description").hide();
			$(this).children(".greenbutterfly-img").next(".greenbutterfly-content").children("p.long-description").show(600);
		},
		mouseleave:function(){
			$(this).children(".greenbutterfly-img").removeClass("greenbutterfly-img-down");
			$(this).children(".greenbutterfly-img").next(".greenbutterfly-content").removeClass("greenbutterfly-content-top");
			$(this).children(".greenbutterfly-img").next(".greenbutterfly-content").children("p.short-description").show();
			$(this).children(".greenbutterfly-img").next(".greenbutterfly-content").children("p.long-description").hide();
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

