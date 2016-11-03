// var inputField = <HTMLInputElement>document.getElementById("name");
// var myName = inputField.value;
// console.log(myName);

function Calculate() {
  let year = document.getElementById("leapyear").value
  document.getElementById("answer").innerText = LeapYearFinder(year);
}

function LeapYearFinder(year) {
  if (parseInt(year) % 400 === 0) {
    return "Leap Year";
  }
  if (parseInt(year) % 100 === 0) {
    return "Not a Leap Year";
  }
  if (parseInt(year) % 4 === 0) {
    return "Leap Year";
  }
  return "Not a Leap Year";

}
