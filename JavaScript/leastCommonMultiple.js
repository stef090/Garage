function smallestCommons(arr) {
  var divisors = {};
  var repetitions = {};
  var range = generateRange(arr);
  range.forEach(function(element)
    {
      var division = []
      if(element==1)
      {
        division.push(element);
        divisors[element] = division;
      }
      else
      {
        // Start with 2 because it is the smallest prime number which can divide another number;
        // Take the original value for writing to divisor dictionary
        // Count repetitions of each divisor and record to repetitions by divisor.
        // If there is a higher repetition then overwrite the current number.
        var divisor=2;
        var original_value = element;
        var repetition = 1;
        while (element>1)
        {
          if (element%divisor==0)
          {
              division.push(divisor);
              element /= divisor;
              if (repetitions[divisor] && repetition > repetitions[divisor])
                {
                  repetitions[divisor] = repetition;
                }
              else if (!repetitions[divisor])
              {
                repetitions[divisor] = repetition;
              }
              repetition++;
          }
          else
          {
            divisor++;
            repetition = 1;
          }
        }
        divisors[original_value] = division;
      }
    }
  );
  factors = Object.keys(repetitions).map(function(item){
    return parseInt(item, 10);
  });
  factor_repetitions = Object.values(repetitions);
  return multiplyFactors(factors, factor_repetitions);
}

function generateRange(arr)
{
  var range=[];
  var smaller=arr[0];
  var greater=arr[1];
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

function multiplyFactors(factors, repetitions)
{
  var result = 1;
  for(var i=0;i<factors.length;i++)
  {
    result*=factors[i]**repetitions[i];
  }
  console.log(result);
  return result;
}


smallestCommons([23,18]);
