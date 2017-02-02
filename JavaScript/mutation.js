function mutation(arr) {
  var searchString = arr[0].toLowerCase();
  var searchArray = arr[1].toLowerCase().split("");
  for(i=0; i<searchArray.length; i++){
    if(searchString.indexOf(searchArray[i]) == -1){
      return false;
    }
  }
  return true;
}
