histogram([1, 3, 4], "#"); //➞ "#\n###\n####"
// #
// ###
// ####
histogram([6, 2, 15, 3], "="); //➞ "======\n==\n===============\n==="
// ======
// ==
// ===============
// ===
histogram([1, 10], "+"); //➞ "+\n++++++++++"
// +
// ++++++++++

function histogram(arr, char) {
  let histoGraph = "";
  arr.map((ele) => {
    if (ele.toString().length > 1) {
      histoGraph += ele + "||" + char.repeat(ele) + "\n";
    } else {
      histoGraph += ele + " ||" + char.repeat(ele) + "\n";
    }
  });
  console.log(histoGraph);
  return histoGraph;
}
