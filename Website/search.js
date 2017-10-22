var userOneDB = require('./userOne.json');
var userTwoDB = require('./userTwo.json');
var MAX_ATTRIBUTE_SCORE = 4;
var ALLOWED_VARIANCE = 70;
var HUNDRED_PERCENT = 100;
var findSamePartner = true;

arr = []
userOneInfo = [];

// if user checks a check box, get the name/attribute of the check box
//and stores it to an array
function submit(){
	var arr = document.getElementsByName("type");
	arr.forEach(function(elem){
		if (elem.checked) {
			userOneInfo.push(elem);     
		}
	})
	console.log("called submit()");
}


function findDif() {
	findSimilarPartner = false;
}

function findSame() {
	findSimilarPartner = true;
}

function report(percentage) {
	if(findSimilarPartner === false) {
		percentage = algorithm(userOneInfo, MAX_ATTRIBUTE_SCORE);	
	}
	if(findSimilarPartner === true) {
		percentage = HUNDRED_PERCENT - algorithm(userOneInfo, MAX_ATTRIBUTE_SCORE);
	}

	var matchRating = "";
	if(percentage >= ALLOWED_VARIANCE) {
		matchRating += "You match ";
	}
	else {
		matchRating += "You don't match ";
	}
	matchRating += "with user two based on your preferences by " + percentage + " percent!";
	document.write(matchRating);
}

// Returns the difference percentage for user one and user two
function algorithm(userOneInfo, maxAttributeScore, arr) {
	var numOfAttributes = userOneInfo.length;
	var difference = 0;

	// loop through arr to search for the attributes chosen by the user
	for(var i = 0; i < arr.length; i++) {
		// search through list of attributes
		for(var j = 0; j < numOfAttributes; j++) {
			// find attribute chosen by user
			var attribute = userOneInfo[i];
			if(attribute.toString() == arr[i]) {
				var score1 = userOneDB[attribute.toString()].summary.score;
				var score2 = userTwoDB[attribute.toString()].summary.score;
			// calculate the difference
			difference += abs(score1 - score2);
			}
	
		}
	}

	var differencePercentage = difference/(numOfAttributes * maxAttributeScore) * HUNDRED_PERCENT;
	return differencePercentage;
}









