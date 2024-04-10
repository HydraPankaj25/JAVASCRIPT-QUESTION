uncensor("Wh*r* d*d my v*w*ls g*?", "eeioeo"); //➞ "Where did my vowels go?"

uncensor("abcd", ""); //➞ "abcd"

uncensor("*PP*RC*S*", "UEAE"); //➞ "UPPERCASE"

function uncensor(str, rep) {
  let count = 0;
  let newStr = str
    .split(" ")
    .map((ele) => {
      return ele
        .split("")
        .map((ch, ind) => {
          if (ch === "*") {
            ele = ele.substring(0, ind) + rep[count] + ele.substring(ind + 1);
            count++;
          }
          return ele[ind];
        })
        .join("");
    })
    .join(" ");

  console.log(newStr);
  return newStr;
}

// function uncensor(str, rep) {
//   let count = 0;
//   let newStr = str.replace(/\*/g, rep[count++]);
//   console.log(newStr);
//   return newStr;
// }