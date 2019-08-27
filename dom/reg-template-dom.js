var textIputElement = document.querySelector(".textInput");
var townButtonElement = document.querySelector(".cityButton");
var addButtonElement = document.querySelector(".addBtn");
var showBtnElement = document.querySelector(".showButton");
var resetButtonElement = document.querySelector(".resetButton");
var errorMessageElement = document.querySelector(".errorMessage");
var displayAreaElement = document.querySelector(".regPlateContainer");

var registrationElement = document.querySelector(".theRegList");
var regTemplateSources = document.querySelector(".regTemplate").innerHTML;
var registrationTemplates = Handlebars.compile(regTemplateSources);

let stored;
if (localStorage["RegList2"]) {
    stored = JSON.parse(localStorage["RegList2"])
} else {
    stored = [];
}
var regNum = RegNumbersFactory(stored);

function addReg() {
    if (textIputElement.value !== "") {
        var regCap = textIputElement.value.toUpperCase();
        if (regNum.regExist(regCap)) {
            errorMessageElement.innerHTML = "please enter the new registration number, this one exist"
        }
        regNum.regExist(textIputElement.value)
        var contain = regNum.getReg()
      
        var data = registrationTemplates({ regTemp: contain })
        
        displayAreaElement.innerHTML = data;

        localStorage["RegList2"] = JSON.stringify(regNum.getReg());
    }
}
addButtonElement.addEventListener('click', addReg);

function reset() {
    localStorage.clear();
    location.reload();
}
resetButtonElement.addEventListener('click', reset);

