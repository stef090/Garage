function replaceHTML(match, offset, string)
{
  var mapping = {"<":"&lt;",
                 ">":"&gt;",
                 "\"":"&quot;",
                 "\'":"&apos;",
                 "&":"&amp;"
               };

  return mapping[match];


}

function convertHTML(str) {
  // &colon;&rpar;
  var regex = new RegExp('[\"\'\&\<\>]',['g']);
  console.log(regex);
  var newString = str.replace(regex, replaceHTML);
  console.log(newString);
  return newString;
}

convertHTML("Hamburgers < Pizza < Tacos");
