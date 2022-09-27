const add = function(a,b) { 
	return parseInt(a) + parseInt(b);
};

const subtract = function(a,b) { 
	return +a - +b;
};

const sum = function(array) {
  return array.reduce((total,current)=> {
  return total + current},0);
    
};

const multiply = function(array) {
  return array.reduce((total, current)=>{
  return total * current},1);

};

const power = function(a,b) {
	let tot = 1;
  for (let i = 0; i < b;i++){
    tot *= a;
  }
  return tot;
  // Math.pow(a,b)
};
    
  const factorial = function(a) {
    let fac = 1;
    for (let i = a; i > 0; i--){
    fac *= i;}
    return fac;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
