function displayData(obj)
{
    var el = document.getElementsByClassName("display")[0];

    let txt = obj.firstChild.nodeValue.replace(/\s/g, '');
    txt = txt[0].toLowerCase() + txt.slice(1);
    let url = 'html/data/'+ obj.className +'/'+ txt +'.html';

    window.location.href = url;
/*
    el.innerHTML = '<div data-include="'+ url +'"></div>';
    reloadFiles();
    */
};