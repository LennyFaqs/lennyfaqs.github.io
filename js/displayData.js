function displayData(obj)
{
    console.log(document);
    var display = document.getElementsByClassName("display")[0];

    let txt = obj.firstChild.nodeValue.replace(/\s/g, '');
    txt[0] = txt[0].toLowerCase();
    console.log(txt);
    //console.log(txt2);

    console.log(display);
    display.setAttribute("data-include", txt);
};