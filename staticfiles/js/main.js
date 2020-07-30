const date = new Date();
document.querySelector('.year').innerHTML = date.getFullYear();


setTimeout(function() {
		$('#message').fadeOut('slow');
	}, 3000)


$(".col-md-6.col-lg-4.mb-4").click(function() {
	window.location = $(this).find("a").attr("href"); 
	return false;
});


// $(".col-md-6.col-lg-4.mb-4").on("mouseover", () => {
//     $(this).css("cursor", "pointer")
//     // var myElement = document.getElementsByClassName(".col-md-6.col-lg-4.mb-4");
//     // alert(myElement.length);

		


//     // alert($(this).find("img"));
//     // alert(this);

//     // var myElement = child.document.getElementsByClassName("card-img-top listing");
//     var myElement = $(this).getElementById("card-img-top listing");
//     alert(myElement.length);

// })

// $('.col-md-6.col-lg-4.mb-4').hover(function() {
// $('.card.listing-preview').hover(function() {
// 	// alert("one");
// 		var myElement = this.getElementsByClassName("card-img-top listing")[0];
//     // alert(myElement.length);
//     // myElement.css("height":"10px");
//     	// myElement.style.height = "10px";

//     	// #ddb624

//     	myElement.style.filter = "none";

// 	},
//   	function() {
//       	var myElement = this.getElementsByClassName("card-img-top listing")[0];
//      	myElement.style.filter = "brightness(50%)";
//      	// alert("out");
//   }
// );
// var price = this.getElementsByClassName("badge badge-secondary text-white")[0];
// price.style.position = none;

$('.card.listing-preview').hover(function() {
	// alert("one");

		// var card = document.getElementsByClassName("card listing-preview")[0];
		// card = this;
		// alert(card);

		// this.style.transform = "scale(101%)";


		var card_image = this.getElementsByClassName("card-img-top listing")[0];

		card_image.style.filter = "none";
		card_image.style.filter = "brightness(100%)";
		// alert("one");
		// card_image.style.height = "230px";
		card_image.transition = ".5s";
		// card_image.style.width = "300px";
			// card_image.style.transform = "scale(1.1)";
			



		var price = this.getElementsByClassName("badge badge-secondary text-white")[0];
		// alert(price.length);
		// alert(myElement.length);
		// myElement.css("height":"10px");
			// myElement.style.height = "10px";

			// #ddb624

			
			// price.style.color = "#0c0d0e";
			price.style.color = "rgba(255,255,255,1)";
			// price.style.color = "#ddb624";
			// price.style.background = "rgba(0,0,0,0.5)";
			
			price.style.background = "#242729";
			// price.style.display = none;

			price.style.transition = ".5s";
			// price.style.transform = "scale(0.8)";

			// var card_img_overlay = this.getElementsByClassName("card-img-overlay")[0];
			// card_img_overlay.style.transition = ".5s";
			// card_img_overlay.style.padding = "0px";

			// $(".card-img-overlay").css("transition","2s");
			// $(".card-img-overlay").css("padding","0px");


	},
		function() {

			this.style.transform = "scale(1)";
				var card_image = this.getElementsByClassName("card-img-top listing")[0];
			card_image.style.filter = "brightness(60%)";
			card_image.style.transition = ".5s";
			card_image.style.removeProperty('height');
			// myElement.style.height = "null";
			// card_image.style.removeProperty('height');
			// card_image.style.transform = "scale(1)";

			var price = this.getElementsByClassName("badge badge-secondary text-white")[0];
			// price.style.color = "rgba(255,255,255,.7)";

			price.style.color = "#fff";
			// price.style.color = "#ff5851";
			// price.style.color = "rgb(255,20,20)";
			// price.style.removeProperty('background');
			// price.style.background = "#242729";
			price.style.background = "none";


			// var card_img_overlay = this.getElementsByClassName("card-img-overlay")[0];
			// card_img_overlay.style.removeProperty('padding');

			// price.style.transform = "scale(1)";
			// alert("out");
	}
);
// $('.col-md-6.col-lg-4.mb-4').hover(function() {
//     $(this)
//       .css('color','green');
//   },
//   function() {
//     $(this)
//       .css('color','red');
//   }
// );

// $(document).ready(function(){       
//    var scroll_start = 0;
//    var startchange = $('#startchange');
//    var offset = startchange.offset();
//     if (startchange.length){
//    $(document).scroll(function() { 
//       scroll_start = $(this).scrollTop();
//       if(scroll_start > offset.top) {
//           // $(".navbar-default").css('background-color', '#f0f0f0');
//           alert("one");
//           $(".navbar.navbar-expand-lg.navbar-dark.bg-primary.sticky-top").css('background-color', 'red');

//        } else {
//           // $('.navbar-default').css('background-color', 'transparent');
//           $('.navbar.navbar-expand-lg.navbar-dark.bg-primary.sticky-top').css('background-color', 'blue');

//        }
//    });
//     }
// });


var myNav = document.getElementsByClassName('navbar navbar-expand-lg navbar-dark bg-primary sticky-top')[0];
// var aa = document.get
// myNav.css('background','red');
// myNav.style.background="red";
window.onscroll = function () { 
		if ($(window).scrollTop() != 0 ) {
			myNav.style.boxShadow = "0px 1px 4px 0px rgba(0, 0, 0, 1)";
		}else{
			myNav.style.removeProperty('box-shadow');
		}
		// "use strict";
		if ($(window).scrollTop() >= 260 ) {
			// alert("One");
				// myNav.classList.add("nav-colored");
				// myNav.classList.remove("nav-transparent");
				// myNav.css('background-color','red');

				// myNav.style.background="#2f3337";
				// myNav.style.background="#242729";


				// myNav.style.background="#323438";
				// myNav.style.background="#4B4643";
				// myNav.style.background="ghostwhite";


				// myNav.style.height="80px";

				// box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.9);
				// myNav.style.boxShadow = "0px 1px 4px 0px rgba(0, 0, 0, 1)";
				// myNav.style.height = "100px";
				// $('.navbar.navbar-expand-lg.navbar-dark.bg-primary.sticky-top').css("box-shadow", "0px 1px 4px 0px rgba(0, 0, 0, 0.09)");

				// box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.09);
				// myNav.css("height","300px");

				// myNav.style.color="#fff !important";

				// myNav.style.filter = "brightness(50%)";

				// myNav.style.background="#fff";

		// myNav.style.opacity="0.4";

				// myNav.style.color="red";
		} 
		else {
			// alert(document.body.scrollTop);
				// myNav.classList.add("nav-transparent");
				// myNav.classList.remove("nav-colored");
				// myNav.css('backgroud-color','blue');
				// myNav.style.background="blue";
				
				myNav.style.background="#0c0d0e";


				myNav.style.background = "#262f35";
				myNav.style.transition=".7s";


				// myNav.style.filter = "brightness(100%)";


				// myNav.style.height="100px";


				// myNav.removeProperty('height');
				// myNav.style.background-color="blue";
		}
		// alert(document.body.scrollTop);
		// alert(document.body.scrollTop);
		// alert($(window).scrollTop());
};

