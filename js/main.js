$(document).ready(function() {
"use strict";

/*============= Counters ===========*/

/*============= Bottom Handel Slide ===========*/
$('#clientsOpen', '#clientsDropDown').on("click", function () {
    $('#clientsDashboard','#clientsDropDown').slideToggle({
      direction: "up"
    }, 300); // Control speed of animation
    $(this).toggleClass('clientsClose');
	$(this).find("span").toggleClass('ion-android-arrow-down').toggleClass('ion-android-arrow-up');
	return false;
});

/*============= Scroll Functions ===========*/
$.localScroll({
	duration:1000, // How long to animate.
	hash:true, // if true, the hash of the selected link, will appear in the address bar.
	onBefore:function( e, anchor, $target ){
		// The 'this' is the settings object, can be modified
	},
	onAfter:function( anchor, settings ){
		// The 'this' contains the scrolled element (#content)
	}
});

$('body').scrollspy({ target:'.botnav', offset: 50 }) ;

/*============= Fancy Box ===========*/
$('.fancybox', '#portfolio').fancybox();

});

(function() {
/*============= PreLoader ===========*/
var images = [];
function preload() {
    for (var i = 0; i < arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
    }
}
//-- usage --//
//add your pics below to preload
preload(
    "assets/blurpic.png",
	"assets/self.jpg",
	"assets/self-2.jpg"
)

/*============= Touch Mobile ===========*/
document.addEventListener("touchstart", function() {},false);
})();