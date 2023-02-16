function incrementValue() {
  var value = parseInt(document.getElementById("number").value);
  value++;
  document.getElementById("number").value = value;
}

function showHide() {
  var x = document.getElementById("show-hide-text");
  if (x.style.display === "none") {
    x.style.display = "initial";
  } else {
    x.style.display = "none";
  }
}

function showArray() {
  let randomArray = ["hello", "world", "how", "are", "you"];
  document.getElementById("array-item-1").innerHTML = randomArray[0];
  document.getElementById("array-item-2").innerHTML = randomArray[1];
  document.getElementById("array-item-3").innerHTML = randomArray[2];
  document.getElementById("array-item-4").innerHTML = randomArray[3];
  document.getElementById("array-item-5").innerHTML = randomArray[4];
}
