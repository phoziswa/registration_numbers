var textAreaElement = document.querySelector(".textInput");
var townButtonElement = document.querySelector(".cityButton");
var addButtonElement = document.querySelector(".addBtn");
var showBtnElement = document.querySelector(".showButton");
var clearBtnElement = document.querySelector(".clearButton");
var errorElement = document.querySelector(".errorMessage");
var displayElement = document.querySelector(".regContainer");


var billDataElement = document.querySelector(".radioBillData");
var templateSources = document.querySelector(".billTemplate").innerHTML;
var billTemplates = Handlebars.compile(templateSources);

let store;
if (localStorage["Regs"]) {
    store = JSON.parse(localStorage["Regs"])
} else {
    store = [];
}

var regNum = RegNumbersFactory(store);

function addReg(){
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
if (checkedRadioBtn){
    var billItemType = checkedRadioBtn.value
}

}
addButtonElement.addEventListener('click', addReg);
