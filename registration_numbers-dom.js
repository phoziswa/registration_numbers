var textAreaElement = document.querySelector(".textArea")
var townButtonElement = document.querySelector(".townButton")
var addButtonElement = document.querySelector(".addButton")
var moveBtnElement = document.querySelector(".move")
var displayElement = document.querySelector(".display")

// if (localStorage["Regs"]) {
//     var store = JSON.parse(localStorage["Regs"])
// }
var instance = RegNumbersFactory();

function registrations() {


    // var checkedRadioBtn = document.querySelector("input[name='btn']:checked");
    // if (checkedRadioBtn) {
    //     var type = checkedRadioBtn.value;
    // }

    // if (textAreaElement.value) {
    //     var displayReg = instance.addingRegsToList(textAreaElement.value, type);
    //     displayElement.innerHTML = displayReg;
    // }
    if (textAreaElement.value != "") {
        instance.addingRegsToList(textAreaElement.value)
        node = document.createElement("li");
        var plate = document.createTextNode(instance.showCity());
        node.appendChild(plate);
        var currentDiv = document.getElementById("ulList")
        currentDiv.appendChild(node)
        textAreaElement.value = ""
    }


    //    localStorage["Regs"] = JSON.stringify(instance.getReg())

}
addButtonElement.addEventListener('click', registrations);
// moveBtnElement.addEventListener('click', registrations);