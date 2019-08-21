var textAreaElement = document.querySelector(".textArea");
var townButtonElement = document.querySelector(".townButton");
var addButtonElement = document.querySelector(".addButton");
var showBtnElement = document.querySelector(".showBtn");
var clearBtnElement = document.querySelector(".clearBtn");
var errorElement = document.querySelector(".error");
var displayElement = document.querySelector(".regContainer");


let store;
if (localStorage["Regs"]) {
    store = JSON.parse(localStorage["Regs"])
} else {
    store = [];
}
// console.log(store);

var instance = RegNumbersFactory(store);

function addingBtn() {
    if (textAreaElement.value !== "") {
        var regNumbersCap = textAreaElement.value.toUpperCase();
        if (instance.regExist(regNumbersCap)) {
            errorElement.innerHTML = "please enter the new registration number, this one exist"
            return;
        }
        var result = instance.addingRegsToList(regNumbersCap)
        if (result) {     //in here I am saying if result is true must print as bellow
            localStorage["Regs"] = JSON.stringify(instance.getReg());
            var div = document.createElement("div")
            div.classList.add("plates")
            var content = document.createTextNode(regNumbersCap)
            div.appendChild(content)
            displayElement.appendChild(div)
            errorElement.innerHTML = ''
        } else {
            errorElement.innerHTML = 'please add a valid registration number i.e CA 12345';
        }

    } else {
        errorElement.innerHTML = "Please enter a registration number"
    }
    
    }

addButtonElement.addEventListener('click', addingBtn);


showBtnElement.addEventListener('click', function () {

    var checkedRadioBtn = document.querySelector("input[name='btn']:checked");
    
    var type = checkedRadioBtn.value;
    displayElement.innerHTML = ""

    var regNumbers = instance.registrationNums(type);

    for (let i = 0; i < regNumbers.length; i++) {
        const element = regNumbers[i];
        var div = document.createElement("div")
        div.classList.add("plates")
        var content = document.createTextNode(element)
        div.appendChild(content)

        displayElement.appendChild(div)
    }
});

window.addEventListener("load", function () {
    var elements = document.querySelectorAll('[name=btn]:first-child');
   
    var type = elements.value;
    displayElement.innerHTML = ""

    var regNumbers = instance.registrationNums(type);

    for (let i = 0; i < regNumbers.length; i++) {
        const element = regNumbers[i];
        var div = document.createElement("div")
        div.classList.add("plates")
        var content = document.createTextNode(element)
        div.appendChild(content)

        displayElement.appendChild(div)
    }
})

function clear() {
    localStorage.clear();
    location.reload();
}
clearBtnElement.addEventListener('click', clear);

