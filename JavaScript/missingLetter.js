
function missingLetter(str) {
  var charCode=undefined;
  for(var i=0; i<str.length; i++){
    if((str.charCodeAt(i+1) - str.charCodeAt(i))>1)
    {
      charCode = str.charCodeAt(i) + 1;
    }
  }
  if(charCode==undefined){
    return undefined;
  }
  return String.fromCharCode(charCode);
}

missingLetter("bcd");
