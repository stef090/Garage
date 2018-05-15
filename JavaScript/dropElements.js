function dropElements(arr, func) {
  // Drop them elements.
  for(var index in arr)
  {
    if(func(arr[index]))
    {
      return arr.slice(index);
    }
  }
  return [];
}
