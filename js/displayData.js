function displayData(obj)
{
    var display = document.getElementsByClassName("display")[0];

    let txt = obj.firstChild.nodeValue.replace(/\s/g, '');
    txt = txt[0].toLowerCase() + txt.slice(1);
    console.log(obj);
    console.log(obj.class);

    display.innerHTML = '<div data-include="html/data/'+ obj.class +'/'+ txt +'.html"></div>';
    reloadFiles();
    //display.setAttribute("data-include", txt);
};