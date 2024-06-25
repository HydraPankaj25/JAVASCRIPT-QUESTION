let obj = {
  a: 10,
  b: 20,
};
let newObj = {
  a: 10,
  b: 20,
  c: {
    x: 10,
    y: 20,
  },
};

let x = 10;

//this is called shallow copy of a varibale
let obj1 = {obj};
// let obj1 = {...obj}; ----------------here is another way
// let obj1 = obj;  -------------------here is the problem
obj1.a = 20;
console.log(obj);




// -----------------------------------------LODASH LIBRARY WILL WORK HERE 
//this is called deep copy of a varible
// ------------HERE Function AND DATE WILL NOT WORK--------------
let obj2 = JSON.parse(JSON.stringify(obj)); //here we will resolve because if we make the solution like shallow one then it wil give error
obj2.c.x = 30;
console.log(newObj);

let x1 = x;
console.log(x1);