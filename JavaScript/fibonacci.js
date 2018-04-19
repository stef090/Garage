function fibonacci(num){
  var a = 1, b = 0, temp, sum=0;

  while (a <= num){
    temp = a;
    a = a + b;
    b = temp;
    if(b%2)
    {
      sum += b;
    }
  }

  return sum;
}
