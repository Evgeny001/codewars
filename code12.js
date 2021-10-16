function isPalindrome(x) {
   if (x.length < 2) return true;
   for (let i = 0; i < x.length; i++) {
     if (x[i].toLowerCase() != x[x.length - (i + 1)].toLowerCase()) {
       return false;
     }
   }
   return true;
 }

 //new code
 
 function toFreud(string) {
   return string.split(" ").map(word => word.trim() ? "sex" : "").join(" ");
 }