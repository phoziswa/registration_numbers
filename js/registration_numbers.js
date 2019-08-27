function RegNumbersFactory(regPlate) {
    var list = regPlate;
    var cityRegs = regPlate || [];
    var error = ""

    function addingRegsToList(reg) {
     
        let toUpper = reg.toUpperCase();
        let regex = /[A-Z]{2}\s[0-9]{5}$/gm;
        let testRegex = regex.test(toUpper)
      
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

    return {
        addingRegsToList,
        getError,
        getReg,
        registrationNums,
        regExist

    }
}