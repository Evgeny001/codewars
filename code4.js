function first(arr, n) {
   // return arr;
   return arr.slice(0, n == undefined ? 1 : n);
}