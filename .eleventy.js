module.exports = function (config) {

    // config.addCollection('posts', function (collection) {
    //     return collection.getFilteredByGlob('posts/*.md');
    // });

    config.addCollection('sitemap', function (collection) {
        return collection.getFilteredByGlob('**/*.md');
    });

    // Copy these directories
    config.addPassthroughCopy('scripts');
    config.addPassthroughCopy('admin');
    config.addPassthroughCopy("images");

    return {
        dir: {
            input: ".",
            output: "public"
        },
        dataTemplateEngine: "pug",
        passthroughFileCopy: true
    }
}
