//This code is know to the state of california to cause headaches

const curPage = parseInt(
	document.querySelector("[aria-current] a ").textContent,
	10
);
const maxLength = 7;
const totalPages = document.querySelectorAll(".pagination_item").length;
const allPages = document.querySelectorAll(".pagination_item");

//Got this from https://stackoverflow.com/questions/46382109/limit-the-number-of-visible-pages-in-pagination
function getPageList(totalPages, page, maxLength) {
	if (maxLength < 5) throw "maxLength must be at least 5";

	function range(start, end) {
		return Array.from(Array(end - start + 1), (_, i) => i + start);
	}

	var sideWidth = maxLength < 9 ? 1 : 2;
	var leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
	var rightWidth = (maxLength - sideWidth * 2 - 2) >> 1;

	if (totalPages <= maxLength) {
		// no breaks in list
		return range(1, totalPages);
	}
	if (page <= maxLength - sideWidth - 1 - rightWidth) {
		// no break on left of page
		return range(1, maxLength - sideWidth - 1).concat(
			0,
			range(totalPages - sideWidth + 1, totalPages)
		);
	}
	if (page >= totalPages - sideWidth - 1 - rightWidth) {
		// no break on right of page
		return range(1, sideWidth).concat(
			0,
			range(
				totalPages - sideWidth - 1 - rightWidth - leftWidth,
				totalPages
			)
		);
	}
	// Breaks on both sides

	return range(1, sideWidth).concat(
		0,
		range(page - leftWidth, page + rightWidth),
		0,
		range(totalPages - sideWidth + 1, totalPages)
	);
}

function updatePages(getPageList) {
	//Hide all of them
	const links = document.querySelectorAll(".pagination_item");

	for (i = 0; i < links.length; i++) {
		links[i].style.display = "none";
	}
	//Loop through the output of getPageList and show some of the buttons

	for (i = 0; i < getPageList.length; i++) {
		if (getPageList[i] != 0) {
			links[getPageList[i] - 1].style.display = "block";
		} else if (getPageList[i] === 0) {
			links[getPageList[i - 1] + 1].innerHTML = "...";
			links[getPageList[i - 1] + 1].style.display = "block";
		}
	}
}

updatePages(getPageList(totalPages, curPage, maxLength));

console.log(getPageList(totalPages, curPage, maxLength));
