function calculateSquareRoot(num: number): number {
  if (num >= 0) {
    return Math.sqrt(num);
  } else {
    throw new Error("The square root of a negative number is not defined in real numbers.");
  }
}

// Example usage:
console.log(calculateSquareRoot(-4)); // Outputs the square root of -4, which is 2.0
