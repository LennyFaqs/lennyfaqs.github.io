function displayData(obj)
{
    //var parentDOM = document.getElementById("parent-id");
    var display = document.getElementsByClassName("displayyy")[0];

    let txt = obj.firstChild.nodeValue.replace(/\s/g, '');
    let txt2 = txt.charAt(0).toLowerCase();
    console.log(txt);
    console.log(txt2);

    console.log(display);
    display.setAttribute("data-include", txt);
};