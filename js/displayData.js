function displayData(obj)
{
    var display = document.getElementsByClassName("display");
    console.log(obj);
    console.log(obj.firstChild.nodeValue);

    let txt = obj.firstChild.nodeValue.replace(/\s/g, '');
    console.log(txt);
    txt = txt.charAt(0).toLowerCase();
    console.log(txt);

    console.log(display);
    display.setAttribute("data-include", txt);
};