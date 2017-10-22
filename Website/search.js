	//var userOneDB = require('./userOne.json');
//var userTwoDB = require('./userTwo.json');
var MAX_ATTRIBUTE_SCORE = 4;
var ALLOWED_VARIANCE = 70;
var HUNDRED_PERCENT = 100;
var findSimilarPartner = true;

userOneInfo = [];


function findDif() {
	findSimilarPartner = false;
}

function findSame() {
	findSimilarPartner = true;
}


function report() {

	var arr = document.getElementsByName("type");

	arr.forEach(function(elem){
	if (elem.checked) {
		userOneInfo.push(elem);     
	}
	})

	var percentage = 0;

	if(findSimilarPartner === false) {
		percentage = algorithm(userOneInfo, MAX_ATTRIBUTE_SCORE, arr);	
	}
	if(findSimilarPartner === true) {
		percentage = HUNDRED_PERCENT - algorithm(userOneInfo, MAX_ATTRIBUTE_SCORE, arr);
	}

	var matchRating = "";
	if(percentage >= ALLOWED_VARIANCE) {
		matchRating += "You match ";
	}
	else {
		matchRating += "You don't match ";
	}
	matchRating += "with user two based on your preferences by "
	matchRating += percentage;
	matchRating += " percent!";
	document.write(matchRating);
}

// Returns the difference percentage for user one and user two
function algorithm(userOneInfo, maxAttributeScore, arr) {

	var numOfAttributes = userOneInfo.length;
	var difference = 0;

	// loop through arr to search for the attributes chosen by the user
	for(var i = 0; i < numOfAttributes; i++) {
		
		
		var attribute = userOneInfo[i];

		console.log(attribute);
		console.log(userOne[attribute.value]);
		var score1 = userOne[attribute.value].summary.score;
		var score2 = userTwo[attribute.value].summary.score;

		console.log(score1, score2);
		// calculate the difference
		difference += Math.abs(score1 - score2);

	}
	

	var differencePercentage = difference/(numOfAttributes * maxAttributeScore) * HUNDRED_PERCENT;
	return differencePercentage;
}









