const ftoc = function(fah) {
    let celRough = (fah - 32)*(5/9);
    return (Math.round(10 * celRough))/10;
};

const ctof = function(cel) {
      let fahRough = cel*(9/5)+32;
      return (Math.round(10 * fahRough))/10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
