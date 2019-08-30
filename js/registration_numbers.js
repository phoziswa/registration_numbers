function RegNumbersFactory(regPlate) {
    var list = regPlate;
    var cityRegs = regPlate || [];
    var error = ""

    function addingRegsToList(reg) {
     
        var toUpper = reg.toUpperCase();
        var regex = /([A-Z]){2}\s+([0-9]){3}\s([0-9]){3}/g; 
        var testRegex = regex.test(toUpper);
      
        if (testRegex) {
            cityRegs.push(toUpper);
        }
        return testRegex;
    }

    function regExist(plate) {
        return cityRegs.includes(plate)
    }

    function getError() {
        return error;
    }

    function getReg() {
        return cityRegs;
    }

    function registrationNums(townTag) {
        var townsList = [];
        if (townTag === "" || townTag === undefined) {
            return list;
        }
        for (var i = 0; i < cityRegs.length; i++) {
            if (cityRegs[i].startsWith(townTag)) {
                townsList.push(cityRegs[i])
            }
        }
        return townsList;
    }
    function  clearLocalStorage(){
        cityRegs = []
    }

    return {
        addingRegsToList,
        getError,
        getReg,
        registrationNums,
        regExist,
        clearLocalStorage

    }
}