module.exports = function (eleventyConfig) {
	//make sass work
	eleventyConfig.addWatchTarget("./src/sass/");

	//add a filter to sort alphabetically in nunjucks

	function sortAlpha(vals) {
		return vals
			.slice()
			.sort((a, b) => a.data.title.localeCompare(b.data.title));
	}
	eleventyConfig.addFilter("alpha", sortAlpha);

	//syntax highlighting
	const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

	eleventyConfig.addPlugin(syntaxHighlight);

	return {
		dir: {
			input: "src",
			output: "public",
			formats: "md,html,njk"
		}
	};
};
