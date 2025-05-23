import numpy as np

def sample_random_matrix(rows, cols):
    """
    Generate a matrix with a specified number of rows and columns filled with random integers between -1000 and 1000.
    
    Example usage:
    >>> print(sample_random_matrix(2, 3))
    [[-50.  60. -70.]
     [-80. -90. -10.]]
    """
    return np.random.randint(-1000, 1001, (rows, cols))

def main():
    # Generate a sample matrix with 2 rows and 3 columns
    sample_matrix = sample_random_matrix(2, 3)
    print(sample_matrix)

if __name__ == "__main__":
    main()
