import numpy as np
from scipy.stats import beta
np.random.seed(42)

x = np.array([1.0, 2.0, 3.0])
y = np.array([4.0, 5.0, 6.0])

# Define the shape of the beta distribution
alpha = 1.0
beta_shape = y.size

# Generate the random variable 'theta' which follows a beta distribution
theta = beta.rvs(alpha, beta_shape)

# The mean and standard deviation of the beta distribution are calculated based on alpha and beta_shape
mean = np.mean(y)
standard_deviation = np.std(y)

print(f"Mean: {mean}")
print(f"Standard Deviation: {standard_deviation}")
