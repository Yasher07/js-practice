const name = "Yasher"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Yasher-Arafath')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-10, 4)
console.log(anotherString);


const NewStringOne = "   Yasher  "
console.log(NewStringOne);
console.log(NewStringOne.trim());

const url = "https://yasher.comyasher%07arafath"

console.log(url.replace('%07', '-'));

console.log(url.includes('yasher'));

console.log(gameName.split('-'));