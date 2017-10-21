var userOneDB = require('./userOne.json');
var userTwoDB = require('./userTwo.json');



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

function findDif(mode){
var MAX_ATTRIBUTE_SCORE = 4;
var difference;

if ( mode == "opposite") {
	difference = algorithm(userOneInfo, userTwoInfo);	
}  // returns 1 if "opposite" enough, returns 0 if not

if ( mode == "similar") {
	difference = 100 - algorithm(userOneInfo, userTwoInfo);
}  // returns 0 if "opposite" enough, returns 1 if not

return difference;
	console.log("you match/dont match with user two based on your preferences (A,B,C) by x percent!");
}

// Returns the difference percentage for user one and user two
function algorithm(userOneInfo, userTwoInfo) {
	var numOfAttributes = userOneInfo.length;
	var difference = 0;
	//for each attribute
	for(var i = 0; i < numOfAttributes; i++) {
		// get the score for the attribute for userOne
		var attribute = userOneInfo[i];
		var scoreTrait = $.grep(attribute, function(e){ return e.id == id; });
		score1 = scoreTrait[0].foo; 

		// get the score for the attribute for userTwo
		attribute = userTwoInfo[i];
		scoreTrait = $.grep(attribute, function(e){ return e.id == id; });
		score2 = scoreTrait[0].foo;

		// calculate the difference
		difference += abs(score1 - score2);
	}
	var differencePercentage = (double)difference/(numOfAttributes * MAX_ATTRIBUTE_SCORE) * 100;
	return differencePercentage;
}









