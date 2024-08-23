const currentYear = new Date().getFullYear();

const getAge = function(person){
    return (person.yearOfDeath ? person.yearOfDeath : currentYear) - person.yearOfBirth;
}


const findTheOldest = function(persons) {
    return persons.sort((person1, person2) => getAge(person2) - getAge(person1))[0];
};

// Do not edit below this line
module.exports = findTheOldest;
