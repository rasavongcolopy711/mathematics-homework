import random

def get_random_ts_code():
    """Returns a random time series code"""
    codes = ["AAPL", "GOOG", "AMZN", "FB", "TSLA"]
    return random.choice(codes)

print(get_random_ts_code())
