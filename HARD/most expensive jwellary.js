mostExpensive({
  "Diamond Earrings": 980,
  "Gold Watch": 250,
  "Pearl Necklace": 4650,
}); //➞  "The most expensive one is the Pearl Necklace"

mostExpensive({
  "Silver Bracelet": 280,
  "Gemstone Earrings": 180,
  "Diamond Ring": 3500,
}); //➞ "The most expensive one is the Diamond Ring"

function mostExpensive(obj) {
  console.log();
  let priceArr = Object.keys(obj).map((key) => obj[key]);
  let costiest = Math.max(...priceArr);
  let itemName = Object.keys(obj).find((key) => obj[key] == costiest);
  console.log(`The most expensive one is the ${itemName}`);
}
