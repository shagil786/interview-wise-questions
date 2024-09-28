1. You are given a task to implement a memoization function. Memoization is an optimization technique that stores the results of expensive function calls and returns the cached result when the same inputs occur again.
   Requirements:
   Implement a memo function that takes a single function func as an argument and returns a new memoized version of that function.
   The memoized function should store results of previous function calls and use these cached results to avoid redundant computations.
   Use the argument values to create unique keys for storing results in the cache.
   Ensure that the memoized function can handle functions with multiple arguments.
   Example Usage:
   Given the following example function add:
   function add(a, b) {
   return a + b;
   }
   const memoizedAdd = memo(add);
   console.log(memoizedAdd(1, 2)); // Output: 3, logs: "12"
   console.log(memoizedAdd(1, 2)); // Output: 3, logs: "12" (retrieved from cache)
   console.log(memoizedAdd(2, 3)); // Output: 5, logs: "23"
   console.log(memoizedAdd(1, 2)); // Output: 3, logs: "12" (retrieved from cache)
   Function Signature:
   function memo(func) {
   // Implementation goes here
   }

2. simple to-do list application using HTML and vanilla JavaScript involves setting up the basic structure in HTML, and then writing JavaScript to handle adding, updating, and deleting tasks.
