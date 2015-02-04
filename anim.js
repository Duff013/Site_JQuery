
$(document).ready(function(){
			var menu = $("#menu");

			menu.children().hover(function(){
					$($(this).data("current")).css("background-color", "#000099");
				},
				function(){
					$($(this).data("current")).css("background-color", "#000066");
				});


			menu.children().click(function()
			{
				var contentId = $(this).data("current");
				var decallage = '';

				contentId = contentId.substring(6, 7);

				switch(contentId) {
				    case "1":
				        decallage = '31px';
				        break;
				    case "2":
				        decallage = '-137px';
				        break;
			        case "3":
			        	decallage = '-313px';
			        	break;
				    case "4":
				        decallage = '-484px';
			        	break;
			        case "5":
			        	decallage = '-654px';
			        	break;
				    case "6":
				        decallage = '-826px';
				        break;
				    case "7":
				        decallage = '-999px';
				        break;
				    case "8":
				        decallage = '-1168px';
				        break;
				    case "9":
				        decallage = '-1342px';
				        break;
				    default:
				    	decallage = '0px';

				} 
				
				var heightContent = $($(this).data("content")).css("height");
				
				if (heightContent == "650px")
				{
					$($(this).data("content")).css("visibility", "visible").animate({width : '150px', height : '150px'}).animate({top : '37px', left : '44px'}, 
						function(){
						$(this).css("visibility", "hidden");
					});
				}
				else
				{
					$($(this).data("content")).css("visibility", "visible").animate({top : '250px', left : decallage,}).animate({width : '93%', height : '650px'});
				}


				menu.children().not($(this).data("content")).not(".menu").css("visibility", "hidden").animate({top : '37px', left : '44px'}).animate({width : '150px', height : '150px'});
			});

		});

