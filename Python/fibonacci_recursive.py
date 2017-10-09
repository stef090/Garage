import datetime

def memoize(function):
    memo = {}
    max_cache_time = 300
    max_calls = 10
    def wrapper(key):
        if key not in memo:
            value = function(key)
            memo[key]={'number_of_calls':0,
                       'first_call_time':datetime.datetime.now(),
                       'value': value}
        elif key in memo:
            memo[key]['number_of_calls'] += 1
            if memo[key]['number_of_calls'] == max_calls or \
               (datetime.datetime.now() - memo[key]['first_call_time']).total_seconds() > max_cache_time:
                del memo[key]
        return (memo.get(key) and memo.get(key).get('value')) or function(key)
    return wrapper

@memoize
def fib(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fib(n-1) + fib(n-2)
