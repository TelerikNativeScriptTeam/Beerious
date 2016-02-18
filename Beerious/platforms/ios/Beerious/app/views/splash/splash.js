var frameModule = require("ui/frame");

exports.loaded = function (argument) {
	var page = argument.object;
	var image = page.getViewById("imageSplash");
	image.animate({
		opacity: 1,
		duration: 2000
	})
	.then(function() {
		frameModule.topmost().navigate("views/login/login");
	});
};