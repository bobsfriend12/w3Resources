const darkModeToggle = document.querySelector(".dark_mode");
const lightModeToggle = document.querySelector(".light_mode");
const root = document.querySelector("html");

function makeLightMode() {
	darkModeToggle.style.display = "inline-block";
	lightModeToggle.style.display = "none";

	root.style.setProperty("white", "black", "important");
	root.style.setProperty("bg_color", "#181818", "important");
	root.style.setProperty("black", "white", "important");
	root.style.setProperty("text_color", "hsl(0%, 0%, 85%", "important");
	root.style.setProperty("secondary_text", "rgb(211, 211, 211)", "important");
}

function makeDarkMode() {
	darkModeToggle.style.display = "none";
	lightModeToggle.style.display = "inline-block";

	root.style.setProperty("white", "white", "important");
	root.style.setProperty("bg_color", "#f9f9f9", "important");
	root.style.setProperty("black", "black", "important");
	root.style.setProperty("text_color", "hsl(0%, 0%, 15%", "important");
	root.style.setProperty("secondary_text", "rgb(58, 58, 58)", "important");
}

darkModeToggle.addEventListener("click", () => {
	makeDarkMode();
});

lightModeToggle.addEventListener("click", () => {
	makeLightMode();
});
