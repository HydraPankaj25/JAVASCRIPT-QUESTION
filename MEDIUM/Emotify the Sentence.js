let emoji = {
  smile: ":D",
  grin: ":)",
  sad: ":(",
  mad: ":P",
};

function emotify(text) {
  let arr = text.split(" ");
  let lastWord = arr.slice(-1)[0];
  let expression = emoji[lastWord];
  arr[arr.length - 1] = expression;
  console.log(arr.join(" "));
}

emotify("Make me smile");

emotify("Make me grin");

emotify("Make me sad");
