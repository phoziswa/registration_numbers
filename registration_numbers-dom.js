var textAreaElement = document.querySelector(".textArea");
var townButtonElement = document.querySelector(".townButton");
var addButtonElement = document.querySelector(".addButton");
var filterBtnElement = document.querySelector(".filterBtn");
var errorElement = document.querySelector(".error");
var displayElement = document.getElementById("ulList");

function clearError() {
    setTimeout(function () {
        errorMessage.innerHTML = "";
    }, 2000);
}

if (localStorage["Regs"]) {
    var store = JSON.parse(localStorage["Regs"])
}
var instance = RegNumbersFactory();




function registrations() {
    if (textAreaElement.value != "") {
        instance.addingRegsToList(textAreaElement.value)
        displayElement.innerHTML = instance.getReg();

   }
    var regEx = /[A-Z]{2}\w\s[0-9]{5}/;
    var theReg = regEx.test(textAreaElement.value)

    if (!theReg) {
        errorElement.innerHTML = "first enter a registration number!"
    }


    //     var node = document.createElement("li");
    //  var plate = document.createTextNode(instance.getReg());
    //   node.appendChild(plate);

    //   currentDiv.appendChild(node)
    //    var currentDiv = document.getElementById("ulList")
    //        textAreaElement.value = ""




    localStorage["Regs"] = JSON.stringify(instance.getReg());
}

function filter() {
    var checkedRadioBtn = document.querySelector("input[name='btn']:checked");
    if (checkedRadioBtn) {
        var type = checkedRadioBtn.value;
        console.log(instance.registrationNums(type));

    }

}

addButtonElement.addEventListener('click', registrations);
filterBtnElement.addEventListener('click', filter);
