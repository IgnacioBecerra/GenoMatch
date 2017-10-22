var MAX_ATTRIBUTE_SCORE = 4;
var ALLOWED_VARIANCE = 70;
var HUNDRED_PERCENT = 100;
var findSimilarPartner = false;
var percentage = 0;

userOneInfo = [];


function findDif() {
	findSimilarPartner = false;
	localStorage.setItem("findSimilarPartner", findSimilarPartner);
}

function findSame() {
	findSimilarPartner = true;
	localStorage.setItem("findSimilarPartner", findSimilarPartner);
}


function report() {

	var arr = document.getElementsByName("type");

	arr.forEach(function(elem){
		if (elem.checked) {
			userOneInfo.push(elem);     
		}
	})
	if(localStorage.getItem("findSimilarPartner") == false) {
		percentage = algorithm(userOneInfo, MAX_ATTRIBUTE_SCORE, arr);	
	}
	else {
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

		var score1 = userOne[attribute.value].summary.score;
		var score2 = userTwo[attribute.value].summary.score;

		console.log(score1, score2);
		// calculate the difference
		difference += Math.abs(score1 - score2);

	}
	

	var differencePercentage = difference/(numOfAttributes * maxAttributeScore) * HUNDRED_PERCENT;
	differencePercentage = parseFloat(Math.round(differencePercentage * 100) / 100).toFixed(2);
	return differencePercentage;
}

