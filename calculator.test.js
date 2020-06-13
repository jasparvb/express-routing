/** Tests for Calculator fns */

const {checkNums, mean, median, mode} = require('./calculator');


describe("Calculator tests", function() {

  test('checkNums', function() {
    expect(checkNums([1,2,3,4,5,6])).toEqual(undefined);
    expect(checkNums(["1","2","3","4","5","6"])).toEqual(undefined);
    expect(checkNums(["Foo","2","3","4","5","6"])).toEqual("Foo is not a number!");
  });

/*   test('testMean', function() {
    let text = mm.makeText();
    expect(text).toEqual(expect.any(String));
  });
  
  test('testMedian', function() {
    let text = mm.makeText();
    expect(text).toEqual(expect.any(String));
  });

  test('testMode', function() {
    let text = mm.makeText();
    expect(text).toEqual(expect.any(String));
  });
 */  
});
