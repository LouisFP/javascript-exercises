const sumAll = function (val1, val2) {
  let sum = 0;
  if (Number.isInteger(val1) && Number.isInteger(val2)) {
    if (val1 < 0 || val2 < 0) {
      return "ERROR";
    } else if (val1 - val2 < 0) {
      for (let i = val1; i <= val2; i++) {
        sum += i;
      }
      return sum;
    } else if (val2 - val1 < 0) {
      for (let i = val2; i <= val1; i++) {
        sum += i;
      }
      return sum;
    }
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = sumAll;
