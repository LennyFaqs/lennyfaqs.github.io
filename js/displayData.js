function displayData(obj)
{
    var el = document.getElementsByClassName("display")[0];

    let txt = obj.firstChild.nodeValue.replace(/\s/g, '');
    txt = txt[0].toLowerCase() + txt.slice(1);

    el.innerHTML = '<div data-include="html/data/'+ obj.className +'/'+ txt +'.html"></div>';
    reloadFiles();
};