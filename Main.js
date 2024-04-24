// Level 1: Intorduction

//Lesson one: Document, Console, Windows

// 1. Document = HTML File// 
document.querySelector('h1').style.color='Blue';

// 2. Console = for test the code
console.log("my first code");
console.error('test the erroe');

//3. window = for controll the Browser
// like: window.alert, window.print usw 
// all commands are in window: 
window.document.write ('Test window');
window.console.log('test window');
window.console.error('test windows alert')
// its not a nessesery to write window, i can write dierkt the command like:
//print (), alert ()

// Lesson 2: Data Type in JS: 

// 1. String= to write words 
// 2. number = without ''
// 3. Boolyen = True or False 
// 4. undifined = when somthing is undifined 
// 5. Null
console.log (typeof('hosam')); console.log (typeof(5));

// lesson 3: Variable 
// 1. let and var. they are the same, var is old version 
let y;
y = 50 
console.log(y)
// 2. const, its not changeable . 
const a = 10
console.log (a)

// lesson 4: Conactenation:
let name = 'Husam';
let age = 31;
console.log ('im '+ name +' and im '+ age);


// Level 2: Numbers

//lesson 1: calculation:
let num1 = 5;
let num2 = 5;
console.log (num1+ num2);
console.log (num1* num2);
console.log (num1- num2);
console.log (num1/ num2);

// lesson 2: change string to number :
// to change any string to number, all to do is add + before the String or write nummber befor the String 
console.log (+'5'+ +'5')
console.log(typeof(+'5'+ +'5'))
console.log (+ true); console.log(+ false); // True has value 1, False has value 0
console.log(Number('5')+  Number('4')); // the best way

//Lesson 3: Number 
console.log (Number.MAX_SAFE_INTEGER); // the bigest number
console.log (Number.MIN_SAFE_INTEGER); // the smallest number
console.log (Number.isSafeInteger(234)); // to check if this number is safe
console.log(Number.isInteger(234)); console.log(Number.isInteger('234')); // to check of this Value is number or not//imprtant 

// Lesson 4: Math
console.log(Math.round(10.4));
console.log(Math.ceil(10.4)); 
console.log(Math.floor(10.4));
console.log(Math.max(10,4,56,7));
console.log(Math.min(10,4,67,76));

// Zakah training:
/* let Zakah = window.prompt();
console.log(0.025* Zakah + ' SDG');
*/
/*name= window.prompt('enter your name');
console.log (name);
age = window.prompt ('enter your age');
console.log(age);

let firstname = 'Husam';
firstname = window.prompt ('enter your first name');
let lastname =  window.prompt('enter your last name');
console.log ('hallo '+ firstname + ' ' + lastname);
let age = window.prompt ('enter your age');
window.alert  ('you are above 18 and your age is ' +  age);

*/

// Level 3: String: 
//lesson 1: Change Number to String: 

let x = 23 
console.log(typeof(x));
console.log(typeof String(x)); 

// lesson 2: String Generally
let name1 ='Husameldin Osman Awad';
console.log (name1.repeat(3)); // to repeat the String
console.log(name1.length) // to count how many letters in the String
console.log(name1[1]); // to defined which letter in this Position 
console.log(name1.indexOf('u')) // to search a letter in String
console.log (name1.search('Osman'));
console.log (name1.split(' ')) // to cut the String
console.log (name1.includes('z')); // to check if this Letter includes the String

