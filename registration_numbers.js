function RegNumbersFactory() {
    var list = [];
    let getter;

    function addingRegsToList(reg) {
        if(!reg){
            return "First enter the registration number"
        }
        getter = reg;
        list.push(reg)
    }

    function getReg() {
        return list;
    }

    function showCity() {
        return getter;
    }
    // console.log(list);

    function registrationNums(townTag) {

        var cityRegs = []  
        if(townTag ==="" || townTag === undefined)return list;

        for (var i = 0; i < list.length; i++) {

            if (list[i].startsWith(townTag)) {

                cityRegs.push(list[i])
            }

            // else if (list[i].startsWith("GP")) {
            //     cityRegs.push(list[i])
            // }

            // else if (list[i].startsWith("CY")) {
            //     cityRegs.push(list[i])

            // }
        }
        return cityRegs
    }

    return {
        addingRegsToList,
        getReg,
        showCity,
        registrationNums

    }
}