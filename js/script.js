var link = document.querySelector(".contact-button-form")
var popup = document.querySelector(".modal-login");
var close = document.querySelector(".modal-close");
var form = popup.querySelector("form");
var username = popup.querySelector("[name=name-surname]");
var email = popup.querySelector("[name=e-mail]");
var message = popup.querySelector("[name=text]");
var storage_name = localStorage.getItem("name");
var storage_mail = localStorage.getItem("email");
var isStorageSupport = true;
var storage = "";

try {
 	storage = localStorage.getItem("username");
} catch (err) {
 	isStorageSupport = false;
}
link.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");
	username.focus();
	if (storage) {
		username.value = storage_name;
		email.focus();
	} else {
		username.focus();
	}
});

close.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
	popup.classList.remove("typing-error");
});

form.addEventListener("submit", function (evt) {
	if (!username.value || !email.value || !message.value) {
		evt.preventDefault();
		popup.classList.add("typing-error")	
	} else {
		if (isStorageSupport) {
    	localStorage.setItem("username", username.value);
	}
}
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
		evt.preventDefault();
		popup.classList.remove("modal-show");
		popup.classList.remove("typing-error");
		}
	}
});





