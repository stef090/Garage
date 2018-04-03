function uniteUnique(arr) {
  var args = Array.from(arguments)
  var flatArray = args.reduce(
    function(accumulator,current)
    {
      return accumulator.concat(current);
    });
  var flat_set = new Set(flatArray);
  return Array.from(flat_set);
}