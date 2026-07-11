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

function searchSpace(characterSet, passwordLength) {
  let searchSpaceval = Math.pow(characterSet, passwordLength);

  if (searchSpaceval >= 1e9) {
    srchSpaceVal.textContent = searchSpaceval.toExponential(2);
  } else {
    srchSpaceVal.textContent = searchSpaceval.toLocaleString();

  }

  if (searchSpaceval < 1e6) {
    srchSpaceVal.style.color = "red";
    searchSpaceCard.style.border = ".7px solid red";
    searchSpaceCard.style.boxShadow = "8px 8px 0px #ff000096";
    searchSpaceDesc.textContent = `🔴 Trivially Searchable`;
  }
  else if (searchSpaceval < 1e9) {
    srchSpaceVal.style.color = "orange";
    searchSpaceCard.style.border = ".7px solid orange";
    searchSpaceCard.style.boxShadow = "8px 8px 0px rgba(255, 123, 0, 0.589)";
    searchSpaceDesc.textContent = `🟠 Limited Search Space`;
  }
  else if (searchSpaceval < 1e12) {
    srchSpaceVal.style.color = "yellow";
    searchSpaceCard.style.border = ".7px solid yellow";
    searchSpaceCard.style.boxShadow = "8px 8px 0px #ffe6008e";
    searchSpaceDesc.textContent = `🟡 Moderate Search Space`;
  }
  else if (searchSpaceval < 1e18) {
    srchSpaceVal.style.color = "green";
    searchSpaceCard.style.border = ".7px solid green";
    searchSpaceCard.style.boxShadow = "8px 8px 0px rgba(14, 194, 38, 0.479)";
    searchSpaceDesc.textContent = `🟢 Large Search Space`;
  }
  else {
    srchSpaceVal.style.color = "rgb(1, 255, 1)";
    searchSpaceCard.style.border = ".7px solid rgb(1, 255, 1)";
    searchSpaceCard.style.boxShadow = "8px 8px 0px rgba(1, 255, 1, 0.514)";
    searchSpaceDesc.textContent = `🟢 Computationally Extensive`;
  }

  entropy(characterSet, passwordLength, searchSpaceval);


  return searchSpaceval;


}

function entropy(characterSet, passwordLength, searchSpaceval) {
  let entropyVal = passwordLength * Math.log2(characterSet);

  entropyValue.textContent = `${entropyVal.toFixed(2)} Bits`;

  if (entropyVal < 28) {

    entropyValue.style.color = "red";
    entropyCard.style.border = ".7px solid red";
    entropyCard.style.boxShadow = "8px 8px 0px #ff000096";
    entropyDesc.textContent = `Insufficient Entropy. Highly Predictable`;
  }
  else if (entropyVal >= 28 && entropyVal < 35) {
    entropyValue.style.color = "orange";
    entropyCard.style.border = ".7px solid orange";
    entropyCard.style.boxShadow = "8px 8px 0px rgba(255, 123, 0, 0.589)";
    entropyDesc.textContent = `Limited Entropy. Low Randomness`
  }
  else if (entropyVal >= 35 && entropyVal < 59) {
    entropyValue.style.color = "yellow";
    entropyCard.style.border = ".7px solid yellow";
    entropyCard.style.boxShadow = "8px 8px 0px #ffe6008e";
    entropyDesc.textContent = `Moderate Entropy. Moderate Randomness `;
  }
  else if (entropyVal >= 59 && entropyVal < 79) {
    entropyValue.style.color = "green";
    entropyCard.style.border = ".7px solid green";
    entropyCard.style.boxShadow = "8px 8px 0px rgba(1, 255, 1, 0.514)";
    entropyDesc.textContent = `High Entropy. High Randomness`;
  }
  else {
    entropyValue.style.color = "rgb(1, 255, 1)";
    entropyCard.style.border = ".7px solid rgb(1, 255, 1)";
    entropyCard.style.boxShadow = "8px 8px 0px rgba(1, 255, 1, 0.514)";
    entropyDesc.textContent = `Exceptional Entropy. Cryptographically Strong`;
  }

  estimateCrackTime(searchSpaceval, passwordLength, characterSet, entropyVal);

}

