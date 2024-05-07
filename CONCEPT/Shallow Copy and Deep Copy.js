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
obj1.a = 20;
console.log(obj);

//this is called deep copy of a varible
let obj2 = {...newObj};
obj2.c.x = 30;
console.log(newObj);

let x1 = x;
console.log(x1);