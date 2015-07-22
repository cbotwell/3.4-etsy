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


var handlebarsTemplate = registerByQuery('#main-template');

immediate = function () {
    contentEl.innerHTML = '<i class="fa fa-refresh fa-spin"></i>';

};

loadEtsy('nic%20cage', function (data) {
    var allArticles = '';

    allArticles = handlebarsTemplate(data);
    contentEl.innerHTML = allArticles;
}, immediate);

var inputEl = document.querySelector('.search input');
var searchButtonEl = document.querySelector('.search-button');
var searchTermEl = document.querySelector('.list-cat span');
var relatedTermEl = document.querySelector('.pagination span');

searchButtonEl.onclick = function () {
    var inputValue = inputEl.value;

    loadEtsy(inputValue, function (data) {
        var allArticles = '';

        allArticles = handlebarsTemplate(data);
        contentEl.innerHTML = allArticles;
    }, immediate);

    searchTermEl.innerHTML = inputValue;
    relatedTermEl.innerHTML = inputValue;
};


