// 11ty configuration

require('dotenv').config();

module.exports = eleventyConfig => {

    // Copy our static assets to the output folder
    //eleventyConfig.addPassthroughCopy('src/CNAME'); // Needed by GitHub Pages
    //eleventyConfig.addPassthroughCopy('src/css/');
    //eleventyConfig.addPassthroughCopy('src/js/');
    //eleventyConfig.addPassthroughCopy('src/img/');
    //eleventyConfig.addPassthroughCopy('src/_includes/');
    //eleventyConfig.addPassthroughCopy('src/favicon.ico');

    // Add all of src to watch list 
    eleventyConfig.addWatchTarget("src/")

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
            input: "src/*",
            output: "_site", 
            includes: "_includes",
            layouts: "_includes/layouts"
        }
    };
};