// Write the "square"-function here
var square = function (a) {
   return a * a;
}

function getAverage(marks){
   //TODO : calculate the downward rounded average of the marks array
   return Math.trunc(marks.reduce((sum, value) => sum + value, 0) / marks.length);
 } 
 