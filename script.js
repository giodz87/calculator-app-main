const num = document.getElementById("number");
const btnSmall = document.getElementsByClassName("btn");
const btnArray = [...btnSmall];
const deleteNumber = document.getElementById("delete-num");
const resetBtn = document.getElementById("reset");
const equalBtn = document.getElementById("equal");
const rangeMove = document.getElementById("range");

let btnArr = "";
let regex = "";
let text = "";
let rangeSize = 0;

btnArray.forEach((button) => {
  button.addEventListener("click", () => {
    btnArr += button.innerText;
    num.innerText = btnArr;
  });
});

equalBtn.addEventListener("click", () => {
  regex = num.innerText.replace(/x/gi, "*");
  num.innerText = eval(regex);
  btnArr = num.innerText;
});

resetBtn.addEventListener("click", () => {
  btnArr = "";
  num.innerText = 0;
});
deleteNumber.addEventListener("click", () => {
  text = num.innerText;
  num.innerText = text.substring(0, text.length - 1);
  btnArr = num.innerText;
});

rangeMove.addEventListener("click", () => {
  rangeSize = rangeMove.value;

  if (rangeSize === "0") {
    document.getElementById("stylesheet").href = "styles.css";
  } else if (rangeSize === "1") {
    document.getElementById("stylesheet").href = "white.css";
  } else if (rangeSize === "2") {
    document.getElementById("stylesheet").href = "dark.css";
  }
});
