function keysAndValues(obj) {
  let keys = [];
  let vals = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      keys.push(key);
      vals.push(obj[key]);
    }
  }
  return [keys, vals];
}

console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }));
console.log(keysAndValues({ key1: true, key2: false, key3: undefined }));
