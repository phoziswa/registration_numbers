var textAreaElement = document.querySelector(".textArea")
var townButtonElement = document.querySelector(".townButton")
var addButtonElement = document.querySelector(".addButton")
var showBtnElement = document.querySelector(".showBtn")
// var resetBtnElement = document.querySelector(".resetBtn")

if (localStorage["Regs"]) {
    var store = JSON.parse(localStorage["Regs"])
}
var instance = RegNumbersFactory();

function registrations() {


    if (textAreaElement.value != "") {
        instance.addingRegsToList(textAreaElement.value)
        node = document.createElement("li");
        var plate = document.createTextNode(instance.showCity());
        node.appendChild(plate);
        var currentDiv = document.getElementById("ulList")
        currentDiv.appendChild(node)
        textAreaElement.value = ""
    }
    if(townButtonElement.value == "CA","GP"||townButtonElement.value === "CY"){

    }
    
       localStorage["Regs"] = JSON.stringify(instance.getReg())

}

function filter(){
    var checkedRadioBtn = document.querySelector("input[name='btn']:checked");
    if (checkedRadioBtn) {
        var type = checkedRadioBtn.value;
        console.log(instance.registrationNums(type));
        
    }

}

addButtonElement.addEventListener('click', registrations);
showBtnElement.addEventListener('click', filter);
// resetBtnElement.addEventListener('click',reset);