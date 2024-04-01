console.log(alphNum("XYZ")); //➞ "23 24 25"

console.log(alphNum("ABCDEF")); //➞ "0 1 2 3 4 5"

console.log(alphNum("JAVASCRIPT")); //➞ "9 0 21 0 18 2 17 8 15 19"

function alphNum(text){
    return text.toUpperCase().split("").map((ele,ind)=>{
        return (ele.charCodeAt(0)-65);
    });
}