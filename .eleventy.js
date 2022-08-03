// 11ty configuration

require('dotenv').config();

module.exports = function(eleventyConfig) {

    // Copy our static assets to the output folder
    eleventyConfig.addPassthroughCopy('CNAME'); // Needed by GitHub Pages
    eleventyConfig.addPassthroughCopy('css/');
    eleventyConfig.addPassthroughCopy('js/');
    eleventyConfig.addPassthroughCopy('img/');
    eleventyConfig.addPassthroughCopy('_includes/');
    eleventyConfig.addPassthroughCopy('favicon.ico');

    // Add all of src to watch list 
    eleventyConfig.addWatchTarget("src/*");

    // filters
    eleventyConfig.addFilter("dateFix", function(value) {
        return value.toUTCString()
    });

    /* --- PLUGINS --- */

    // navigation

    eleventyConfig.addPlugin( require('@11ty/eleventy-navigation') );

    // Define internal variables, i.e. names of dirs
        return {
            // Control which files Eleventy will process
            // e.g.: *.md, *.njk, *.html, *.liquid
            templateFormats: [
                "md",
                "njk",
                "html",
                "liquid"
            ],
  
            // Pre-process *.md files with: (default: `liquid`)
            markdownTemplateEngine: "njk",

            // Pre-process *.html files with: (default: `liquid`)
            htmlTemplateEngine: "njk",

            dir: {
            input: "src",
            output: "_site", 
            includes: "_includes",
            layouts: "_includes/layouts",
        }
    };
};