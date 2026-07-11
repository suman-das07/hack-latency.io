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
