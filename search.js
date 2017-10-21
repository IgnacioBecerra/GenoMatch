var userOneDB = require('./userOne.json');
var userTwoDB = require('./userTwo.json');



/**

After button("upload") is clicked:



get what attributes the user chooses:  e.g. anger, depression,
get what mode user use : e.g. "opposite" "similar"

var userOneInfo = userOneDB.anger.summary.score;
var userTwoInfo = userTwoDB.anger.summary.score;
(userOneInfo/userTwoInfo should be lists containing values of these attributes)


if ( mode = "opposite") {
	algorithm(userOneInfo, userTwoInfo)...
	// calculates each corresponding values, 
}  // returns 1 if "opposite" enough, returns 0 if not


if ( mode = "similar") {
	algorithm(userOneInfo, userTwoInfo)...
	// calculates each corresponding values, 
}  // returns 0 if "opposite" enough, returns 1 if not



	console.log("you match/dont match with user two based on your preferences (A,B,C) by x percent!");

*/



console.log(userTwoDB.conscientiousness.summary.score)






