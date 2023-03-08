const add = async (div, arr) => {
  //   let arr = ["7", "8", "9", "DEL", "AC"];
  let button;
  for (let i = 0; i <= 4; i++) {
    button = document.createElement("button");
    button.value = arr[i];
    button.innerHTML = `${arr[i]}`;
    div.insertAdjacentElement("beforeend", button);
    button.classList.add("grid-element");
    button.classList.add("desing");
  }
};
const div = document.getElementsByClassName("grid-container")[0];

let first_row = ["7", "8", "9", "DEL", "AC"];
let second_row = ["4", "5", "6", "*", "/"];
let third_row = ["1", "2", "3", "+", "-"];
let last_row = ["0", ".", "EXP", "Ans", "="];

(async () => {
  add(div, first_row);
  add(div, second_row);
  add(div, third_row);
  add(div, last_row);
})();
var string = "";

let element = document.querySelectorAll(".grid-element");
element = Array.from(element);
element.forEach((e) => {
  e.addEventListener("click", (e) => {
    const input = document.getElementById("input-display");
    let output = document.getElementById("output");
    let answer = 0;
    if (e.target.value == "DEL") {
      string = string.replace("DEL", "");
      let size = string.length;

      string = string.substring(0, string.length - 1);

      console.log(`string is ${string}`);
      input.value = string;

      console.log(string);
    } else if (e.target.value == "AC") {
      string = string.substring(0, 0);
      input.value = string;
    } else if (e.target.value == "=") {
      string = string.replace("=", "");
      console.log(eval(string));
      answer = eval(string);
      output.innerHTML = eval(string);
      string = "";
    } else {
      string = string + e.target.innerHTML;
      input.value = string;
    }
  });
});
