def fibonacci(n):
    """
    Generate an infinite sequence of Fibonacci numbers.
    
    Example usage:
    >>> fibonacci(10)
    [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
    """
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b

for num in fibonacci(10):
    print(num)
