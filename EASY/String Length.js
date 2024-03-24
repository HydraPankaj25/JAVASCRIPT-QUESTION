// String Length: Write a function called getStringLength that takes a string as an argument and returns its length.

// *****************************************SOLUTIONI*****************************************

const str =
  "this is the sampmle=-string,format to jsut count the string length;";

//this funtion basically remove the special charaters from the text
function removeSpecialChars(str) {
  const text = str.replace(/[,.?"'={}\s-;]/g, "");
  return text;
}

console.log(removeSpecialChars(str).length);
