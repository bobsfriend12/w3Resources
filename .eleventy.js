module.exports = function (eleventyConfig) {
	//make sass work
	eleventyConfig.addWatchTarget("./src/sass/");
	eleventyConfig.addWatchTarget("./src/admin/");

	eleventyConfig.setTemplateFormats(["md", "njk", "html"]);

	//add a filter to sort alphabetically in nunjucks

	function sortAlpha(vals) {
		return vals
			.slice()
			.sort((a, b) => a.data.title.localeCompare(b.data.title));
	}
	function ifEmpty(array) {
		if(array.length > 1) {
			return true;
		}

		return false;
	}

	eleventyConfig.addFilter("alpha", sortAlpha);
	eleventyConfig.addFilter("ifempty", ifEmpty);

	//syntax highlighting
	const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

	eleventyConfig.addPlugin(syntaxHighlight);

	// Copy Static Files to /public
	eleventyConfig.addPassthroughCopy({
		"./src/admin/config.yml": "./config.yml",
		"./src/img": "./img"
	});

	eleventyConfig.addPassthroughCopy("./src/admin");
	eleventyConfig.addPassthroughCopy("./src/js");

	// Add DateTime filter to get rid of time in {{ page.date }}

	const { DateTime } = require("luxon");

	eleventyConfig.addFilter("postDate", (dateObj) => {
		return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
	});

	return {
		dir: {
			input: "src",
			output: "public"
		}
	};
};
