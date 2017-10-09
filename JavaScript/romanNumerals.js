romanNumerals = {1:"I",4:"IV",5:"V",9:"IX",10:"X",40:"XL",50:"L",90:"XC",100:"C",400:"CD",500:"D",900:"CM",1000:"M"};
romanDigits = [1000,900,500,400,100,90,50,40,10,9,5,4,1];

function convertToRoman(num) {
 romanNumber = [];
 while(num>0){
  next = romanDigits.find(function(el){
  return el <= num;
  });
  numeral = romanNumerals[next];
  console.log(numeral);
  romanNumber.push(numeral);
  num -= next;
}
 return romanNumber.join("");
}
