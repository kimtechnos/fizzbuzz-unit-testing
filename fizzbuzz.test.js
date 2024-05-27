const {fizzbuzzNumbers} = require("./fizzbuzz");

describe("fizzbuzz", () => {
  it('returns "FizzBuzz" for multiples of 3 and 5', () => {
    // expect(fizzbuzz(15)).toBe("FizzBuzz");
    expect(fizzbuzzNumbers(30)).toBe("FizzBuzz");
    // expect(fizzbuzz(45)).toBe("FizzBuzz");
  });

  it('returns "Fizz" for multiples of 3', () => {
    expect(fizzbuzzNumbers(3)).toBe("FIZZ");
    
  });
  it('returns "BUZZ" for multiples of 5', () => {
    expect(fizzbuzzNumbers(5)).toBe("BUZZ");
   
  });
 
  it("returns the number for non-multiples of 3 or 5", () => {
    expect(fizzbuzzNumbers(1)).toBe(1);
   
  });
});
