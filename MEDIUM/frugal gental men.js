// Atticus has been invited to a dinner party, and he decides to purchase a bottle of wine. However, he has little knowledge of how to choose a good bottle. Being a very frugal gentleman (yet disliking looking like a cheapskate), he decides to use a very simple rule. In any selection of two or more wines, he will always buy the second-cheapest.

// Given an array of wine objects, write a function that returns the name of the wine he will buy for the party. If given an empty array, return null. If given an array of only one, Atticus will buy that wine.

// Examples
chosenWine([
  { name: "Wine A", price: 8.99 },
  { name: "Wine 32", price: 13.99 },
  { name: "Wine 9", price: 10.99 },
]); //➞ "Wine 9"

chosenWine([{ name: "Wine A", price: 8.99 }]); //➞ "Wine A"

chosenWine([]); //➞ null

function chosenWine(obj) {
  let priceArr = [];
  let wineName = "";
  for (let val of obj) {
    priceArr.push(val.price);
  }
  priceArr.sort((a, b) => {
    return a - b;
  });
  if (priceArr.length == 0) {
    wineName = null;
  } else if (priceArr.length - 1 == 0) {
    wineName = obj[priceArr.length - 1].name;
  } else {
    for (let val of obj) {
      if (val.price == priceArr[priceArr.length - 2]) {
        wineName = val.name;
      }
    }
  }
  console.log(wineName);
}
