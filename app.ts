// var inputField = <HTMLInputElement>document.getElementById("name");
// var myName = inputField.value;
// console.log(myName);


function Calculate() {
  let number = document.getElementById("number").value

  let numberList = parseInt(number);
  let results = "";
  let resultsText= "";
  for(var i = 1; i<numberList; i++) {


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

    resultsText+= "<li>" + results + "</li>";
  }
  document.getElementById("answer").innerHTML = resultsText;

}
