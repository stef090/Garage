
function pairElement(str) {
  var pairing = {
    "A": "T",
    "T": "A",
    "C": "G",
    "G": "C"
  };
  var str_split = str.split("");
  var output = []
  for(var element in str_split)
  {
    var pair = []
    pair.push(str_split[element]);
    pair.push(pairing[str_split[element]]);
    output.push(pair);

  }
  return output;
}
pairElement("GCG");
