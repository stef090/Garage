
function findElement(arr, func) {
  var res = arr.filter(func);
  return res[0];
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });
