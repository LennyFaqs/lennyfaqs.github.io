window.onload = async function() {
    reloadFiles();
    await new Promise(r => setTimeout(r, 500));
    reloadFiles();

    document.getElementsByClassName("date")[0].innerHTML = "All Rights Reserved © 2022 - " + new Date().getFullYear();
};