console.log(reverseOdd("Bananas")); //➞ "sananaB"

console.log(reverseOdd("One two three four")); //➞ "enO owt eerht four"

console.log(reverseOdd("Make sure uoy only esrever sdrow of ddo length"));


function reverseOdd(text){
    return text.split(" ").map((ele)=>{
        if(ele.length%2 !== 0){
            return ele.split("").reverse().join("");
        }
        else{
            return ele;
        }
    }).join(" ");
}