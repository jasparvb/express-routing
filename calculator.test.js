/** Tests for Calculator fns */

const {checkNums, mean, median, mode} = require('./calculator');


describe("Calculator tests", function() {

    test('checkNums', function() {
        expect(checkNums([1,2,3,4,-5,6])).toEqual([1,2,3,4,-5,6]);
        expect(checkNums(["1","2","3","4","-5","6"])).toEqual([1,2,3,4,-5,6]);
        expect(checkNums(["Foo","2","3","4","5","6"])).toEqual("Foo is not a number!");
        expect(checkNums(["2","","4","5","6"])).toEqual([2,4,5,6]);
    });

    test('testMean', function() {
        expect(mean([1,2,3,4,5,6])).toEqual(3.5);
        expect(mean([3,4,-5,6])).toEqual(2);
    });
    
    test('testMedian', function() {
        expect(median([3,10,-5,5])).toEqual(4);
        expect(median([1,3,10,-5,5])).toEqual(3);
    });

    test('testMode', function() {
        expect(mode([3,10,-5,5,5])).toEqual("5");
        expect(mode([3,10,-5,5,5,3])).toEqual("3, 5");
    });

});
