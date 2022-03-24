window.onload = async function() {
    reloadFiles();
    await new Promise(r => setTimeout(r, 2000));
    reloadFiles();
};