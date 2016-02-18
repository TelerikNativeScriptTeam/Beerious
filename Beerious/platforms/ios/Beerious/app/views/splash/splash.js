var frameModule = require("ui/frame");
frameModule.Frame.defaultTransition = { name: "slideTop" };

exports.loaded = function (argument) {
	var page = argument.object;
	var image = page.getViewById("imageSplash");
	image.animate({
		opacity: 1,
		duration: 4000
	})
	.then(function() {
		var navigationEntry = {
			moduleName: "views/login/login",
    		clearHistory: true
		}
		frameModule.topmost().navigate(navigationEntry);
		//frameModule.topmost().navigate("views/login/login");
	});
};