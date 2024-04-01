// Try finding your ancestors and offspring with code.

// Create a function that takes a number x and a character y ("m" for male, "f" for female), and returns the name of an ancestor (m/f) or descendant (m/f).

// If the number is negative, return the related ancestor.
// If positive, return the related descendant.
// You are generation 0. In the case of 0 (male or female), return "me!".
// Examples
console.log(generation(2, "f")); //➞ "granddaughter"

console.log(generation(-3, "m")); //➞ "great grandfather"

console.log(generation(1, "f")); //➞ "daughter"

function generation(gen, gender) {
  const maleGenChart = {
    "-3": "greatGrandFather",
    "-2": "grandFather",
    "-1": "father",
    0: "me!",
    1: "son",
    2: "grandSon",
    3: "greatGrandSon",
  };
  const femaleGenChart = {
    "-3": "greatGrandMother",
    "-2": "grandMother",
    "-1": "mother",
    0: "me!",
    1: "daughter",
    2: "grandDaughter",
    3: "greatGrandDaughter",
  };

  if (maleGenChart[gen.toString()] && gender == "m") {
    return maleGenChart[gen.toString()];
  } else if (femaleGenChart[gen.toString()] && gender == "f") {
    return femaleGenChart[gen.toString()];
  } else {
    return false;
  }
}
