var members =  {
    "Alex": "104.000",
    "Casette": "76.000",
    "Deus": "27.000",
    "Doggo": "1.500",
    "Eskaro": "6.000",
    "Hougajha": "3.500",
    "Jobin": "115.000 + 69.000",
    "Juniper": "7.000",
    "Kakky The Autist": "0",
    "Magmakaj": "224.000",
    "Ron": "10?",
    "Ryuggo": "17.000",
    "Smith": "16.000",
    "SurpriseGajSex": "299",
    "Xano": "657",
    "": "",
};

function ByName() {
    var el = document.getElementsByClassName("orderedLinks")[0];

    let html = "";
    for (var key in members) {
        html += "<a href=\"#\" onclick=\"displayData(this);\" class=\"members\">"+ key +"</a> - "+ members[key] +"<br>";
    }

    el.innerHTML = html;
}

function ByMessages() {
    var el = document.getElementsByClassName("orderedLinks")[0];

    members.sort();
    let html = "";
    for (var key in members) {
        html += "<a href=\"#\" onclick=\"displayData(this);\" class=\"members\">"+ key +"</a> - "+ members[key] +"<br>";
    }

    el.innerHTML = html;
}