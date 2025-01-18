const name = "Hitesh"
const repocount = 50

console.log(`hello my name is ${name} and my repo count is ${repocount}`);

const gamename = new String('hiteshhc')
console.log(gamename[0]);
console.log(gamename.__proto__);
console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(3));
console.log(gamename.indexOf('t'));
  
const newstring = gamename.substring(0,4)
console.log(newstring);

const anotherstring = gamename.slice(-8,4)
console.log(anotherstring);

const newstringone = "   hotesh  "
console.log(newstringone);
console.log(newstringone.trim());

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20' , '-'))
console.log(url.includes('sundar'))

// const younameis = anuj-tomar-good
// console.log(yournameis.split('-'));

