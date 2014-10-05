var calculateResult = function (whiteBalls, powerBall) {
  var index;
  for(index = 0; index < 5; index++){
    if((whiteBalls[index] < 1) || (whiteBalls[index] > 59)) {
      return -1;
    }
  }
  if((powerBall < 1) || (powerBall > 39)) {
    return -1;
  }
  return 0;
};
var lottery = function () {
  var powerBall, whiteBalls, index, result;
  if(process.argv.length !== 8){
    console.log("Error. Usage: node " + process.argv[1] + " (5 white balls) power_ball");
    return -1;
  }
  powerBall = parseInt(process.argv[7], 10);
  whiteBalls = [];
  for(index = 0; index < 5; index++){
    whiteBalls[index] = parseInt(process.argv[2+index]);
  }
  result = calculateResult(whiteBalls, powerBall);
  if(result < 0) {
    console.log('Invalid arguments.');
    return -1;
  }
  console.log( result + ' percent chance of winning.');
  return 0;
};
lottery();
