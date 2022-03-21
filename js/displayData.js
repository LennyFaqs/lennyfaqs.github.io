function displayData(obj)
{
    var display = document.getElementsByClassName("display");
    console.log(obj);
    console.log(obj.value);
    const txt = obj.innerHtml.replace(/\s/g, '').charAt(0).toLowerCase();
    console.log(txt);
    display.setAttribute("data-include", obj.innerHtml);
};