// All Butterfly mouse over effect
// Created By Atousa Darabi

$(function(){

	// Blue Butterfly
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


	// Green Butterf
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

	// Orange Butterfly 
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


	// Pink Butterfly
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


	// Purple Butterfly
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


	// Red Butterfly
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


	// Yellow Butterfly
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

