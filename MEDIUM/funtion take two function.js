// Your function will be passed two functions, f and g, that don't take any parameters. Your function has to call them, and return a string which indicates which function returned the larger number.

// If f returns the larger number, return the string f.
// If g returns the larger number, return the string g.
// If the functions return the same number, return the string neither.
// Examples
// whichIsLarger(() => 5, () => 10) ➞ "g"

// whichIsLarger(() => 25,  () => 25) ➞ "neither"

// whichIsLarger(() => 505050, () => 5050) ➞ "f"


// *************************SOLUTION*************************************

function whichIsLarger(f, g) {
	let a = f();
	let b = g();
	if(a==b){
		return "neither";
	}
	else if(a>b){
		return "f";
	}
	else{
		return "g";
	}
}