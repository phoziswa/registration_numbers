function RegNumbersFactory() {
    var list = [];
    let getter;
    // var capeTown = []
    // var gauteng = []
    // var bellville = []

    function addingRegsToList(reg) {
        getter = reg;
        list.push(reg)
    }

    function getReg() {
        return list;
    }

    function showCity(){
        return getter;
    }
  console.log(list);
    
    
    
    // function regList(){
    //     if(!reg)
    //         return("no reg entered")
    //     }


// function registrationNums(){
//     var regs = list.Split(",");
//     for(i=0; i<list.length; i++)
//     list.push(regs)
// }
    // function town1(regNum) {
    //     if (list.StartsWith("CA")) {
    //         capeTown.push(regNum)

    //     }
    // }
    // function town2(list) {
    //     if (list.EndsWith("GP")) {
    //         gauteng.push(regNum)

    //     }
    // }
    // function town3(list) {
    //     if (list.EndsWith("CY")) {
    //         bellville.push(regNum)
    //     }
    // }

    return {
        addingRegsToList,
        getReg,
        showCity,
        // registrationNums

    }
}