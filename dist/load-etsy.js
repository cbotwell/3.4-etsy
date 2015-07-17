var loadEtsy = function (query, onload, immediate) {
    var oReq = new XMLHttpRequest();
    var apiKey = 'ki0carhy6hn0ldkouxbju1wq';
    var url = 'https://api.etsy.com/v2/listings/active.js?api_key=' +
        apiKey +
        '&keywords=' +
        query +
        '&includes=Images,Shop&sort_on=score';

    $.ajax({
        url: url,
        jsonp: 'callback',
        dataType: 'jsonp',
        success: onload
    });

    if (immediate) {
    immediate();
    }

    function htmlDecode(input){
      var e = document.createElement('div');
      e.innerHTML = input;
      return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
    }
};
