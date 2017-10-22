var userOneDB = require('./userOne.json');
var userTwoDB = require('./userTwo.json');
var MAX_ATTRIBUTE_SCORE = 4;
var ALLOWED_VARIANCE = 70;
var HUNDRED_PERCENT = 100;


/**

After button("upload") is clicked:



get what attributes the user chooses:  e.g. anger, depression,
get what mode user use : e.g. "opposite" "similar"

var userOneInfo = userOneDB.anger.summary.score;
var userTwoInfo = userTwoDB.anger.summary.score;
(userOneInfo/userTwoInfo should be lists containing values of these attributes)

x% = abs(100((traitSum/maxSum)-opposite)), where opposite is either a 0 or 1

console.log(userTwoDB.conscientiousness.summary.score)
*/

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
}


function findDif() {
	var percentage = algorithm(userOneInfo, MAX_ATTRIBUTE_SCORE);	
	document.write("called findDif()");
	report(percentage);

function findSame() {
	var percentage = HUNDRED_PERCENT - algorithm(userOneInfo, MAX_ATTRIBUTE_SCORE);
	document.write("called findSame()");
	report(percentage);
}

function report(percentage) {
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
		for(var i = 0; i < numOfAttributes; i++) {
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

	var differencePercentage = (double)difference/(numOfAttributes * maxAttributeScore) * HUNDRED_PERCENT;
	return differencePercentage;
}









