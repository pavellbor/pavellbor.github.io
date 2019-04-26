var hotelsSearchButton = document.querySelector(".hotels-search-link");
var hotelsSearchForm = document.querySelector(".hotels-search-form");
var hotelsArrivalDate = hotelsSearchForm.querySelector("#arrival-date");

hotelsSearchButton.addEventListener("click", function (evt) {
	evt.preventDefault();
	if (hotelsSearchForm.classList.contains("active")) {
		hotelsSearchForm.classList.remove("active")
	} else {
		hotelsSearchForm.classList.add("active");
		hotelsArrivalDate.focus();
	}
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27 && hotelsSearchForm.classList.contains("active")) {
		evt.preventDefault();
		hotelsSearchForm.classList.remove("active");
	}	
});

