getTotalPrice([
  { product: "Milk", quantity: 1, price: 1.5 },
  { product: "Eggs", quantity: 12, price: 0.1 },
  { product: "Bread", quantity: 2, price: 1.6 },
  { product: "Cheese", quantity: 1, price: 4.5 },
]); //➞ 10.4

function getTotalPrice(obj) {
  let total = 0;
  for (let ele of obj) {
    total += ele.quantity * ele.price;
  }
  console.log(total);
}
