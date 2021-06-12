// 11ty configuration

require('dotenv').config();

module.exports = eleventyConfig => {

    // Copy our static assets to the output folder
    //eleventyConfig.addPassthroughCopy('src/CNAME'); // Needed by GitHub Pages
    eleventyConfig.addPassthroughCopy('src/css');
    eleventyConfig.addPassthroughCopy('src/js');
    eleventyConfig.addPassthroughCopy('src/img');
    eleventyConfig.addPassthroughCopy('src/favicon.ico');

    // Add all of src to watch list 
    eleventyConfig.addWatchTarget("src/")

    // Define internal variables, i.e. names of dirs
        return {
            dir: {
            input: "src/*",
            output: "_site", 
            includes: "src/_includes",
            layouts: "layouts"
        }
    }
};