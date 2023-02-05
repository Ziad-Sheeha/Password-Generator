/** @format */

const showPass = document.querySelector(".Show-Pass");
const inputNumber = document.querySelector(".show-pass-length");
const lower = document.getElementById("lower");
const upper = document.getElementById("upper");
const number = document.getElementById("number");
const symbols = document.getElementById("symbols");
const btn = document.querySelector(".btn");
const upperLabel = document.querySelector(".upper-label");
const lowerLabel = document.querySelector(".lower-label");
const numberLabel = document.querySelector(".number-label");
const symbolsLabel = document.querySelector(".symbols-label");
const upperCheck = document.querySelector(".upper-check");
const lowerCheck = document.querySelector(".lower-check");
const numberCheck = document.querySelector(".number-check");
const symbolsCheck = document.querySelector(".symbols-check");
const copy = document.querySelector(".fa-copy");
let result = "";

// function which will be called when nothing is checked

function getAllRandomPass() {
  let all = "";
  let chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghjklmnopqrstuvwxyz0123456789!@()#$%^&*";
  let charLength = chars.length;
  for (let i = 0; i < inputNumber.value; i++) {
    all += chars.charAt(Math.floor(Math.random() * charLength));
  }
  result += all;
}

// function which will be called when uppercase is checked

function getUpper() {
  let upperResult = "";
  let onlyUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let upperLength = onlyUpper.length;
  for (let i = 0; i < inputNumber.value; i++) {
    upperResult += onlyUpper.charAt(Math.floor(Math.random() * upperLength));
  }
  result += upperResult;
  if (lower.checked) {
    getLower();
  } else if (number.checked) {
    getNumber();
  } else if (symbols.checked) {
    getSymbols();
  }
  console.log(result);
}

// function which will be called when lowercase is checked

function getLower() {
  let lowerResult = "";
  let lower = "abcdefghjklmnopqrstuvwxyz";
  let lowerLength = lower.length;
  for (let i = 0; i < inputNumber.value; i++) {
    lowerResult += lower.charAt(Math.floor(Math.random() * lowerLength));
  }
  result += lowerResult;
  if (number.checked) {
    getNumber();
  } else if (symbols.checked) {
    getSymbols();
  }
}

// function which will be called when numbers is checked

function getNumber() {
  let onlyNum = "0123456789";
  let numResult = "";
  let numLength = onlyNum.length;
  for (let i = 0; i < inputNumber.value; i++) {
    numResult += onlyNum.charAt(Math.floor(Math.random() * numLength));
  }
  result += numResult;
  if (symbols.checked) {
    getSymbols();
  }
}

// function which will be called when symbols is checked

function getSymbols() {
  let symbols = "!@()#$%^&*";
  let symLength = symbols.length;
  let symbolsResult = "";
  for (let i = 0; i < inputNumber.value; i++) {
    symbolsResult += symbols.charAt(Math.floor(Math.random() * symLength));
    result += symbolsResult;
  }
}

// print result

function printResult() {
  let finalResult = "";
  for (let i = 0; i < inputNumber.value; i++) {
    finalResult += result.charAt(Math.floor(Math.random() * result.length));
  }
  showPass.innerHTML = finalResult;
  result = "";
}

// colorize the lable if checked

upperCheck.addEventListener("change", function () {
  upperLabel.classList.toggle("active");
});
lowerCheck.addEventListener("change", function () {
  lowerLabel.classList.toggle("active");
});
numberCheck.addEventListener("change", function () {
  numberLabel.classList.toggle("active");
});
symbolsCheck.addEventListener("change", function () {
  symbolsLabel.classList.toggle("active");
});

// The main function which will work onclick

btn.addEventListener("click", function () {
  if (upper.checked) {
    getUpper();
  } else if (lower.checked) {
    getLower();
  } else if (number.checked) {
    getNumber();
  } else if (symbols.checked) {
    getSymbols();
  } else {
    getAllRandomPass();
  }
  printResult();
});

// copy to clipboard

copy.addEventListener("click", function () {
  navigator.clipboard.writeText(showPass.innerHTML);
  copy.classList.add("my-class");
});

btn.addEventListener('click',function(){
  copy.classList.remove('my-class')
} )
