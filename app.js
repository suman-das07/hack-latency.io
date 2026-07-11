let passInp = document.querySelector("#passInput");
let analyseBtn = document.querySelector("#analyse");

let passValue = document.querySelector("#pass-value");

let passLengthCard = document.querySelector(".passwordLength");

let sysStatVal = document.querySelector("#sysStat-value");
let sysStatDes = document.querySelector("#sysStat-description");
let sysStatCard = document.querySelector(".systemStatus");

let hasUpperCase = document.querySelector("#uppercase");
let hasLowerCase = document.querySelector("#lowercase");
let hasNumbers = document.querySelector("#numbers");
let hasSymbols = document.querySelector("#symbols");

let charSetVal = document.querySelector("#charSetValue");
let charSetDes = document.querySelector("#charSetDescp");

let srchSpaceVal = document.querySelector("#searchSpaceValue");
let searchSpaceDesc = document.querySelector("#searchSpaceDescp");
let searchSpaceCard = document.querySelector(".searchSpace");

let entropyValue = document.querySelector("#entValue");
let entropyDesc = document.querySelector("#entDescp")
let entropyCard = document.querySelector(".entropy");

let estCrackTimeValue = document.querySelector("#est-value");
let estCrackTimeDesc = document.querySelector("#est-description");
let estCTCard = document.querySelector(".estimateCrackTime");

let threatVal = document.querySelector("#threatValue");
let threatDesc = document.querySelector("#threatDescp");
let threatCard = document.querySelector(".threat");

analyseBtn.addEventListener("click", function () {
  let readPass = passInp.value;

  let passwordLength = passLength(readPass);

  passUI(passwordLength);

  systemStatus(passwordLength);

  characterTypes(readPass);

});

function passLength(readPass) {
  return readPass.length;
}

function passUI(passwordLength) {
  passValue.textContent = `${passwordLength} Characters`;

  if (passwordLength < 6) {
    passValue.style.color = "red";
    passLengthCard.style.border = ".7px solid red";
    passLengthCard.style.boxShadow = "8px 8px 0px #ff000096";


  }
  else if (passwordLength <= 12) {
    passValue.style.color = "yellow";
    passLengthCard.style.border = ".7px solid yellow";
    passLengthCard.style.boxShadow = "8px 8px 0px #ffe6008e";
  }
  else {
    passValue.style.color = "rgb(1, 255, 1)";
    passLengthCard.style.border = ".7px solid rgb(1, 255, 1)";
    passLengthCard.style.boxShadow = "8px 8px 0px rgba(1, 255, 1, 0.514)";
  }
}

function systemStatus(passwordLength) {
  if (passwordLength === 0) {
    sysStatVal.textContent = `IDLE`;
    sysStatVal.style.color = "rgb(165, 165, 165)";


  }
  else if (passwordLength < 6) {
    sysStatVal.textContent = `BREACHED`;
    sysStatVal.style.color = "red";
    sysStatCard.style.border = ".7px solid red";
    sysStatCard.style.boxShadow = "8px 8px 0px #ff000096";
    sysStatDes.textContent = `Too short. Easily cracked.`;
  }
  else if (passwordLength <= 12) {
    sysStatVal.textContent = `VULNERABLE`;
    sysStatVal.style.color = "yellow";
    sysStatCard.style.border = ".7px solid yellow";
    sysStatCard.style.boxShadow = "8px 8px 0px #ffe6008e";
    sysStatDes.textContent = `Weak. Needs more variety.`;
  }
  else {
    sysStatVal.textContent = `SECURE`;
    sysStatVal.style.color = "rgb(1, 255, 1)";
    sysStatCard.style.border = ".7px solid rgb(1, 255, 1)";
    sysStatCard.style.boxShadow = "8px 8px 0px rgba(1, 255, 1, 0.514)";
    sysStatDes.textContent = `Strong. Safe from hackers.`;
  }

}

function characterTypes(readPass) {
  if (readPass.length === 0) {
    hasUpperCase.style.color = "rgb(165, 165, 165)";
    hasLowerCase.style.color = "rgb(165, 165, 165)";
    hasNumbers.style.color = "rgb(165, 165, 165)";
    hasSymbols.style.color = "rgb(165, 165, 165)";
    return;
  }
  let upperCase = /[A-Z]/.test(readPass);
  let lowerCase = /[a-z]/.test(readPass);
  let numbers = /[0-9]/.test(readPass);
  let symbols = /[^A-Za-z0-9]/.test(readPass);

  if (!upperCase) {
    hasUpperCase.style.color = "red";
  }
  else {
    hasUpperCase.style.color = "rgb(1, 255, 1)";
  }

  if (!lowerCase) {
    hasLowerCase.style.color = "red";
  }
  else {
    hasLowerCase.style.color = "rgb(1, 255, 1)";
  }

  if (!numbers) {
    hasNumbers.style.color = "red";
  }
  else {
    hasNumbers.style.color = "rgb(1, 255, 1)";
  }

  if (!symbols) {
    hasSymbols.style.color = "red";
  }
  else {
    hasSymbols.style.color = "rgb(1, 255, 1)";
  }

  characterSetSize(upperCase,
    lowerCase,
    numbers,
    symbols,
    readPass.length
  )
}

function characterSetSize(
  upperCase,
  lowerCase,
  numbers,
  symbols,
  passwordLength
) {

  let characterSet = 0;

  if (upperCase) {
    characterSet += 26;
  }

  if (lowerCase) {
    characterSet += 26;
  }

  if (numbers) {
    characterSet += 10;
  }
  if (symbols) {
    characterSet += 32;
  }
  charSetVal.textContent = `${characterSet} Characters`;

  if (characterSet === 0) {
    charSetVal.style.color = "rgb(165, 165, 165)";
    charSetDes.textContent = `Awaiting Input`
  }
  else if (characterSet === 26) {
    charSetVal.style.color = "red";
    charSetDes.textContent = `Only one character type`;
  }
  else if (characterSet === 36) {
    charSetVal.style.color = "orange";
    charSetDes.textContent = `Lowercase + Numbers`;
  }
  else if (characterSet === 52) {
    charSetVal.style.color = "yellow";
    charSetDes.textContent = `UpperCase + LowerCase`;
  }
  else if (characterSet === 62) {
    charSetVal.style.color = "yellow";
    charSetDes.textContent = `Letters + Numbers`;
  }
  else if (characterSet === 94) {
    charSetVal.style.color = "rgb(1, 255, 1)";
    charSetDes.textContent = `All Character Types`;
  }

  searchSpace(characterSet, passwordLength);

  return characterSet;
}
