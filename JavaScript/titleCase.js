function titleCase(str) {
  str = str.toLowerCase();
  strArray = str.split(" ");
  strNewArray = [];
  for(i=0;i<strArray.length;i++){
    strNewArray.push(strArray[i][0].toUpperCase() + strArray[i].slice(1));
  }
  return strNewArray.join(" ");
}
