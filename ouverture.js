
$(document).ready(function(){
var menu = $("#menu");
var reduireAgrandirMenu = $("#reduireAgrandir");

			reduireAgrandirMenu.click(function(){

				var img = $(this).children().attr("src");

				switch(img){
					case "flecheHaut.png" :
						menu.children().fadeOut("fast");
						menu.slideUp("slow");
						$(this).css("margin-top", "-50px").children().attr("src", "flecheBas.png");

						break;
					case "flecheBas.png":
						menu.slideDown("fast");
						menu.children().fadeIn("slow");
						$(this).css("margin-top", "-85px").children().attr("src", "flecheHaut.png");
						break;
					default:

				}
				
			});
});