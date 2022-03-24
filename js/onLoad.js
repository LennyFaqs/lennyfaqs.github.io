window.onload = async function() {
    reloadFiles();
    await new Promise(r => setTimeout(r, 1000));
    reloadFiles();
};