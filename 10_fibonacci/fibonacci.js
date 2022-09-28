const fibonacci = function(num) {
    if (Number.isInteger(num) && num > 0) {
      if (num === 1) {
        return 1;
      }
      if (num === 2) {
        return 1;
      } else {
        return fibonacci(num - 1) + fibonacci(num - 2);
      }
    } else if (typeof(num) === "string") {
      let numNormalise = parseInt(num);
      if (Number.isInteger(numNormalise)) {
        if (numNormalise === 1) {
        return 1;
      }
      if (numNormalise === 2) {
        return 1;
      } else {
        return fibonacci(numNormalise - 1) + fibonacci(numNormalise - 2);
      }
      } else {return "OOPS";}
    } else {return 'OOPS';}
  };
// Do not edit below this line
module.exports = fibonacci;
