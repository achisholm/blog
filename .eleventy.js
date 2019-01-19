module.exports = function (config) {

    // config.addCollection('posts', function (collection) {
    //     return collection.getFilteredByGlob('posts/*.md');
    // });

    config.addCollection('sitemap', function (collection) {
        return collection.getFilteredByGlob('**/*.md');
    });

    // Copy the `scripts/` directory
    config.addPassthroughCopy('scripts');

    return {
        dir: {
            input: ".",
            output: "public"
        },
        dataTemplateEngine: "pug",
        passthroughFileCopy: true
    }
}
