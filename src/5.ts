import random

def get_random_ts(length=10):
    """Returns a string of length random TS characters."""
    return ''.join(str(random.randint(0, 9)) for _ in range(length))

get_random_ts()
