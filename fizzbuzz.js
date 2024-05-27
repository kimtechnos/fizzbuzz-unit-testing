module.exports = { fizzbuzzNumbers }
function fizzbuzzNumbers(n){
  if (n % 3 === 0 && n % 5 === 0) {
    return "FizzBuzz";
  } else if (n % 3 === 0) {
    return "FIZZ";
  } else if (n % 5 === 0) {
    return "BUZZ";
  } else {
  return n;
  }
}
console.log(10)

// module.exports = { fizzbuzz };
