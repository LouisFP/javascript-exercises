const findTheOldest = function (array) {
  return array.reduce((oldest, crentPerson) => {
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    const currentAge = getAge(crentPerson.yearOfBirth,crentPerson.yearOfDeath);
    return oldestAge < currentAge ? crentPerson : oldest;
  })
};

const getAge = function(birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
};

// Do not edit below this line
module.exports = findTheOldest;
