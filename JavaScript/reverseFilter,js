function destroyer(arr) {
  // Remove all the values
  var args = Array.from(arguments);
  var searchArray = args[0];
  var filterArray = [];
  for(i=1;i<args.length;i++){
    filterArray.push(args[i]);
  }
  var filteredArray = searchArray.filter(function(e){return this.indexOf(e) < 0;}, filterArray);
  return filteredArray;
}
