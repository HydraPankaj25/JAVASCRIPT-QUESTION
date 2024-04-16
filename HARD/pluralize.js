pluralize(["cow", "pig", "cow", "cow"]); //➞ ["cows", "pig"]

pluralize(["table", "table", "table"]); //➞ ["tables"]

pluralize(["chair", "pencil", "arm"]); //➞ ["chair", "pencil", "arm"]


function pluralize(arr) {
  let newArr = [];
  arr.forEach((element, ind) => {
    if (arr.indexOf(element) !== ind) {
      return;
    }
    const count = arr.filter((item) => item === element).length;
    if (count > 1) {
      newArr.push(element + "s");
    } else {
      newArr.push(element);
    }
  });

  console.log(newArr);
  return newArr;
}
