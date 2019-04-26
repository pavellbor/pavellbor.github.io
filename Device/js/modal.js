var feedbackLink = document.querySelector(".feedback");
var feedbackModal = document.querySelector(".modal-feedback");
var feedbackForm = feedbackModal.querySelector("form");
var feedbackName = feedbackModal.querySelector("[name=name]");
var feedbackEmail = feedbackModal.querySelector("[name=email]");
var feedbackLetter = feedbackModal.querySelector("[name=letter]");
var feedbackClose = feedbackModal.querySelector(".modal-close");

var mapLink = document.querySelector(".map");
var mapModal = document.querySelector(".modal-map");
var mapClose = mapModal.querySelector(".modal-close");

feedbackLink.addEventListener("click", function (evt) {
	evt.preventDefault();
	feedbackModal.classList.add("modal-show");
});

feedbackForm.addEventListener("submit", function (evt) {
	if (!feedbackEmail.value || !feedbackName.value || !feedbackLetter.value) {
		evt.preventDefault();
		feedbackModal.classList.add("modal-error");
	};
});

feedbackClose.addEventListener("click", function (evt) {
	evt.preventDefault();
	feedbackModal.classList.remove("modal-show");
	feedbackModal.classList.remove("modal-error");
});

mapLink.addEventListener("click", function (evt) {
	evt.preventDefault();
	mapModal.classList.add("modal-show");
})

mapClose.addEventListener("click", function (evt) {
	evt.preventDefault();
	mapModal.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
		if (feedbackModal.classList.contains("modal-show")) {
			feedbackModal.classList.remove("modal-show");
		} else if (mapModal.classList.contains("modal-show")) {
			mapModal.classList.remove("modal-show");
		}
	}
});