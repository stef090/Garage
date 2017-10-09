import datetime
import random


class MyCache:

##  CONSTRUCTOR
    def __init__(self):
        self.cache = {}
        self.max_cache_size = 10
##  CONTAINS
    def __contains__(self, key):
        return key in self.cache
##  UPDATE AND REMOVE OLDEST ITEM
    def update(self, key, value):
        if key not in self.cache and len(self.cache) >= self.max_cache_size:
            self.remove_oldest()

        self.cache[key] = {'date_accessed': datetime.datetime.now(),
                           'value': value}
##  REMOVE OLDEST ENTRY
    def remove_oldest(self):
        oldest_entry = None
        for key in self.cache:
            if oldest_entry is None:
                oldest_entry = key
            elif self.cache[key]['date_accessed'] < self.cache[oldest_entry]['date_accessed']:
                oldest_entry = key
        self.cache.pop(oldest_entry)
##  RETURN SIZE OF CACHE
    @property
    def size(self):

        return len(self.cache)


if __name__ == '__main__':
    # Test the cache
    keys = ['test', 'red', 'fox', 'fence', 'junk',
            'other', 'alpha', 'bravo', 'cal', 'devo',
            'ele']
    s = 'abcdefghijklmnop'
    cache = MyCache()
    for i, key in enumerate(keys):
        if key in cache:
            continue
        else:
            value = ''.join([random.choice(s) for i in range(20)])
            cache.update(key, value)
        print("#%s iterations, #%s cached entries" % (i+1, cache.size))
        print cache.cache
    print
        
    
    
