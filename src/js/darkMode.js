let darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
const toggle = document.querySelector("#mode_toggle");

if (darkMode === true) {
	toggle.checked = true;
}

if (localStorage.getItem("darkMode")) {
	const stored = localStorage.getItem("darkMode");

	if (stored === "true") {
		toggle.checked = true;
	} else if (stored === "false") {
		toggle.checked = false;
	}
} else {
	localStorage.setItem("darkMode", `${darkMode}`);
}

toggle.addEventListener("click", () => {
	if (toggle.checked === true) {
		localStorage.setItem("darkMode", "true");
	} else if (toggle.checked === false) {
		localStorage.setItem("darkMode", "false");
	}
});
