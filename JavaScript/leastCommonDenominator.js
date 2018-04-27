function smallestCommons(arr) {
  divisors = {}
  range = generateRange(arr
  range.forEach(function(element)
  {
    console.log(element);
    divisors[element] = element;
  }
)
  console.log(divisors);
  return arr;
}

function generateRange(arr)
{
  range=[]
  smaller=arr[0];
  greater=arr[1];
  if (arr[1]<arr[0])
  {
    greater=arr[0];
    smaller=arr[1];
  }
  for(i=smaller;i<=greater;i++)
  {
    range.push(i);
  }
  return range;
}


smallestCommons([1,5]);
