var userOneDB = require('./userOne.json');
var userTwoDB = require('./userTwo.json');
var MAX_ATTRIBUTE_SCORE = 4;
var difference = 0;


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


function findDif(wantOpposite){
	var difference;

	if ( wantOpposite == true) {
		difference = algorithm(userOneInfo, MAX_ATTRIBUTE_SCORE);	
	 // returns 0 if "opposite" enough, returns 1 if not
	console.log("called findDif()");

	return difference;
		//console.log("you match/dont match with user two based on your preferences (A,B,C) by x percent!");
}
function findSame() {
	difference = 100 - algorithm(userOneInfo, userTwoInfo, MAX_ATTRIBUTE_SCORE);
	return difference;
}
// Returns the difference percentage for user one and user two
function algorithm(userOneInfo, maxAttributeScore) {
	var numOfAttributes = userOneInfo.length;
	var difference = 0;

	//for each attribute
	for(var i = 0; i < numOfAttributes; i++) {
		// get the score for the attribute for userOne
		var attribute = userOneInfo[i];
		var score1 = userOneDB[attribute.toString()].summary.score;
		var score2 = userTwoDB[attribute.toString()].summary.score;

		// calculate the difference
		difference += abs(score1 - score2);

	}

	var differencePercentage = (double)difference/(numOfAttributes * maxAttributeScore) * 100;
	return differencePercentage;
}









