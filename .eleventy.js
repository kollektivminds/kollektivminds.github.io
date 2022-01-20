// 11ty configuration

//const { DateTime } = require("luxon");
//const fs = require("fs");

require('dotenv').config();

module.exports = eleventyConfig => {

    // Copy our static assets to the output folder
    //eleventyConfig.addPassthroughCopy('src/CNAME'); // Needed by GitHub Pages
    eleventyConfig.addPassthroughCopy('src/css');
    eleventyConfig.addPassthroughCopy('src/js');
    eleventyConfig.addPassthroughCopy('src/img');
    //eleventyConfig.addPassthroughCopy('src/favicon.ico');

    // Add all of src to watch list 
    eleventyConfig.addWatchTarget("src/")

    // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
    eleventyConfig.addFilter('htmlDateString', (dateObj) => {
        return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
    });

    // Return the smallest number argument
    eleventyConfig.addFilter("min", (...numbers) => {
        return Math.min.apply(null, numbers);
    });

    function filterTagList(tags) {
        return (tags || []).filter(tag => ["all", "nav", "post", "posts"].indexOf(tag) === -1);
    }

    eleventyConfig.addFilter("filterTagList", filterTagList)

    // Create an array of all tags
    eleventyConfig.addCollection("tagList", function(collection) {
        let tagSet = new Set();
        collection.getAll().forEach(item => {
        (item.data.tags || []).forEach(tag => tagSet.add(tag));
        });

        return filterTagList([...tagSet]);
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
            input: "src/*",
            output: "_site", 
            includes: "_includes",
            layouts: "_includes/layouts"
        }
    };
};