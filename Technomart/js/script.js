var modalFeedbackOpen = document.querySelector(".contacts-button");
var modalMapOpen = document.querySelector(".contacts-img-link");
var modalFeedback = document.querySelector(".modal-feedback");
var modalMap = document.querySelector(".modal-map");
var modalFeedbackClose = modalFeedback.querySelector(".modal-close");
var modalMapClose = modalMap.querySelector(".modal-close");

modalFeedbackOpen.addEventListener("click", function (evt) {
	evt.preventDefault();
	modalFeedback.classList.add("active");
});

modalMapOpen.addEventListener("click", function (evt) {
	evt.preventDefault();
	modalMap.classList.add("active");
});

modalFeedbackClose.addEventListener("click", function (evt) {
	evt.preventDefault();
	modalFeedback.classList.remove("active");
});

modalMapClose.addEventListener("click", function (evt) {
	evt.preventDefault();
	modalMap.classList.remove("active");
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
		if (modalFeedback.classList.contains("active")) {
			modalFeedback.classList.remove("active");
		};
		if (modalMap.classList.contains("active")) {
			modalMap.classList.remove("active");
		};
	};
});


