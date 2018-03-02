function getIndexToIns(arr, num) {
  arr.push(num);
  arr.sort(function compare(a,b){return a - b;});
  return arr.indexOf(num);
}
