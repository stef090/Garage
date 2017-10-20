//1. The function should iterate over an array of objects and return an array of objects with corresponding 'source' key and value.

function whatIsInAName(collection, source) {
  // What's in a name?

  var arr = [];
  // Only change code below this line
  //
  var keys = Object.keys(source)
  arr = collection.filter(function(object){
    return keys.every(function(key){

      return object.hasOwnProperty(key) && object[key] === source[key];
    })
  })

  // Only change code above this line
  return arr;
}

whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 })
