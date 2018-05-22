function checkInteger(value)
{
  return Number.isInteger(value);
}

function addTogether() {
  var args = Array.from(arguments);
  if(args.length>1)
  {
    if (!args.every(checkInteger))
    {
      return undefined;
    }
    else
    {
      if(checkInteger(args[0]))
      {
        return args.reduce(function(acc, val) { return acc + val; });
      }
    }
  }
  else
  {
    if(checkInteger(args[0]))
    {
    return function add(y)
    {
       var x = args[0];
       if(!checkInteger(x)||!checkInteger(y))
       {
          return undefined;
       }
       else
       {
         return x + y;
       }
    };
  }
  else
  {
    return undefined;
  }
  }
}

console.log(addTogether("http://bit.ly/IqT6zt"));
