const areaOrPerimeter = function(l , w) {
   // Return your answer
   return l === w ? l * w : (l + w) * 2;
 };
 

 // new code 
 
function updateLight(current) {

  switch (current) {
  case "green":
    return "yellow";
    break;
  case "yellow":
    return "red";
    break;
  case "red":
    return "green"
    break;
  default:
    return ""
  }

}

 // new code 
 
function simpleMultiplication(number) {
   return number % 2 === 0 ? number * 8 : number * 9;
 }
