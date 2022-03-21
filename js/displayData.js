function displayData(obj)
{
    var display = document.getElementsByClassName("display")[0];

    let txt = obj.firstChild.nodeValue.replace(/\s/g, '');
    txt = txt[0].toLowerCase() + txt.slice(1);
    console.log(txt);

    console.log(display);
    display.innerHTML = '<div data-include="html/'+ txt +'.html"></div>';
    a(null, null);
    //display.setAttribute("data-include", txt);
};