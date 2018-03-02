function translatePigLatin(str) {
  var wovels = ['a','e','i','o','u'];

  //If the first character of the string is a wovel, append "way" to the end of the string.
  if(wovels.indexOf(str[0])>-1){
    str = str + "way";
  }
  else{
    var str_split = str.split("");
    var wovel_index = 0;
    for(var letter in str_split)
    {
      if(wovels.indexOf(str_split[letter])>-1){
        wovel_index = letter;
        break;
      }
    }
    str = str.slice(wovel_index) + str.substring(0,wovel_index) + "ay";
  }
  return str;
}

translatePigLatin("glove");
