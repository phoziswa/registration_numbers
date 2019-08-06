describe(' RegNumbersFactory', function () {
    it('should add the reg number if it is not in the list ', function () {

        var instance = RegNumbersFactory();

        instance.addingRegsToList("CA 12345");

        assert.deepEqual(instance.getReg(),["CA 12345"]);
    });
    it('should add two registration numbers in the list', function () {

        var instance = RegNumbersFactory();

        instance.addingRegsToList("CA 12345");
        instance.addingRegsToList("CY 12345");

        assert.deepEqual(instance.getReg(),["CA 12345","CY 12345"]);
    });
    it('should keep track of the registration numbers that starts CA,CY and GP', function () {

        var instance = RegNumbersFactory();
        instance.addingRegsToList("CA 12345");
        instance.addingRegsToList("CY 12345");
        instance.addingRegsToList("GP 12345");
       

        assert.deepEqual(instance.registrationNums(),["CA 12345","CY 12345","GP 12345"]);
    });
    it('should return only the registrations from cape town if the registration number starts with "CA"', function () {
        var instance = RegNumbersFactory();

        instance.addingRegsToList("CA 12345");
        instance.addingRegsToList("CA 24689");
        instance.addingRegsToList("CL 12345");
        instance.addingRegsToList("CK 12345");
       
        assert.deepEqual(instance.registrationNums('CA'),["CA 12345","CA 24689"]);
    });
    it('should return only the registrations from gauteng if the registration number starts with "GP"', function () {
        var instance = RegNumbersFactory();

        instance.addingRegsToList("CK 34587");
        instance.addingRegsToList("GP 12345");
        instance.addingRegsToList("GP 24689");
        instance.addingRegsToList("CL 12345");
        instance.addingRegsToList("CK 12345");
       
        assert.deepEqual(instance.registrationNums('GP'),["GP 12345","GP 24689"]);
    });
    it('should return only the registrations from bellville if the registration number starts with "CY"', function () {
        var instance = RegNumbersFactory();

        instance.addingRegsToList("CY 12345");
        instance.addingRegsToList("CY 24689");
        instance.addingRegsToList("CL 12345");
        instance.addingRegsToList("CK 12345");
       
        assert.deepEqual(instance.registrationNums('CY'),["CY 12345","CY 24689"]);
    });



    
});