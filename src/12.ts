import numpy as np
from scipy import stats

np.random.seed(42) # set random seed for reproducibility

# generate a random sample from a normal distribution with mean 0 and standard deviation 1
x = np.random.normal(size=5)
print(x)

# compute the t-statistic
t_stat = stats.ttest_ind(a, b, axis=None)
print(t_stat)
