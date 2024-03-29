// This challenge will help you interpret mathematical relationships both algebraically and geometrically.

// Matchstick Houses, Steps 1, 2 and 3

// Create a function that takes a number (step) as an argument and returns the number of matchsticks in that step. See step 1, 2 and 3 in the image above.


function matchHouses(step) {
	matchstick=0;
	if(step <= 0){
		return 0;
	}
	else if(step == 1){
		matchstick = 6;
	}
	else{
		matchstick = 6 + ((step-1)*5)
	}
	return matchstick;
}