function isPrime(num)
{
  if (num==1)
    return false;
  else if (num<=3)
    return true;
  else if (num%2==0)
    return false;

  root = Math.ceil(Math.sqrt(num));
  for(var i=3;i<=root;i++)
   {
    if(num%i==0)
    {
      return false;
    }
   }
  return true;
}

function getSum(total, num) {
    return total + num;
}

function sumPrimes(num)
{
  primes = []
  for(var n=1;n<=num;n++)
  {
    if (isPrime(n))
    {
      primes.push(n);
    }
  }
  sum = primes.reduce(getSum);
  console.log(sum);
  return sum;
}
