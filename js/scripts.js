var calcBmi = function(weight, height) {
	return weight / Math.pow(height, 2);
};

var userWeight = parseInt(prompt("What is your weight in good ole American lbs?")) * 0.45;
var userHeight = parseInt(prompt("What is your height in inches?")) * 0.025;

alert("here's your stuff: " + calcBmi(userWeight, userHeight));
