const readline = require("readline-sync");

let age = readline.question("What is your age?")*1
let year = readline.question("what is the year?");
console.log(age);
console.log(year);
//let ageIn10 = 10
//let ageIn20 = 20
//let newAgeIn10 = age + ageIn10
//let newAgeIn20 = age + ageIn20
//console.log(`In 10 years time you will be ${newAgeIn10}`)
//console.log(`In 20 years time you will be ${newAgeIn20}`)
let retirementAge = 67 - age
if (retirementAge < 0) {
    console.log(`You've already retired`)
} else {
    console.log(`You can retire in ${retirementAge} years time`)
}
let futureYear = readline.question("What is a future year?");
futureYear = (futureYear);
let ageInfutureYear = (futureYear - year + age);
console.log(`In ${futureYear} you will be ${ageInfutureYear}`)

// hello