function truthCheck(collection, pre) {
  truth = true;

  for(var index in collection)
  {
    if (pre in collection[index])
    {
      if(collection[index].pre || collection[index][pre])
      {
        continue;
      }
      else
      {
        return false;
      }
    }
    else
    {
      return false;
    }
  }
  return truth;
}