function estimateCrackTime(searchSpaceval, passwordLength, characterSet, entropyVal) {

  let estCrackTimeval = searchSpaceval / 1e11;

  const year = 31536000;
  const Thyear = 1000;
  const MiYear = 1000000;
  const BiYear = 1000000000;

  if (estCrackTimeval < 60) {
    estCrackTimeValue.textContent =
      `${estCrackTimeval.toFixed(2)} Seconds`;
    estCrackTimeDesc.textContent = `Instant Compromise`;
    estCrackTimeDesc.style.color = "red";
  }

  else if (estCrackTimeval < 3600) {
    let estMins = estCrackTimeval / 60;
    estCrackTimeValue.textContent =
      `${estMins.toFixed(2)} Minutes`;
    estCrackTimeDesc.textContent = `Rapidly Crackable`;
    estCrackTimeDesc.style.color = "red";
  }

  else if (estCrackTimeval < 86400) {
    let estHours = estCrackTimeval / 3600;
    estCrackTimeValue.textContent =
      `${estHours.toFixed(2)} Hours`;
    estCrackTimeDesc.textContent = `Low Resistance`;
    estCrackTimeDesc.style.color = "yellow";
  }

  else if (estCrackTimeval < year) {
    let estDays = estCrackTimeval / 86400;
    estCrackTimeValue.textContent =
      `${estDays.toFixed(2)} Days`;
    estCrackTimeDesc.textContent = `Moderate Resistance`;
    estCrackTimeDesc.style.color = "yellow";
  }

  else if (estCrackTimeval < year * Thyear) {
    let estYear = estCrackTimeval / year;
    estCrackTimeValue.textContent =
      `${estYear.toFixed(2)} Years`;
    estCrackTimeDesc.textContent = `High Resistance`;
    estCrackTimeDesc.style.color = "rgb(1, 255, 1)";
  }

  else if (estCrackTimeval < year * MiYear) {
    let estThYears = estCrackTimeval / (year * Thyear);
    estCrackTimeValue.textContent =
      `${estThYears.toFixed(2)} Thousand Years`;
    estCrackTimeDesc.textContent = `Extremely Resistant`;
    estCrackTimeDesc.style.color = "rgb(1, 255, 1);";
  }

  else if (estCrackTimeval < year * BiYear) {
    let estMiYears = estCrackTimeval / (year * MiYear);
    estCrackTimeValue.textContent =
      `${estMiYears.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })} Million Years`;
    estCrackTimeDesc.textContent = `Computationally Impractical`;
    estCrackTimeDesc.style.color = "rgb(1, 255, 1);";
  }

  else {
    let estBiYears = estCrackTimeval / (year * BiYear);
    estCrackTimeValue.textContent =
      `${estBiYears.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })} Billion Years`;
    estCrackTimeDesc.textContent = `Computationally Infeasible`;
    estCrackTimeDesc.style.color = "rgb(1, 255, 1);";
  }

  threatanalysis(passwordLength, characterSet, entropyVal, estCrackTimeval);
}

function threatanalysis(passwordLength, characterSet, entropyVal, estCrackTimeval) {

  if (passwordLength === 0) {
    threatVal.textContent = "NULL";
    threatVal.style.color = "rgb(165, 165, 165)";
    threatDesc.textContent = "Awaiting Analysis";
    return;
  }
  const oneMinute = 60;
  const oneDay = 86400;
  const oneYear = 31536000;
  const oneHundredYears = oneYear * 100;
  const oneMillionYears = oneYear * 1000000;

  if (passwordLength < 6 || characterSet === 26 || entropyVal < 28 || estCrackTimeval < oneMinute) {
    threatVal.textContent = "CRITICAL";
    threatVal.style.color = "red";
    threatDesc.textContent = "Critical exploit window detected.";
    threatCard.style.border = ".7px solid red";
    threatCard.style.boxShadow = "8px 8px 0px #ff000096";
  }
  else if ((passwordLength >= 6 && passwordLength <= 8) || (entropyVal >= 28 && entropyVal <= 40) || estCrackTimeval < oneDay) {
    threatVal.textContent = "VULNERABLE";
    threatVal.style.color = "orange";
    threatDesc.textContent = "Susceptible to rapid targeted attacks.";
    threatCard.style.border = ".7px solid orange";
    threatCard.style.boxShadow = "8px 8px 0px orange";
  }

  else if (passwordLength >= 16 && characterSet === 94 && entropyVal >= 80 && estCrackTimeval >= oneMillionYears) {
    threatVal.textContent = "FORTIFIED";
    threatVal.style.color = "rgb(0, 225, 255)";
    threatDesc.textContent = "Military grade architectural defense.";
    threatCard.style.border = ".7px solid rgb(1, 255, 1)";
    threatCard.style.boxShadow = "8px 8px 0px rgba(1, 255, 1, 0.514)";

  }

  else if (passwordLength >= 12 && characterSet >= 62 && entropyVal >= 60 && estCrackTimeval >= oneHundredYears) {
    threatVal.textContent = "SECURE";
    threatVal.style.color = "rgb(1, 255, 1)";
    threatDesc.textContent = "Strong configuration. Safe from standard arrays.";
    threatCard.style.border = ".7px solid rgb(1, 255, 1)";
    threatCard.style.boxShadow = "8px 8px 0px rgba(1, 255, 1, 0.514)";
  }
  else {
    threatVal.textContent = "MODERATE";
    threatVal.style.color = "yellow";
    threatDesc.textContent = "Baseline complexity requirements met.";
    threatCard.style.border = ".7px solid yellow";
    threatCard.style.boxShadow = "8px 8px 0px #ffe6008e";
  }

}
