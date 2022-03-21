function displayData(obj)
{
    var display = document.getElementsByClassName("display");
    console.log(obj);
    console.log(obj.value);
    console.log(obj.firstChild);
    console.log(obj.firstChild.nodeValue);
    const txt = obj.firstChild.nodeValue.replace(/\s/g, '').charAt(0).toLowerCase();
    console.log(txt);
    display.setAttribute("data-include", txt);
};