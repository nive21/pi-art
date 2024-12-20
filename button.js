import { descriptions, digits } from "./descriptions.js";
import { updateSVG } from "./script.js";

const buttons = document.querySelectorAll(".btn");
const about = document.querySelector(".about");

// Set the default selected button as pi
let selectedButtonId = "pi";
let number = digits[selectedButtonId];
about.textContent = descriptions[selectedButtonId];

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    buttons.forEach((btn) => btn.classList.remove("selectedButton"));
    e.target.classList.add("selectedButton");

    selectedButtonId = e.target.id;
    about.textContent = descriptions[selectedButtonId];
    number = digits[selectedButtonId];
    updateSVG(number);
  });
});

export { number };
