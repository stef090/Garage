function rot13(str) {
  var decodedString = [];
  for(i=0;i<str.length;i++){
    if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 77){
      decodedString.push(String.fromCharCode(str.charCodeAt(i)+13));
    }
    else if(str.charCodeAt(i) >= 78 && str.charCodeAt(i) <= 90){
      decodedString.push(String.fromCharCode(str.charCodeAt(i)-13));
    }
    else{
      decodedString.push(str[i]);
    }
  }
  
  return decodedString.join("");
}
