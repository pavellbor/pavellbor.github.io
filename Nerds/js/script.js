var feedbackOpen = document.querySelector(".contacts-button");
var feedbackModal = document.querySelector(".modal.feedback");
var feedbackClose = feedbackModal.querySelector(".modal-close");

feedbackOpen.addEventListener("click", function (evt) {
	evt.preventDefault();
	feedbackModal.classList.add("active");
	feedbackModal.querySelector("#feedback-name").focus();
});

feedbackClose.addEventListener("click", function (evt) {
	evt.preventDefault();
	feedbackModal.classList.remove("active");
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27 && feedbackModal.classList.contains("active")) {
		evt.preventDefault();
		feedbackModal.classList.remove("active");
	};
});

