function sevenBoom(arr) {
  let bom = "there is no 7 in the array";
  arr.forEach((element) => {
    if (element.toString().split("").includes("7")) {
      bom = "Boom!";
    }
  });
  console.log(bom);
}
sevenBoom([1, 2, 3, 4, 5, 6, 7]);
sevenBoom([8, 6, 33, 100]);
sevenBoom([2, 55, 60, 97, 86]);
