const scriptURL =
	"https://script.google.com/macros/s/AKfycbxkrREbAe223NgWoY32wDmJYcw0GwqI2fjrMWyI29Q3R78B8Odhul8eWEFDIatpSXvC/exec";

const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("span-msg");

form.addEventListener("submit", (e) => {
	e.preventDefault();
	fetch(scriptURL, { method: "POST", body: new FormData(form) })
		.then((response) => {
			msg.innerHTML = "ThankYou for Subscribing!";
			setTimeout(function () {
				msg.innerHTML = "";
			}, 4000);
			form.reset();
		})
		.catch((error) => console.error("Error!", error.message));
});
