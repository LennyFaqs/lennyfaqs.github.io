function displayData(obj)
{
    var display = document.getElementsByClassName("display");
    console.log(obj);
    display.setAttribute("data-include", obj.innerHtml);
};