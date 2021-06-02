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
	eleventyConfig.addFilter("alpha", sortAlpha);

	//syntax highlighting
	const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

	eleventyConfig.addPlugin(syntaxHighlight);

	// Copy Static Files to /_Site
	eleventyConfig.addPassthroughCopy({
		"./src/admin/config.yml": "./admin/config.yml",
		"./src/admin/config.yml": "./config.yml",
		"./src/img": "./img"
	});

	return {
		dir: {
			input: "src",
			output: "public"
		}
	};
};
