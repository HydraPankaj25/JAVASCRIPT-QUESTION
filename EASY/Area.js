//Claculate the area of all the function which takes shape and return area

// *****************************************SOLUTIONI*****************************************

//is empty fucntion
function isEmpty(value) {
  return value === null || value === undefined || value == "";
}

//area function
const area = (shape = null, width = 0, height = 0, radius = 0, side = 0) => {
  //   checking the type of user input
  if (typeof shape !== "string") {
    console.log("Shape must be a string.");
    return false;
  }

  if (
    typeof width !== "number" ||
    typeof height !== "number" ||
    typeof radius !== "number" ||
    typeof side !== "number"
  ) {
    return "Width, height, radius and side must be numbers.";
  }

  switch (shape.toLowerCase()) {
    case "circle":
      if (!isEmpty(radius))
        return Math.round(Math.PI * radius * radius * 100) / 100;
      else {
        return "Please proivide radius";
      }
      break;

    case "semicircle":
      if (!isEmpty(radius))
        return Math.round(Math.PI * radius * radius * 0.5 * 100) / 100;
      else {
        return "Please proivide radius";
      }
      break;

    case "rectangle":
      if (!isEmpty(width) && !isEmpty(height))
        return Math.round(width * height * 100) / 100;
      else {
        return "Please proivide Height and Width both";
      }
      break;

    case "square":
      if (!isEmpty(side)) return Math.round(side * side * 100) / 100;
      else {
        return "Please proivide Side";
      }
      break;

    case "triangle":
      if (!isEmpty(width) && !isEmpty(height))
        return Math.round(0.5 * width * height * 100) / 100;
      else {
        return "Please proivide Height and Width both";
      }
      break;

    case "cylinder":
      if (!isEmpty(radius) && !isEmpty(height))
        return Math.round(Math.PI * radius * radius * height * 100) / 100;
      else {
        return "Please proivide Height and Radius both";
      }
      break;

    case "semicylinder":
      if (!isEmpty(radius) && !isEmpty(height))
        return (
          Math.round(Math.PI * radius * radius * height * 0.5 * 100) / 100
        );
      else {
        return "Please proivide Height and Radius both";
      }
      break;

    case "cone":
      if (!isEmpty(radius) && !isEmpty(height))
        return (
          Math.round(
            Math.PI *
              radius *
              (radius + Math.sqrt(height * height + radius * radius)) *
              100
          ) / 100
        );
      else {
        return "Please proivide Height and Radius both";
      }
      break;

    case "sphere":
      if (!isEmpty(radius))
        return Math.round(4 * Math.PI * radius * radius * 100) / 100;
      else {
        return "Please proivide radius";
      }
      break;

    case "hemisphere":
      if (!isEmpty(radius))
        return Math.round(2 * Math.PI * radius * radius * 100) / 100;
      else {
        return "Please proivide radius";
      }
      break;

    default:
      return "Please Enter Valid Shape";
      break;
  }
};

console.log(area("Circle", 0, 0, 2));
console.log(area("rectangle", 12, 10));
console.log(area("square", 0, 0, 0, 12.22));
console.log(area("triangle", 12, 10));
console.log(area("cYlinder", 0, 10, 2));
console.log(area("CONE", 0, 10, 2));
console.log(area("hemiSphere", 0, 0, 2));
