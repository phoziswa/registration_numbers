describe(' RegNumbersFactory', function () {
    it('should add the reg number if it is not in the list ', function () {

        var instance = RegNumbersFactory();

        instance.addingRegsToList("CA 12345");

        assert.deepEqual(instance.getReg(),["CA 12345"]);
    });
//     it('should check if the reg number is from cape town', function () {

//         var instance = RegNumbersFactory();
// instance.town1()
//         assert.deepEqual(instance.town1(),"Cape town");
//     });
});