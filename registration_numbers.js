function RegNumbersFactory() {
    var list = [];

    function addingRegsToList(reg) {

        let toUpper = reg.toUpperCase()
        if (!list.includes(toUpper)){
            list.push(toUpper)
        }
        
    }
    function errorMessages() {
        if (regNumbers == "") {
            return "first enter a registration number!"
        }
    }

    function getReg() {
        return list;
    }

    function registrationNums(townTag) {

        var cityRegs = []
        if (townTag === "" || townTag === undefined) return list;

        for (var i = 0; i < list.length; i++) {

            if (list[i].startsWith(townTag)) {

                cityRegs.push(list[i])
            }

        
        }
        return cityRegs
    }

    return {
        addingRegsToList,
        errorMessages,
        getReg,
        // showCity,
        registrationNums,


    }
}