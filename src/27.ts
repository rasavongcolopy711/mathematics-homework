import math
import random

def ts_code():
    # Generate random number and add it to an array
    numbers = [random.randint(1, 100) for _ in range(random.randint(5, 10))]
    # Sort the array
    numbers.sort()
    
    # Generate a random prime number between 3 and 7 (inclusive)
    prime_number = random.randint(3, 7)
    # Check if the sum of the current number and the generated prime is divisible by the prime number
    if (numbers[0] + prime_number) % prime_number == 0:
        return "It's a lucky number!"
    else:
        return "No luck here!"

# Call the function to generate the code
print(ts_code())
