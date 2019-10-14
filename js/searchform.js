var link = document.querySelector(".searchform-open-js");

var form = document.querySelector(".searchform");

link.addEventListener("click", function(evt) {
	evt.preventDefault();
	form.classList.toggle("searchform-hidden-js");
});

var checkin = form.querySelector("[name=checkin-date]");
var checkout = form.querySelector("[name=checkout-date]");
var adults = form.querySelector("[name=number-of-adults]");
var children = form.querySelector("[name=number-of-children]");
var submit = form.querySelector("[type=submit]");

form.addEventListener("submit", function(evt) {
	if (!checkin.value || !checkout.value || !adults.value || !children.value) {
		evt.preventDefault();
		submit.classList.remove("searchform-shake-js");
		submit.offsetWidth = submit.offsetWidth;
		submit.classList.add("searchform-shake-js");
	}
});

form.addEventListener("submit", function(evt) {
	if (!checkin.value) {
		evt.preventDefault();
		checkin.classList.remove("searchform-blink-js");
		checkin.offsetWidth = checkin.offsetWidth;
		checkin.classList.add("searchform-blink-js");
	}
});

form.addEventListener("submit", function(evt) {
	if (!checkout.value) {
		evt.preventDefault();
		checkout.classList.remove("searchform-blink-js");
		checkout.offsetWidth = checkout.offsetWidth;
		checkout.classList.add("searchform-blink-js");
	}
});

form.addEventListener("submit", function(evt) {
	if (!adults.value) {
		evt.preventDefault();
		adults.classList.remove("searchform-blink-js");
		adults.offsetWidth = adults.offsetWidth;
		adults.classList.add("searchform-blink-js");
	}
});

form.addEventListener("submit", function(evt) {
	if (!children.value) {
		evt.preventDefault();
		children.classList.remove("searchform-blink-js");
		children.offsetWidth = children.offsetWidth;
		children.classList.add("searchform-blink-js");
	}
});