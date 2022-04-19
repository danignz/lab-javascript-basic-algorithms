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


//Bonus Time!
//Bonus 1: Go to lorem ipsum generator and Generate 3 paragraphs. Store the text in a variable type of string.
const threeLoremParagraphs = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut efficitur diam, at blandit leo. Vestibulum tincidunt et turpis id aliquet. Maecenas lacinia, quam et hendrerit dictum, est ligula accumsan dui, vel fringilla elit odio vitae felis. In non vehicula turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum eget justo nulla. Ut aliquet varius urna a lobortis. Pellentesque sed turpis ut turpis dignissim pellentesque eu ut quam. Aenean euismod purus a vehicula ornare. Nam venenatis bibendum est, a congue tellus egestas ac.

Vivamus suscipit justo sit amet nibh malesuada, nec blandit nunc porta. Proin tempor purus libero. Sed eu nulla orci. Praesent molestie nunc vel purus pulvinar consectetur. In vel nibh purus. Integer malesuada purus et turpis fringilla vulputate vitae pellentesque purus. In eleifend nisl urna, id pretium magna varius at.

Suspendisse luctus neque sed pulvinar volutpat. Duis vitae nulla nec sem congue commodo. Mauris eleifend lorem quis nibh efficitur, sit amet tincidunt eros viverra. Sed nec ante nunc. Aenean hendrerit eleifend velit, sit amet bibendum felis fermentum sit amet. Nam sapien turpis, consequat nec justo id, rhoncus auctor leo. Ut congue dignissim enim, ac vehicula lectus volutpat ac. Morbi sed lacus nec nunc porttitor fringilla a in nunc. Nulla vitae eros eget dui sollicitudin bibendum non sed purus. Fusce interdum interdum nibh, vehicula convallis mauris ullamcorper in. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin ut mollis lacus. Donec sit amet nisi ut massa vehicula congue. Suspendisse at augue sem.`;

let numberOfWords = 0;
let numberOfEt= 0;
const numParagraphs = 3;

for (let i = 0; i < threeLoremParagraphs.length ; i++){
  if ( threeLoremParagraphs[i] === ' '){
       numberOfWords++; // Make your program count the number of words in the string.
  }
  if ((threeLoremParagraphs[i-1] === ' ' && threeLoremParagraphs[i] === 'e') && (threeLoremParagraphs[i+1] === 't' && threeLoremParagraphs[i+2] === ' ' )){
       numberOfEt++; // Make your program count the number of times the Latin word et appears.
  }
}
numberOfWords += numParagraphs; // For each paragraphs, add to the counter an additional word that correspons to the firt word of a paragraph
console.log(numberOfWords);
console.log(`The number of times the Latin word et appears its ${numberOfEt}`);
