var bgGreenLabel = document.querySelector("label[for=slider-control-first]");
var bgBlueLabel = document.querySelector("label[for=slider-control-second]");
var bgPinkLabel = document.querySelector("label[for=slider-control-third]");

var feedbackButton = document.querySelector(".contacts-inner .button");
var feedbackModal = document.querySelector(".modal.feedback");
var feedbackBg = document.querySelector(".blackout");
var feedbackClose = feedbackModal.querySelector(".modal-close");

bgGreenLabel.addEventListener("click", function() {
	document.body.classList.value = "green";
});

bgBlueLabel.addEventListener("click", function() {
	document.body.classList.value = "blue";
});

bgPinkLabel.addEventListener("click", function() {
	document.body.classList.value = "pink";
});

feedbackButton.addEventListener("click", function(evt) {
	evt.preventDefault();
	feedbackModal.classList.add("feedback-visible");
	feedbackBg.classList.add("blackout-visible");
});

feedbackClose.addEventListener("click", function(evt) {
	evt.preventDefault();
	feedbackModal.classList.remove("feedback-visible");
	feedbackBg.classList.remove("blackout-visible");
});

window.addEventListener("keydown", function(evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
		if (feedbackModal.classList.contains("feedback-visible") && feedbackBg.classList.contains("blackout-visible")) {
			feedbackModal.classList.remove("feedback-visible");
			feedbackBg.classList.remove("blackout-visible");
		};
	};
})