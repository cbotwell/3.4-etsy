var loadEtsy = function (query, onload, immediate) {
    var oReq = new XMLHttpRequest();
    var apiKey = 'ki0carhy6hn0ldkouxbju1wq';
    var url = 'https://api.etsy.com/v2/listings/active.js?api_key=' +
        apiKey +
        '&keywords=nic%20cage' +
        query +
        '&includes=Images,Shop&sort_on=score';

    $.ajax({
        url: url,
        jsonp: 'callback',
        dataType: 'jsonp',
        success: onload
    });

    immediate();
};
