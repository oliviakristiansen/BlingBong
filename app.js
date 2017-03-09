function Calculate() {
    var number = document.getElementById("number").value;
    var numberList = parseInt(number);
    var results = "";
    var resultsText = "";
    for (var i = 1; i < numberList; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            results = "Blingbong,";
        }
        else if (i % 5 === 0) {
            results = "Bong,";
        }
        else if (i % 3 === 0) {
            results = "Bling,";
        }
        else {
            results = i + ",";
        }
        resultsText += "<li>" + results + "</li>";
    }
    document.getElementById("answer").innerHTML = resultsText;
}
