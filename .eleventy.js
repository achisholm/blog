module.exports = function (config) {

    // config.addCollection('posts', function (collection) {
    //     return collection.getFilteredByGlob('posts/*.md');
    // });

    config.addCollection('sitemap', function (collection) {
        return collection.getFilteredByGlob('**/*.md');
    });

    return {
        dir: {
            input: "src",
            output: "public"
        },
        dataTemplateEngine: "pug"
    }
}
