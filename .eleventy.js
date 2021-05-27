module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/sass/");

 
  function sortAlpha(vals) {
    return vals.slice().sort((a, b) => a.data.title.localeCompare(b.data.title))
  }

  eleventyConfig.addFilter('alpha', sortAlpha);


  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
