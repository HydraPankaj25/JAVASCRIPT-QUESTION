// Write a function titleCase that converts a sentence to title case (the first letter of each word capitalized).

function titleCase(str) {
  if (typeof str === "string") {
    const data = str.split(" ").map((data) => {
      return data.charAt(0).toLocaleUpperCase() + data.slice(1).toLowerCase();
    }).join(" ");
    console.log(data);
  } else {
    console.log("Please enter a valid sentance");
    return false;
  }
}

titleCase("this is sample string");
