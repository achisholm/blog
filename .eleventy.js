const md = require("markdown-it");
const mdAnchor = require("markdown-it-anchor");

module.exports = function (config) {
    
    let markdownLibrary = md({
        html: true,
        breaks: true,
        linkify: true,
    })
    .use(mdAnchor, {
        permalink: true,
        permalinkClass: "direct-link",
        permalinkSymbol: "#"
    });
    config.setLibrary("md", markdownLibrary);

    config.addCollection('posts', function (collection) {
        return collection.getFilteredByGlob('posts/*.md');
    });

    config.addCollection('sitemap', function (collection) {
        return collection.getFilteredByGlob('**/*.md');
    });

    // Copy these directories
    config.addPassthroughCopy('scripts');
    config.addPassthroughCopy('admin');
    config.addPassthroughCopy("images");
        
    // return your Config object
    return {
        dir: {
            output: "public"
        },
        dataTemplateEngine: "pug",
        passthroughFileCopy: true
    }
}
