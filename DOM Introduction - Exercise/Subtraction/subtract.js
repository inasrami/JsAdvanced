function subtract() {
  let firstInputRef = document.getElementById("firstNumber");
  let secondInputRef = document.getElementById("secondNumber");
  let resultRef = document.getElementById("result");

  let firstNum = Number(firstInputRef.value);
  let secondNum = Number(secondInputRef.value);

  let result = firstNum - secondNum;
  resultRef.textContent = result;
}   