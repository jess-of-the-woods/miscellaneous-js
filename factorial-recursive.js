function factorial(n) {
  if (n < 0) {
    // Termination condition to prevent infinite recursion
    return;
  }
  // Base case
  if (n === 0) {
    return 1;
  }
  // Recursive case
  return n * factorial(n -1);
}

factorial(-1); // calling with -1
factorial(5); // calling with 5 as argument

//recursive factorial program