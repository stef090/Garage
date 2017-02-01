function largestOfFour(arr){
  var arrLargest = [];
  for(i=0;i<arr.length;i++){
    largestNum = 0;
    for(j=0;j<arr[i].length;j++)
      if(arr[i][j] > largestNum){
        largestNum = arr[i][j];
        }
    arrLargest.push(largestNum);
  
  }
  return arrLargest;
}
