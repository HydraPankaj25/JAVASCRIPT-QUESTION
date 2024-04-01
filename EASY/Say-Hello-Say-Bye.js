function sayHelloBye(name, num) {
  return num ? `Hello ${name}` : `Bye ${name}`;
}

console.log(sayHelloBye("alon", 1));; //➞ "Hello Alon"

console.log(sayHelloBye("Tomi", 0));; //➞ "Bye Tomi"

console.log(sayHelloBye("jose", 0));; //➞ "Bye Jose"
