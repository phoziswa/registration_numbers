var textIputElement = document.querySelector(".textInput");
var townButtonElement = document.querySelector(".cityButton");
var addButtonElement = document.querySelector(".addBtn");
var showButtonElement = document.querySelector(".showButton");
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
            return;         
        } 
    } else {
        errorMessageElement.innerHTML = "Please enter a registration number"
    }
        var results = regNum.addingRegsToList(regCap)
        if(results){
            localStorage["RegList2"] = JSON.stringify(regNum.getReg());
            var contain = regNum.getReg()
            var data = registrationTemplates({ regTemp: contain })      
            displayAreaElement.innerHTML = data;   
            errorMessageElement.innerHTML = ''  
            
        } else {
            errorMessageElement = 'please add a valid registration number i.e CA 123 456';
        }
}
addButtonElement.addEventListener('click', addReg);

showButtonElement.addEventListener('click', function () {
    displayAreaElement.innerHTML = ""

    var checkedRadioButton = document.querySelector("input[name='button']:checked");
    var city = checkedRadioButton.value;
    var regPlate = regNum.registrationNums(city);

    for (let i = 0; i < regPlate.length; i++) {
        var elementTemp = regPlate[i];
         elementTemp = regNum.registrationNums(city)
        var data = registrationTemplates({ regTemp: elementTemp })
        
        displayAreaElement.innerHTML = data;

    }

});

window.addEventListener("load", function () {
    var radioBtn = document.querySelectorAll('[name=button]:first-child');
   
    var typeTemp = radioBtn.value;
    displayAreaElement.innerHTML = ""

    var regNumber = regNum.registrationNums(typeTemp);

    for (let i = 0; i <  regNumber.length; i++) {
        var elementTemp =  regNumber[i];
         elementTemp = regNum.registrationNums(typeTemp)
        var data = registrationTemplates({ regTemp: elementTemp })
        
        displayAreaElement.innerHTML = data;

    }errorElement.innerHTML = ''
})


function clearStorage() {
    localStorage.removeItem("RegList2");
    regNum.clearLocalStorage();
    displayAreaElement.innerHTML = ""
 
}
resetButtonElement.addEventListener('click', clearStorage);
