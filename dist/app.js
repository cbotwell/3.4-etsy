var contentEl = document.querySelector('.content');

function registerByQuery (querySelector) {
    var templateString = document.querySelector(querySelector).innerHTML;
    templateString = templateString.replace('&gt;', '>');

    return Handlebars.compile(templateString);
}

function registerPartialByQuery (name) {
    var templateString = document.querySelector('#' + name + '-partial').innerHTML;
    templateString = templateString.replace('&gt;', '>');

    return Handlebars.registerPartial(name, templateString);
}

registerPartialByQuery('article');

// Handlebars.registerHelper('my-date', function (dateString) {
//     var d = new Date(dateString);
//     return d.getMonth();
// });

var handlebarsTemplate = registerByQuery('#main-template');

immediate = function () {
    contentEl.innerHTML = '<i class="fa fa-refresh fa-spin"></i>';

};

loadEtsy('nic%20cage', function (data) {
    var allArticles = '';

    allArticles = handlebarsTemplate(data);
    contentEl.innerHTML = allArticles;
}, immediate);
