const { DateTime } = require("luxon");

// https://www.11ty.dev/docs/config/
module.exports = function(eleventyConfig) {

    //Add files to the public folder.
    eleventyConfig.addPassthroughCopy('./src/sass/style.css');
    eleventyConfig.addPassthroughCopy('./src/script.js');
    eleventyConfig.addPassthroughCopy('./src/App.js');
    eleventyConfig.addPassthroughCopy('./src/scripts');
    eleventyConfig.addPassthroughCopy('./src/assets/');

    //All date related.
    //https://11ty.rocks/eleventyjs/dates/
    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    });
    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

    // Return your Object options:
    return {
        dir: {
        input: "src",
        output: "public"
        }
    };
};