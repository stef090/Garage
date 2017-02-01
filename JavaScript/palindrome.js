function palindrome(str) {
  // Good luck!
  re = /[^0-9a-zA-Z]/g;
  var newStr = str.replace(re, '');
  newStr = newStr.toLowerCase();
  var sArray = newStr.split("");
  var revArray = newStr.split("").reverse();
  var palindrome = true;
  for(i=0;i<sArray.length-1;i++){
    if(sArray[i] != revArray[i]){
      palindrome = false;
      break;
    }
  }
  return palindrome;
}
