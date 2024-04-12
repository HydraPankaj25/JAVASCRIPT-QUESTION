countNumberOfOccurrences({
  a: "moron",
  b: "scumbag",
  c: "moron",
  d: "idiot",
  e: "idiot",
}); //➞ { moron: 2, scumbag: 1, idiot: 2 }

countNumberOfOccurrences({
  a: "moron",
  b: "moron",
  c: "moron",
}); //➞ { moron: 3 }

countNumberOfOccurrences({
  a: "idiot",
  b: "scumbag",
}); //➞ { idiot: 1, scumbag: 1 }

function countNumberOfOccurrences(obj) {
  let newObj = {};
  for (let key in obj) {
    if (newObj.hasOwnProperty(obj[key])) {
      newObj[obj[key]]++;
    } else {
      newObj[obj[key]] = 1;
    }
  }

  console.log(newObj);
  return newObj;
}
