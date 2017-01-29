
function reverseString(str) {
  var stringArray = str.split("");
  console.log(stringArray);
  stringArray.reverse();
  str = stringArray.join("");
  return str;
}