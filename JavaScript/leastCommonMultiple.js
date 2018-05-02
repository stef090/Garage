function smallestCommons(arr) {
  divisors = {};
  range = generateRange(arr);
  range.forEach(function(element)
  {
    division = []
    if(element==1)
    {
      division.push(element);
      divisors[element] = division;
    }
    else
    {
      // Start with 2 because it is the smallest prime number which can divide another number;
      divisor=2;
      original_value = element;
      while (element>1)
      {
        if (element%divisor==0)
        {
            division.push(divisor);
            element /= divisor;
        }
        else
        {
          divisor++;
        }
      }
      divisors[original_value] = division;
    }
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
