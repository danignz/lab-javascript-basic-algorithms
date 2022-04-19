// Iteration 1: Names and Input
// 1.1 Create a variable `hacker1` with the driver's name.
const hacker1 = 'Daniel';
// 1.2 Print `"The driver's name is XXXX"`.
console.log(`The driver's name is ${hacker1}`);
//1.3 Create a variable `hacker2` with the navigator's name.
const hacker2 = 'Manolo';
//1.4 Print `"The navigator's name is YYYY"`.
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals
// 2.1. Depending on which name is longer, print:
if ( hacker1.length > hacker2.length ){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}else if ( hacker1.length < hacker2.length ){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}else{
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`);
}


// Iteration 3: Loops
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
let separatedName = '';

for (let i = 0; i < hacker1.length ; i++){
  separatedName += hacker1[i].toUpperCase();
  if( i !== hacker1.length-1 ){
    separatedName += ' ';
  }
}

console.log(`${separatedName}`);

//3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
let reversedName = '';

for (let i = hacker2.length-1; i >= 0; i--) {
  reversedName += hacker2[i];
}

console.log(`${reversedName}`);

//3.3 Depending on the lexicographic order of the strings, print:
function checkLexicographicOrder(word1, word2){
  if(word1.localeCompare(word2) < 0) {
    console.log(`The driver's name goes first.`);
  } else if (word1.localeCompare(word2) === 0){
     console.log(`What?! You both have the same name?`);
  }else{
    console.log(`Yo, the navigator goes first definitely.`);
  }
}

checkLexicographicOrder(hacker1, hacker2);

