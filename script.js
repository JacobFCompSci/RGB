// RGB Colors

document.getElementById("previewBtn").addEventListener("click", displayCol);

function displayCol() {
  let redin = +document.getElementById("redIn").value;
  let greenin = +document.getElementById("greenIn").value;
  let bluein = +document.getElementById("blueIn").value;

  document.getElementById(
    "nums"
  ).innerHTML = `rgb(${redin}, ${greenin}, ${bluein})`;
  document.getElementById(
    "display"
  ).style.background = `rgb(${redin},${greenin},${bluein})`;
}

document.getElementById("blbtn").addEventListener("click", displayblack);

function displayblack() {
  document.getElementById("display").style.background = `rgb(0,0,0)`;
  document.getElementById("nums").innerHTML = `rgb(0, 0, 0)`;
}

document.getElementById("whbtn").addEventListener("click", displaywhite);

function displaywhite() {
  document.getElementById("display").style.background = `rgb(255,255,255)`;
  document.getElementById("nums").innerHTML = `rgb(255, 255, 255)`;
}
