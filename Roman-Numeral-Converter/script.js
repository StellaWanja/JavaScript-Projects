const inputNumber = document.getElementById("number");
const btn = document.getElementById("convert-btn");
const output = document.getElementById("output");

// Recursion
const inputConversion = (num) => {
    if(num >= 1000) {return 'M'  + inputConversion(num - 1000);}
    if(num >=  900) {return 'CM' + inputConversion(num -  900);}
    if(num >=  500) {return 'D'  + inputConversion(num -  500);}
    if(num >=  400) {return 'CD' + inputConversion(num -  400);}
    if(num >=  100) {return 'C'  + inputConversion(num -  100);}
    if(num >=   90) {return 'XC' + inputConversion(num -   90);}
    if(num >=   50) {return 'L'  + inputConversion(num -   50);}
    if(num >=   40) {return 'XL' + inputConversion(num -   40);}
    if(num >=   10) {return 'X'  + inputConversion(num -   10);}
    if(num >=    9) {return 'IX' + inputConversion(num -    9);}
    if(num >=    5) {return 'V'  + inputConversion(num -    5);}
    if(num >=    4) {return 'IV' + inputConversion(num -    4);}
    if(num >=    1) {return 'I'  + inputConversion(num -    1);}
    return '';
};

const validateUserInput = () => {
  const inputVal = parseInt(inputNumber.value);
  if (!inputNumber.value || isNaN(inputVal)) {
    output.innerText = "Please enter a valid number";
    return;
  }
  if (inputVal <= 0) {
    output.innerText = "Please enter a number greater than or equal to 1";
    return;
  }
  if (inputVal >= 4000) {
    output.innerText = "Please enter a number less than or equal to 3999";
    return;
  }
  output.innerText = inputConversion(inputVal);
};

btn.addEventListener("click", validateUserInput);
inputNumber.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    validateUserInput();
  }
});
