const inputs = document.querySelectorAll("input");
let inputsArray = Array.from(inputs);
let inputValues = inputsArray.map((input) => input.value);

const grantLoginAccess = () => {
  document.getElementById("login").style.backgroundColor = "yellow";
  document.getElementById("login").style.color = "black";
};

const denyLoginAccess = () => {
  document.getElementById("login").style.backgroundColor = "grey";
  document.getElementById("login").style.color = "white";
};

inputs.forEach((input) =>
  input.addEventListener("change", () => {
    inputsArray = Array.from(inputs);
    inputValues = inputsArray.map((input) => input.value);
    const bothInputsHaveContent = inputValues.every((value) => value);
    bothInputsHaveContent ? grantLoginAccess() : denyLoginAccess();
  })
);
