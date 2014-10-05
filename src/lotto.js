var LUCKY_NUMBER = 7;
var MAX_WHITE_BALL = 59;
var MAX_POWER_BALL = 39;
var calculateResult = function (whiteBalls, powerBall) {
  var index;
  // lottery ball numbers are always shown sorted
  whiteBalls.sort();
  for(index = 0; index < 5; index++){
    if((whiteBalls[index] < 1) || (whiteBalls[index] > MAX_WHITE_BALL)) {
      return -1;
    }
  }
  if((powerBall < 1) || (powerBall > MAX_POWER_BALL)) {
    return -1;
  }
  return 0;
};
var lottery = function () {
  var powerBall, whiteBalls, index, result, favorite;
  if(process.argv.length !== 9){
    console.log("Error. Usage: node " + process.argv[1] + " (5 white balls) power_ball");
    return -1;
  }
  favorite = process.argv[2] === '-favorite' ? 1 : 0; // This should be a 0 or 1.
  powerBall = Number(process.argv[7]);  // The power ball is always the last one given
  whiteBalls = [];
  for(index = 0; index < 5; index++){
    whiteBalls[index] = parseInt(process.argv[3+index]);
  }

  result = calculateResult(whiteBalls, powerBall);

  // calculate result can return -1 if the ball numbers
  // are out of range
  if(result < 0) {
    console.log('Invalid arguments.');
    return -1;
  }

  if(powerBall === LUCKY_NUMBER){
    result = result * 2;
  }

  if(favorite) {
    result = result * 2;
  }
  console.log( result + ' percent chance of winning.');
  return 0;
};
lottery();
